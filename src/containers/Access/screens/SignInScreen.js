import React, { Component } from 'react'
import { SafeAreaView, TouchableOpacity, Text, Image, View} from 'react-native'
import SigninForm from '../../../components/SigninForm'
import Background1 from '../../../components/Background1'

import COLORS from '../../../assets/colors'

import styles from './Signin.Component.style'


class SignInScreen extends Component {

  render() {
		const { _authedUser, navigation } = this.props
		
    return (
			<SafeAreaView style={{alignItems: 'center', height: '100%', flexDirection: 'column', justifyContent: 'center'}}>
				<Background1></Background1>
				<Image
					source={require('../../../assets/images/logo.png')}
					style = {styles.logo}
				/>
				<Text style={styles.slogan}>Log in and enjoy<Text style={{color: COLORS.salmon, fontSize: 16, fontFamily: 'Montserrat-Bold'}}> splitting</Text></Text>
				<SigninForm authedUser={_authedUser} navigation={navigation}/>
      </SafeAreaView>
    )
  }
}

export default SignInScreen