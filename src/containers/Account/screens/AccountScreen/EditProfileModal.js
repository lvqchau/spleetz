import React from 'react'
import AWS from 'aws-sdk'
import { ScrollView, TouchableOpacity, SafeAreaView, Text, View, StyleSheet, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

import COLORS from '../../../../assets/colors'
import AntDesign from 'react-native-vector-icons/AntDesign'
// import styles from './Account.component.style'
import ImagePicker from 'react-native-image-picker'
import {decode} from 'base64-arraybuffer'
import * as RNFS from 'react-native-fs'
import { Formik, Field } from 'formik'
import Input from '../../../../components/FormModal/Input'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { updateUser } from '../../../../services/accountGateway.js'
import AsyncStorage from '@react-native-community/async-storage'

const ID = 'AKIAYMWV4MCCZD3KP2QN'
const secretKey = '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'
const region = 'ap-southeast-1'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  avatarContainer: {
		borderColor: '#9B9B9B',
    justifyContent: 'center',
		alignItems: 'center'
  },
  avatar: {
		borderRadius: 75,
    width: 150,
    height: 150,
	},
	cameraIcon: {
		backgroundColor: COLORS.gray, 
		padding: 5, 
		position: 'absolute', 
		left: 110, 
		top: 110, 
		borderRadius: 40,
		 borderColor: COLORS.white, 
		 borderWidth: 5, 
		 zIndex: 100
	},
	inputForm: {
		padding: 20
	}
})

class EditProfileModal extends React.Component {
	constructor(props){
		super(props)
		this.state = props.route.params
		this.selectPhotoTapped = this.selectPhotoTapped.bind(this)
		this.uploadS3 = this.uploadS3.bind(this)
	}

	async uploadS3() {
		const userId = this.state.user.id
		const {uri, name} = this.state.avatar
		const path = `image/${userId.slice(0,5)}${Math.floor(Math.random() * (99 - 10 + 1) ) + 10}${name}`
		const s3 = new AWS.S3({
			accessKeyId: ID,
			secretAccessKey: secretKey,
			region: region
		})

		let contentDeposition = 'inline;filename="' + name + '"'
		const base64 = await RNFS.readFile(uri, 'base64')
		const arrayBuffer = decode(base64)

		const params = {
			Bucket: 'spleetz',
			Key: path,
			Body: arrayBuffer,
			ContentDeposition: contentDeposition
		}
		await s3.upload(params, async (err, data) => {
			if (err) throw err
			console.log(`File upload successfully at ${data.Location}`)
			this.setState({
				s3URL: data.Location
			})
		})
	}

	selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
			maxHeight: 500,
			mediaType: 'photo',
      storageOptions: {
				skipBackup: true
      },
    }

    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response)
      if (response.didCancel) {
        console.log('User cancelled photo picker')
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error)
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton)
      } else {
        this.setState({
					avatar: {
						uri: response.uri,
						name: response.fileName,
					}
				}, async () => {
					await this.uploadS3()
				})
      }
    })
	}

  render() {
		const { navigation} = this.props
		const { user, avatar } = this.state
    return (
      <SafeAreaView>
					<Formik
						initialValues={{
							fullname: user.fullname,
							email: user.email, 
							phone: user.phone
						}}
						onSubmit={async(values, { setSubmitting, setErrors }) => {
							setSubmitting(true)
							let newUser = {
								...values
							}
							if (this.state.s3URL) {
								newUser.avatarUrl = this.state.s3URL
							}
							const userId = await AsyncStorage.getItem('userId')
							const user = await updateUser(userId, newUser)
							console.log(user)
							setSubmitting(false)
							navigation.goBack()
						}}
					>
						{({handleChange, handleBlur, handleSubmit, values}) => (
							<KeyboardAwareScrollView>
								<View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
									<TouchableOpacity style={{margin: 15}} onPress={() => navigation.goBack()}>
										<Ionicons name="ios-arrow-round-back" size={32} color={COLORS.aqua} />
									</TouchableOpacity>
									<TouchableOpacity style={{margin: 15}} onPress={handleSubmit}>
										<Text style={{color: COLORS.aqua, fontWeight: 'bold'}}>SAVE</Text>
									</TouchableOpacity>
								</View>
								<TouchableOpacity style={{position: 'relative', display: 'flex', flexDirection: 'row', justifyContent: 'center'}} onPress={this.selectPhotoTapped}>
									<View
										style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
										{!avatar ? (
											<View>
												<Image style={styles.avatar} source={{uri: user.avatarUrl}}/>
												<View style={styles.cameraIcon}>
													<AntDesign name="camera" size={25} color={COLORS.black} />
												</View>
											</View>							
										) : (
											<View>
												<Image style={styles.avatar} source={{uri: avatar.uri}} />
												<View style={styles.cameraIcon}>
													<AntDesign name="camera" size={25} color={COLORS.black} />
												</View>
											</View>
										)}
									</View>
								</TouchableOpacity>
								<ScrollView style={styles.inputForm}>
									<Input
										label='Full name'
										value={values.fullname}
										onChange={handleChange('fullname')}
										onBlur={handleBlur('fullname')}
									/>
									<Input
										label='Email'
										value={values.email}
										onChange={handleChange('email')}
										onBlur={handleBlur('email')}
									/>
									<Input
										label='Phone number'
										value={values.phone}
										onChange={handleChange('phone')}
										onBlur={handleBlur('phone')}
									/>
								</ScrollView>	
							</KeyboardAwareScrollView>
						)}
					</Formik>
			</SafeAreaView>
    )
  }
}

export default EditProfileModal