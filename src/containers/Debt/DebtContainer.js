import React, { Component } from 'react'
import { View, Text, FlatList, Image } from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

import styles from './Debt.component.style'
import COLORS from '../../assets/colors'

export default class DebtContainer extends Component {
	getTotalPrice(item){
		if (item) { 
			return item.reduce((totalPrice, currentItem) => totalPrice + currentItem.price* currentItem.quantity, 0)
		}
		else return 0
	}
	render() {
		const {data} = this.props
		return (
			<View style={{flex: 1}}>
				<FlatList
						data = {data}
						renderItem = {
							({index, item}) => 
							<View style = {{flexDirection: 'row'}}>
								<View style ={{flexDirection: 'column'}}>
									<Text>{item.date}</Text>
								</View>
								<View>
									<View style={{flexDirection: 'row'}}>
										<MaterialIcon name='location-on' size={24} color={COLORS.red}></MaterialIcon>
										<Text>{item.address}</Text>
									</View>
									{item.type == 'owe' ?
										<View>
											<Image
											style={{width: 50, height: 50}}
											source={{uri: item.payer.avatar}}
											/>
											<Text>You owe 
												<Text> {this.getTotalPrice(item.items)}</Text> to
												<Text> {item.payer.name}</Text>
											</Text>
										</View>
									:
										<View>
											<FlatList
												style = {{flexDirection: 'row'}}
												data = {item.borrower}
												renderItem = {({index, item}) =>
													<Image
														style={{width: 50, height: 50}}
														source={{uri: item.avatar}}
													/>
											}
											/>	
										</View>
									}
								</View>
							</View>
						}
					/>		
			</View>	
		)
	}
}
