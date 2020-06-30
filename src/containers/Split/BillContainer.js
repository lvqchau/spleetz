import React, { Component } from 'react'
import { ScrollView, View, Text, Dimensions } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { getInset } from 'react-native-safe-area-view'
import BillItem from './BillItem'
import COLORS from '../../assets/colors'
import displayPrice from '../../utils/displayPrice'

export default class BillContainer extends Component {
	render() {
		const { data, isEditing, changeData } = this.props
		return (
			<View style={{
				backgroundColor: COLORS.white,
				shadowColor: COLORS.black,
				shadowOffset: { width: 0, height: 0 },
				shadowOpacity: 0.2,
				shadowRadius: 3,
				elevation: 2
			}}>
			<LinearGradient
				colors={[COLORS.white, COLORS.white]}
				style={{
					padding: 10,
					borderRadius: 6,
					height: Dimensions.get('window').height - 340 - getInset('bottom')
				}}
			>
				<ScrollView style={{ marginBottom: 5 }} showsVerticalScrollIndicator={false}>
					{data && data.map((billItem, index) =>
						<BillItem isEditing={isEditing} key={index} item={billItem} changeData={changeData}></BillItem>
					)}
				</ScrollView>
				<Text style={{
					alignItems: 'stretch',
					textAlign: 'right',
					fontFamily: 'Montserrat-Bold',
					fontSize: 26,
					color: COLORS.salmon
				}}>{displayPrice(1000000)}</Text>
			</LinearGradient>
			</View>
		)
	}
}
