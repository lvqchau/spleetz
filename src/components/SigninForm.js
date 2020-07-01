import React, { Component } from 'react'
import { Formik, Field } from 'formik'
import Input from './FormModal/Input'
import {View, TouchableOpacity, TextInput, Text} from 'react-native'
import styles from '../containers/Access/screens/Signin.component.style'
import LinearGradient from 'react-native-linear-gradient'
import COLORS from '../assets/colors'
import { logIn } from '../services/accountGateway.js'
import Ionicons from 'react-native-vector-icons/Ionicons'

// import { userService } from '../../services/index'

export default class SignInForm extends Component {
	navigate = (name) => {
    this.props.navigation.navigate(name)
	}
	
	constructor(props) {
		super(props)
		this.state = {
			secureTextEntry: true
		}
	}

	render() {
		const {authedUser} = this.props
		return (
			<Formik
				initialValues={{
					username: '',
					password: '',
				}}
				onSubmit={async (values, { setSubmitting, setErrors }) => {
					setSubmitting(true)
					const objUser = await logIn(values)
					if (objUser !== undefined) {
						authedUser(objUser.accessToken, false)
					}
					setSubmitting(false)
				}}
			>
				{({handleChange, handleBlur, handleSubmit, values}) => (
					<View style={styles.loginForm}>
						<Input
							label='Username'
							value={values.username}
							onChange={handleChange('username')}
							onBlur={handleBlur('username')}
						/>
						<View style={{
							position: 'relative',
						}}>
							<Input
								label='Password'
								password={true}
								secureTextEntry={this.state.secureTextEntry}
								value={values.password}
								onChange={handleChange('password')}
								onBlur={handleBlur('password')}
							/>
							<TouchableOpacity style={{
								position: 'absolute',
								right: 0,
								bottom: 15
							}}
								onPress={()=>this.setState({secureTextEntry: !this.state.secureTextEntry})}
							>
								<Ionicons name={this.state.secureTextEntry ? 'ios-eye-off' : 'ios-eye'} size={24} color={COLORS.aqua}/>
							</TouchableOpacity>
						</View>
						<View style={{alignItems: 'center'}}>
							<View style={{flexDirection:'row', marginTop: 10}}>
								<Text style={{fontFamily: 'Montserrat-Medium'}}>Don't have an account?</Text>
								<TouchableOpacity onPress={()=>this.navigate('Signup')}>
									<Text style={{fontFamily: 'Montserrat-Medium', color: '#00D0CB'}}> Sign up</Text>
								</TouchableOpacity>
							</View>
							<TouchableOpacity style={{marginTop: 40}} onPress={handleSubmit}>
								<LinearGradient
									style={styles.loginButton}
									start={{ x: 0, y: 1 }}
									end={{ x: 1, y: 1 }}
									colors={COLORS.gradientSalmon}
								>
									<Text style={{color: COLORS.white, fontFamily: 'Montserrat-SemiBold', fontSize: 22}}>Log in</Text>
								</LinearGradient>
							</TouchableOpacity>
						</View>
					</View>	
				)}
			</Formik>
		)
	}
}