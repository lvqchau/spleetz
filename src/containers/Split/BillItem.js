import React, { Component } from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import displayPrice from '../../utils/displayPrice'
import COLORS from '../../assets/colors'

export default class BillItem extends Component {
	state = {}
	render() {
		const { data } = this.props
		return (
			<View style={{ flex: 1, marginBottom: 5}}>
				<View style={{
					flexDirection: 'row',
					marginBottom: 5
				}}>
					<Text style={{ 
						flex: 1 }}>{data.quantity}</Text>
					<Text style={{ 
						flex: 5 }}>{data.name}</Text>
					<Text style={{ 
						flex: 2, 
						fontFamily: 'Montserrat-Bold',
						textAlign: 'right', 
						alignItems: 'stretch' 
					}}>{displayPrice(data.price)}</Text>
				</View>
				<View style={{
					flexDirection: 'row',
					alignItems: 'center',
					flex: 1
				}}>
					<View style={{ flex: 1 }}></View>
					<View style={{ flex: 6, marginRight: 5 }}>
						<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
							{data.borrower && data.borrower.map((borrower, index) =>
								<View key={index}>
									<Image
										style={{
											width: 32,
											height: 32,
											borderRadius: 32 / 2,
											borderColor: COLORS.white,
											borderWidth: 1,
											marginRight: 5
										}}
										source={require('../../assets/images/avatar_2.png')}
									/>
								</View>
							)}
						</ScrollView>
					</View>
					<View style={{flex: 1}}>
						<TouchableOpacity onPress={()=>{}}>
							<MaterialCommunityIcons name="account-plus" size={24} color={COLORS.aqua}/>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		)
	}
}

