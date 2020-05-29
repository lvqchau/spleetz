import React, { Component } from 'react'
import { ScrollView, FlatList, Text, Dimensions } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { getInset } from 'react-native-safe-area-view'
import BillItem from './BillItem'
import COLORS from '../../assets/colors'
import displayPrice from '../../utils/displayPrice'

export default class BillContainer extends Component {
	state = {}
	render() {
		const { data } = this.props
		return (
			<LinearGradient
				colors={COLORS.gradientPurple}
				style={{
					padding: 10,
					borderRadius: 6,
					height: Dimensions.get('window').height - 340 - getInset('bottom')
				}}
			>
				<ScrollView style={{ marginBottom: 5 }}>
					{data && data.map((billItem, index) =>
						<BillItem key={index} data={billItem}></BillItem>
					)}
				</ScrollView>
				<Text style={{
					alignItems: 'stretch',
					textAlign: 'right',
					fontFamily: 'Montserrat',
					fontWeight: '700',
					fontSize: 26,
					color: COLORS.white
				}}>{displayPrice(1000000)}</Text>
			</LinearGradient>
		)
	}
}
