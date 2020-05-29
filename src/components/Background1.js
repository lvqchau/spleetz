import React, { Component } from 'react'
import { View, Dimensions } from 'react-native'
import COLORS from '../assets/colors'

export default class Background1 extends Component {
  render() { 
		const screenWidth = Math.round(Dimensions.get('window').width)
		const screenHeight = Math.round(Dimensions.get('window').height)
		return(
			<View style={{left: 0, height: '100%', position: 'absolute'}}>
				<View  style={{
					position: 'absolute',
					width: 363,
					height: 363,
					borderRadius: 363,
					top: -272,
					left: 90, 
					backgroundColor: '#00D0CB',
					opacity: 1
				}}></View>
				<View  style={{
					position: 'absolute',
					width: 363,
					height: 363,
					borderRadius: 363,
					top: -305,
					left: -76, 
					backgroundColor: COLORS.salmon,
					opacity: 1
				}}></View>
				<View style={{
					position: 'absolute',
					width: 363,
					height: 363,
					borderRadius: 363,
					top: screenHeight - 80,
					left: -76, 
					backgroundColor: '#00D0CB',
					opacity: 1
				}}></View>
				<View style={{
					position: 'absolute',
					width: 363,
					height: 363,
					borderRadius: 363,
					top: screenHeight - 135,
					left: 90,
					backgroundColor: COLORS.salmon,
					opacity: 1
				}}></View>
			</View>
		)
	}
}
