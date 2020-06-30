import React, { Component } from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'

import displayPrice from '../../utils/displayPrice'
import COLORS from '../../assets/colors'

export default class BillItem extends Component {
	state = {}
	render() {
		const { item, isEditing, changeData } = this.props
		return (
			<View style={{
				flexDirection: 'row',
				flex: 1
			}}>
				<View style={{ flex: 7, marginBottom: 15}}>
					<View style={{
						flexDirection: 'row',
						marginBottom: 5
					}}>
						<Text style={{ 
							flex: 1 }}>{item.quantity}</Text>
						<Text style={{ 
							flex: 4 }}>{item.name}</Text>
						<Text style={{ 
							flex: 2, 
							fontFamily: 'Montserrat-Bold',
							textAlign: 'right', 
							alignItems: 'stretch' 
						}}>{displayPrice(item.price)}</Text>
					</View>
					<View style={{
						flexDirection: 'row',
						alignItems: 'center',
						flex: 1
					}}>
						<View style={{ flex: 1 }}></View>
						<View style={{ flex: 6, marginRight: 5 }}>
							<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
								{item.borrower && item.borrower.map((borrower, index) =>
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
				{
					isEditing ? 
					<TouchableOpacity style={{ 
						flex: 1, 
						alignItems: 'flex-end' 
					}}
						onPress={()=>{changeData(item, 'delete')}}
					>
						<AntDesign name="delete" size={18} color={COLORS.red} /> 
					</TouchableOpacity>
					: 
					<></>
				}
			</View>
		)
	}
}

