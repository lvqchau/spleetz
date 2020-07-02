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

class AddFriendModal extends React.Component {
	constructor(props){
		super(props)
		this.state = props.route.params
	}

  render() {
		const { navigation } = this.props

    return (
      <SafeAreaView>
					
			</SafeAreaView>
    )
  }
}

export default AddFriendModal