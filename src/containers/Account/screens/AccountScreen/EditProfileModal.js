import React from 'react'
import { TouchableOpacity, SafeAreaView, Text, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

import COLORS from '../../../../assets/colors'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons
  from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './Account.component.style'
import Avatar from '../../../../components/Avatar'
import AsyncStorage from '@react-native-community/async-storage'

class EditProfileModal extends React.Component {
  render() {
		const { navigation } = this.props
		console.log(AsyncStorage.getItem('userId'))
    return (
      <SafeAreaView>
        <TouchableOpacity style={{margin: 15}} onPress={() => navigation.goBack()}>
          <Ionicons name="ios-arrow-round-back" size={32} color={COLORS.aqua} />
        </TouchableOpacity>
				<View style={styles.infoContainer}>
					<View style={styles.avatarContainer}>
						<Avatar size={90} style={{ marginRight: 25 }} source={{uri: 'https://spleetz.s3-ap-southeast-1.amazonaws.com/image/default-avatar.png'}} />
					</View>
					<View style={{ flexDirection: 'row', marginBottom: 10 }}>
						<AntDesign style={{ marginRight: 10 }} name="phone" size={20} color={COLORS.lightgray} />
						<Text style={styles.lightText}>(+84) 0906835383</Text>
					</View>
					<View style={{ flexDirection: 'row' }}>
						<AntDesign style={{ marginRight: 10 }} name="mail" size={20} color={COLORS.lightgray} />
						<Text style={styles.lightText}>jnsmith@gmail.com</Text>
					</View>
				</View>      
			</SafeAreaView>
    )
  }
}

export default EditProfileModal