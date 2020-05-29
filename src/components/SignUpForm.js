import React, { Component } from 'react'
import { Formik, Field } from 'formik'
import Input from './FormModal/Input'
import {View, TouchableOpacity, TextInput, Text, ScrollView} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import COLORS from '../assets/colors'
import styles from '../containers/Access/screens/SignUp.component.style'

// import { userService } from '../../services/index'

export default class SignUpForm extends Component {
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
					firstName: '', 
					lastName: '',
					email: '', 
					phoneNumber: ''
				}}
				onSubmit={async (values, { setSubmitting, setErrors }) => {
					console.log(values)
					authedUser('token', false)
				}}
			>
				{({handleChange, handleBlur, handleSubmit, values}) => (
					<View style={styles.signUpForm}>
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
						<View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
							<Input
								label='First name'
								value={values.firstName}
								onChange={handleChange('firstName')}
								onBlur={handleBlur('firstName')}
								style={{width: '45%'}}
							/>
							<Input
								label='Last name'
								value={values.lastName}
								onChange={handleChange('lastName')}
								onBlur={handleBlur('lastName')}
								style={{width: '45%'}}
							/>
						</View>	
						<Input
							label='Email'
							value={values.email}
							onChange={handleChange('email')}
							onBlur={handleBlur('email')}
						/>
						<Input
							label='Phone number'
							value={values.phoneNumber}
							onChange={handleChange('phoneNumber')}
							onBlur={handleBlur('phoneNumber')}
						/>
						<View style={{alignItems: 'center'}}>
							<View style={{flexDirection:'row', marginTop: 10}}>
								<Text style={{fontFamily: 'Montserrat-Medium'}}>Have an account?</Text>
								<TouchableOpacity onPress={()=>this.navigate('Signin')}>
									<Text style={{fontFamily: 'Montserrat-SemiBold', color: COLORS.salmon}}> Log in</Text>
								</TouchableOpacity>
							</View>
							<TouchableOpacity style={{marginTop: 20, marginBottom: 40}} onPress={handleSubmit}>
								<LinearGradient
									style={styles.signUpButton}
									start={{ x: 1, y: 1 }}
									end={{ x: 0, y: 1 }}
									colors={COLORS.gradientTurquoise}
								>
									<Text style={{color: COLORS.white, fontFamily: 'Montserrat-SemiBold', fontSize: 22}}>Sign up</Text>
								</LinearGradient>
							</TouchableOpacity>
						</View>
					</View>	
				)}
			</Formik>
		)
	}
}