import React, { Component } from 'react'
import { SafeAreaView, TouchableOpacity, Text, View, Image } from 'react-native'
import SignUpForm from '../../../components/SignUpForm'
import { ScrollView } from 'react-native-gesture-handler'
import styles from './SignUp.component.style'
import Background2 from '../../../components/Background2'


class SignUpScreen extends Component {
  render() {SignUpForm
    const { _authedUser, navigation } = this.props
    return (
      <SafeAreaView>
				<ScrollView >
					<View  style={{alignItems: 'center', height: '100%', flexDirection: 'column', justifyContent: 'center'}}>
						<Background2></Background2>
						<Image
							source = {require('../../../assets/images/Team.png')}
							style = {styles.teamImage}
						/>
						<View style={{flexDirection: 'row'}}>
							<Text style={styles.slogan}>Welcome to </Text>
							<Image
								source = {require('../../../assets/images/logo.png')}
								style={{width: 65, height: 28}}
							/>
						</View>
		
						<SignUpForm authedUser={_authedUser} navigation={navigation}/>
					</View>
				</ScrollView>
      </SafeAreaView>
    )
  }
}

export default SignUpScreen