import React, { Component } from 'react'
import { View, Text, FlatList, Image } from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

import styles from './Debt.component.style'
import COLORS from '../../assets/colors'

export default class DebtContainer extends Component {

	constructor(props) {
		super(props)
	}
	getTotalPrice(item){
		if (item) { 
			return item.reduce((totalPrice, currentItem) => totalPrice + currentItem.price* currentItem.quantity, 0)
		}
		else return 0
	}

	displayPrice(num) {
		return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
	}

	render() {
		const {data} = this.props
		return (
			<View style={{flex: 1}}>
				<FlatList
						data = {data}
						renderItem = {
							({index, item}) => 
							<View style = {{...styles.flexRow, justifyContent:'space-around'}}>
								<View style ={{flexDirection: 'column', alignItems: 'center'}}>
									<Text>{item.date}</Text>
									<View style={{borderColor: COLORS.darkgray, borderWidth: 1, borderStyle: 'solid', width: 0, height: 96}}></View>
								</View>
								<View style={{width: 230}}>
									<View style={styles.flexRow}>
										<MaterialIcon name='location-on' size={24} color={COLORS.red}></MaterialIcon>
										<Text style={styles.addressText}>{item.address}</Text>
									</View>
									{item.type == 'owe' ?
										<View>
											<Image
											style={styles.avatarContainer}
											source={{uri: item.payer.avatar}}
											/>
											<Text style={styles.debtStatus}>You owe 
												<Text style={styles.debtInfo}> {this.displayPrice(this.getTotalPrice(item.items))}</Text> to
												<Text style={styles.debtInfo}> {item.payer.name}</Text>
											</Text>
										</View>
									:
										<View>
											<View style={styles.flexRow}>
												<FlatList
													style = {styles.flexRow}
													data = {item.borrower.slice(0, 5)}
													renderItem = {({index, item}) =>
														<Image
															style={styles.avatarContainer}
															source={{uri: item.avatar}}
														/>
													}
												/>	
												{item.borrower.length > 5 ? 
													<View styles = {styles.moreUserButton}>
														<Text>{`+${item.borrower.length - 5}`}</Text>
													</View>
												: null}
											</View>
											<Text style={styles.debtStatus}>You split 
												<Text style={styles.debtInfo}> {this.displayPrice(120000)}</Text> 
												{/*Bill total*/}
											</Text>
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
