import React, { Component } from 'react'
import { View, Text, FlatList, Image, ScrollView } from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

import styles from './Debt.component.style'
import COLORS from '../../assets/colors'
import LinearGradient from 'react-native-linear-gradient'
import { data } from '../Notification/screens/NotiData'

export default class DebtContainer extends Component {

	constructor(props) {
		super(props)
	}

	getTotalPrice(item) {
		if (item) {
			return item.reduce((totalPrice, currentItem) => totalPrice + currentItem.price * currentItem.quantity, 0)
		}
		else return 0
	}

	displayPrice(num) {
		return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
	}

	renderYear(item, index) {
		const { data } = this.props
		// temporary date format: 22/02/2020
		const year = item.date.split('/')[2]
		if (index === 0)
			return <Text style={styles.yearText}>{year}</Text>
		else if (year !== data[index - 1].date.split('/')[2]) {
			return <Text style={styles.yearText}>{year}</Text>
		}
	}

	renderDebtItem(item, index) {
		return (
			<View style={{ ...styles.flexRow, justifyContent: 'space-around', flex: 1, paddingHorizontal: 25, marginTop: 5 }}>
				<View style={{ flex: 2, position: 'relative', flexDirection: 'column', alignItems: 'flex-start' }}>
					{/* <Text>{item.date}</Text> */}
					{this.renderYear(item, index)}
					<LinearGradient
						start={{ x: 0, y: 0 }}
						end={{ x: 1, y: 1 }}
						colors={COLORS.gradientPurple}
						style={styles.dateContainer}
					>
						<Text style={[styles.dateText, styles.monthText]}>Feb</Text>
						<Text style={styles.dateText}>22</Text>
					</LinearGradient>
				</View>
				<View style={styles.debtContainer}>
					<View style={[styles.flexRow, { marginBottom: 5, flex: 1, alignItems: 'center' }]}>
						<MaterialIcon name='location-on' size={18} color={COLORS.black}></MaterialIcon>
						<Text style={styles.addressText}>{item.address}</Text>
					</View>
					{item.type == 'owe' ?
						<View>
							<Image
								style={styles.avatarContainer}
								source={{ uri: item.payer.avatar }}
							/>
							<Text style={styles.debtStatus}>You owe
								<Text style={[styles.debtInfo, styles.moneyInfo]}> {this.displayPrice(this.getTotalPrice(item.items))}</Text> to
								<Text style={styles.debtInfo}> {item.payer.name}</Text>
							</Text>
						</View>
						:
						<>
							<ScrollView
								horizontal={true}
								showsHorizontalScrollIndicator={false}
							>
								<FlatList
									style={styles.flexRow}
									data={item.borrower}
									renderItem={({ index, item }) =>
										<Image
											style={styles.avatarContainer}
											source={{ uri: item.avatar }}
										/>
									}
								/>
							</ScrollView>
							<Text style={styles.debtStatus}>You split
								<Text style={[styles.debtInfo, styles.moneyInfo]}> {this.displayPrice(120000)}</Text>
								{/*Bill total*/}
							</Text>
						</>
					}
				</View>
			</View>
		)
	}

	render() {
		const { data } = this.props
		return (
			<View style={{ flex: 1 }}>
				<FlatList
					data={data}
					renderItem={
						({ index, item }) => this.renderDebtItem(item, index)
					}
				/>
			</View>
		)
	}
}
