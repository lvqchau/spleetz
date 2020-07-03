import React, { Component } from 'react'
import { View, Text, FlatList, Image, ScrollView, ActivityIndicator, ActivityIndicatorBase } from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'

import styles from './Debt.component.style'
import COLORS from '../../assets/colors'
import LinearGradient from 'react-native-linear-gradient'
import { data } from '../Notification/screens/NotiData'
import { getUserInfo } from '../../services/accountGateway'
import Avatar from '../../components/Avatar'
import { TouchableOpacity } from 'react-native-gesture-handler'
import axios from '../../services/axios'
import { acceptBill } from '../../services/billGateway'

export default class DebtContainer extends Component {

	constructor(props) {
		super(props)
		this.state = {
			isPaying: false
		}
	}

	getTotalPrice(item) {
		if (item) {
			return item.reduce((totalPrice, currentItem) => totalPrice + currentItem.price, 0)
		}
		else return 0
	}

	displayPrice(num) {
		return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
	}

	renderYear(date, index) {
		const { data } = this.props
		const year = date.getFullYear()
		if (index === 0)
			return <Text style={styles.yearText}>{year}</Text>
		else {
			let preDate = new Date(data[index - 1].startDate)
			if (year !== preDate.getFullYear())
				return <Text style={styles.yearText}>{year}</Text>
		}
	}

	_acceptBill = async (billId, debtId) => {
		this.setState({ isPaying: true })
		await acceptBill(billId, debtId)
		this.props.getAllItems()
		this.setState({ isPaying: false })
	}

	getUser(accountId) {
		const { friend } = this.props
		let tmp = friend.find(user => user.accountId === accountId)
		return tmp
	}

	renderDebtDetail(userId, item) {
		if (userId === item.borrowerId) {
			const user = this.getUser(item.payerId)
			if (user)
				return (
					<View>
						<Avatar source={user.avatarUrl} size={36} style={{ borderColor: 'white', borderWidth: 1, marginRight: 5 }} />
						<Text style={styles.debtStatus}>You owe
							<Text style={[styles.debtInfo, styles.moneyInfo]}> {this.displayPrice(this.getTotalPrice(item.items))}</Text> to
							<Text style={styles.debtInfo}> {user.fullname.split(' ')[0]}</Text>
						</Text>
					</View>
				)
		}
		else {
			const user = this.getUser(item.borrowerId)
			if (user)
				return (
					<View>
						<Avatar source={user.avatarUrl} size={36} style={{ borderColor: 'white', borderWidth: 1, marginRight: 5 }} />
						<View style={{ flexDirection: 'row', justifyContent: 'space-between', 'alignItems': 'center' }}>
							<Text style={styles.debtStatus}>You lend
							<Text style={styles.debtInfo}> {user.fullname.split(' ')[0]}</Text>
								<Text style={[styles.debtInfo, styles.moneyInfo]}> {this.displayPrice(this.getTotalPrice(item.items))}</Text>
							</Text>
							<View style={{ flex: 2, flexDirection: 'row', justifyContent: 'flex-end' }}>
								{
									// this.state.isPaying ?
									// 	<ActivityIndicatorBase size={25} color="#0000ff" />
									// 	:
									// 	<>
											// {
												item.status === 'undone'
													?
													<TouchableOpacity onPress={() => this._acceptBill(item.billId, item.id)} >
														<Text style={{ color: COLORS.aqua }}>PAID</Text>
													</TouchableOpacity>
													:
													<View>
														<Ionicons name="ios-checkmark" size={30} color={COLORS.green} />
													</View>
										// 	}
										// </>
								}
							</View>
						</View>
					</View >
				)
		}
		return (<></>)
	}

	renderDebtItem(item, index) {
		const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
		let date = new Date(item.startDate)
		const { userId } = this.props
		return (
			<View style={{ ...styles.flexRow, justifyContent: 'space-around', flex: 1, paddingHorizontal: 25, marginTop: 5 }}>
				<View style={{ flex: 2, position: 'relative', flexDirection: 'column', alignItems: 'flex-start' }}>
					{this.renderYear(date, index)}
					<LinearGradient
						start={{ x: 0, y: 0 }}
						end={{ x: 1, y: 1 }}
						colors={COLORS.gradientPurple}
						style={styles.dateContainer}
					>
						<Text style={[styles.dateText, styles.monthText]}>{month[date.getMonth()]}</Text>
						<Text style={styles.dateText}>{date.getDate()}</Text>
					</LinearGradient>
				</View>
				<View style={styles.debtContainer}>
					<View style={[styles.flexRow, { marginBottom: 5, flex: 1, alignItems: 'center' }]}>
						<MaterialIcon name='location-on' size={18} color={COLORS.black}></MaterialIcon>
						<Text style={styles.addressText}>{item.location || 'Ama kitchen'}</Text>
					</View>
					{this.renderDebtDetail(userId, item)}
				</View>
			</View>
		)
	}

	render() {
		const { data, isLoading } = this.props
		return (
			<View style={{ flex: 1 }}>
				{
					isLoading ?
						<ActivityIndicator size={25} color="#0000ff" />
						:
						<FlatList
							data={data}
							renderItem={
								({ index, item }) => this.renderDebtItem(item, index)
							}
						/>
				}
			</View>
		)
	}
}
