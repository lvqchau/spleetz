import React, { Component } from 'react'
import {View, Text, Image} from 'react-native'
import COLORS from '../../../../assets/colors'
import styles from '../Message.component.style'

export default class ReceiveBubble extends Component {

	render() {
		const {content, time} = this.props
		return (
			<View style={[styles.flexRow, {width: '100%'}]}>
				<View style={styles.chatAvatar}>
					<Image style={{width: 37, height: 37}} source={require('../../../../assets/images/avatar.png')}/>
				</View>
				<View style={styles.flexColumn}>
					<View style={styles.receiveBubble}>
						<Text style={{flexWrap: 'wrap', color: COLORS.black, fontFamily: 'Montserrat-Medium', fontSize: 14}}>{content}</Text>
					</View>
					<Text style={styles.chatTime}>{time}</Text>
				</View>
			</View>	
		)
	}
}