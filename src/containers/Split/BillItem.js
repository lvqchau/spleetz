import React, { Component } from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import RBSheet from "react-native-raw-bottom-sheet"
import AsyncStorage from '@react-native-community/async-storage'

import displayPrice from '../../utils/displayPrice'
import COLORS from '../../assets/colors'
import { baseURL } from '../../assets/constant/constant'
import { FlatList } from 'react-native-gesture-handler'
import axios from '../../services/axios'
import Avatar from '../../components/Avatar'

export default class BillItem extends Component {
	
	constructor(props) {
		super(props)
		this.state = {
			friends: [],
			isChanged: false
		}
	}

	openRBSheet = async (RBSheet) => {
		// const user = JSON.parse(AsyncStorage.getItem('user'))
		// const accountId = user.id
		
		const accessToken = await AsyncStorage.getItem('accessToken')
		const id = '5ef97cab2f5fd7de3dd6b33b'
		const accountId = id
		let friendshipId = null

		await axios({
			method: 'GET',
			url: `${baseURL}/accounts/${accountId}/friendship`,
		}).then(res => {
			friendshipId = res.data.id
		}).catch(err => {
			if (err.response.data.error.code === "MODEL_NOT_FOUND") {
				friendshipId = null
			}
		})

		if (!friendshipId) {
			await axios({
				method: 'POST',
				url: `${baseURL}/friends`,
				data: {
					accountId
				}
			}).then(res => {
				console.log('yay, init friendlist')
			}).catch(err => {
				console.log('fail to init')
			})
		} else {
			await axios({
				method: 'GET',
				url: `${baseURL}/accounts/${accountId}/friendship`,
			}).then(res => {
				let friendList = res.data.friends
				friendList = friendList.map((friend) => {
					friend.added = false
					return friend
				})
				this.setState({
					friends: res.data.friends
				})
			}).catch(err => {
				console.log(err.response.data)
			})
		}
		RBSheet.open()
	}

	checkAdded = (user) => {
		let { borrower } = this.props.item
		console.log(borrower)
		borrower.forEach((person) => {
			if (person.username === user.username)
				return true
		})
		return false
	}

	_changeBorrower = (id, user) => {
		console.log(this.checkAdded(user))
		if (this.checkAdded(user)) {
			this.props.changeBorrower(id, user, 'delete')
			this.setState({isChanged: !this.state.isChange})
		} else {
			this.props.changeBorrower(id, user, 'add')
			this.setState({isChanged: !this.state.isChange})
		}
	}

	renderFriendItem = (user, index) => {
		const { id } = this.props.item
		return (
			<TouchableOpacity onPress={() => this._changeBorrower(id, user)}>
				<View style={styles.friendItemContainer}>
					<View style={styles.friendInfoContainer}>
						<Avatar source={""} key={user.avatarUrl} size={50} style={{borderColor: 'white', borderWidth: 1, marginRight: 10}}/>
						<View style={styles.nameContainer}>
							<Text style={styles.fullName}>{user.fullname}</Text>
							<Text style={styles.userName}>{user.username}</Text>
						</View>
					</View>
					<Text style={styles.addedBorrower}>{user.added}</Text>
				</View>
			</TouchableOpacity>
		)
	}

	render() {
		const { item, index, isEditing, changeTempData, changeBorrower } = this.props
		return (
			<View style={{
				flexDirection: 'row',
				flex: 1
			}}>
				<View style={{ flex: 7, marginBottom: 15 }}>
					<View style={{
						flexDirection: 'row',
						marginBottom: 5
					}}>
						<Text style={{
							flex: 1
						}}>{item.quantity}</Text>
						<Text style={{
							flex: 4
						}}>{item.name}</Text>
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
										<Avatar source={""} key={borrower.avatarUrl} size={24} style={{borderColor: 'white', borderWidth: 1, marginRight: 5}}/>
									</View>
								)}
							</ScrollView>
						</View>
						<View style={{ flex: 1 }}>
							<TouchableOpacity onPress={() => { this.openRBSheet(this[RBSheet + index]) }}>
								<MaterialCommunityIcons name="account-plus" size={24} color={COLORS.aqua} />
							</TouchableOpacity>
							<RBSheet
								ref={ref => {
									this[RBSheet + index] = ref;
								}}
								height={100}
								customStyles={{
									container: {
										height: '45%',
										backgroundColor: COLORS.lightdark,
										paddingVertical: 15,
										borderTopRightRadius: 42,
										borderTopLeftRadius: 42
									}
								}}
							>
								<SafeAreaView>
									<FlatList
										data={this.state.friends}
										renderItem={({ index, item }) => this.renderFriendItem(item, index)}
										keyExtractor={item => item.id}
									/>
								</SafeAreaView>
							</RBSheet>
						</View>
					</View>
				</View>
				{
					isEditing ?
						<TouchableOpacity style={{
							flex: 1,
							alignItems: 'flex-end'
						}}
							onPress={() => { changeTempData(item, 'delete') }}
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

const styles = StyleSheet.create({
	friendItemContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginVertical: 5,
		paddingVertical: 5,
		paddingHorizontal: 22
	},
  friendInfoContainer: {
		flexDirection: 'row'
	},
	nameContainer: {
		flexDirection: 'column',
	},
	userName: {
		fontFamily: 'Montserrat-Regular',
		color: COLORS.white,
		fontSize: 14
	},
	fullName: {
		color: COLORS.white,
		marginBottom: 2	
	},
	addedBorrower: {
		color: COLORS.light,
	}
})

