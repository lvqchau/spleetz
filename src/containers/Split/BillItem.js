import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'

export default class BillItem extends Component {
	state = {}
  render() {
		const { data } = this.props
    return (
			<View>
				<Text>{data.name}</Text>
				<Text>{data.quantity}</Text>
				<Text>{data.price}</Text>
				{data.borrower && data.borrower.map((borrower, index) => 
					<View key={index}>
						<Image
							source={require('../../assets/images/avatar_2.png')}
						/>
					</View>
				)}
			</View>
    )
  }
}

