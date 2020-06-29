import React, { Component } from 'react'
import { Formik, Field } from 'formik'
import Input from './FormModal/Input'
import {View, TouchableOpacity, TextInput, Text} from 'react-native'
import styles from '../containers/Access/screens/Signin.component.style'
import LinearGradient from 'react-native-linear-gradient'
import COLORS from '../assets/colors'
import axios from 'axios'
import { baseURL } from '../assets/constant/constant.js'

// import { userService } from '../../services/index'

export default class SignInForm extends Component {
	navigate = (name) => {
    this.props.navigation.navigate(name)
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
					axios({
						method: "POST",
						url: `${baseURL}/api/accounts/login`,
						data: values
					}).then(res => authedUser(res.data.id, false))
					.catch(err=>console.log(err))
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
						<Input
							label='Password'
							value={values.password}
							onChange={handleChange('password')}
							onBlur={handleBlur('password')}
						/>
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