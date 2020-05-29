import React, { Component } from 'react'
import {View, Text} from 'react-native'
import COLORS from '../../../../assets/colors'
import styles from '../Message.component.style'

export default class SendBubble extends Component {

	render() {
		const {content, time} = this.props
		return (
			<View style={styles.flexEnd}>
				<View style={styles.sendBubble}>
					<Text style={{color: COLORS.white, fontFamily: 'Montserrat-Medium', fontSize: 14}}>{content}</Text>
				</View>
				<Text style={styles.chatTime}>{time}</Text>
			</View>	
		)
	}
}