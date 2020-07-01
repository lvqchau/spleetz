import React, { Component } from 'react'
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import RBSheet from "react-native-raw-bottom-sheet"
import { Formik } from 'formik'

import displayPrice from '../../utils/displayPrice'
import COLORS from '../../assets/colors'
import { FlatList } from 'react-native-gesture-handler'
import Avatar from '../../components/Avatar'
import { getFriendId } from '../../services/accountGateway'
import Input from '../../components/FormModal/Input'

export default class BillItem extends Component {

	constructor(props) {
		super(props)
		this.state = {
			friends: [],
			isInputting: false,
			item: this.props.item ? this.props.item : {}
		}
	}

	openRBSheet = async (RBSheet) => {
		let friendshipId = await getFriendId()
		let { borrower } = this.props.item
		let friendList = this.props.friends
		friendList = friendList.map((friend) => {
			friend.added = false
			borrower.forEach(person => {
				if (person.username === friend.username) {
					friend.added = true
				}
			})
			return friend
		})

		if (friendshipId) {
			while (this.state.friends.length === 0) {
				this.setState({
					friends: friendList
				})
			}
			RBSheet.open()
		}
	}

	checkAdded = (user) => {
		let { friends } = this.state
		//check if a user is in friend
		let indexF = friends.findIndex(friend => friend.username === user.username)
		return friends[indexF].added
	}

	_changeBorrower = async (id, user) => {
		let friends = this.state.friends
		let indexF = friends.findIndex(friend => user.username === friend.username)
		if (user.added) {
			user.added = false
			friends[indexF].added = false
			this.props.changeBorrower(id, user, 'delete')
			this.setState({ friends })
		} else {
			user.added = true
			friends[indexF].added = true
			this.props.changeBorrower(id, user, 'add')
			this.setState({ friends })
		}
	}

	renderFriendItem = (index, user) => {
		return (
			<TouchableOpacity key={index} onPress={() => this._changeBorrower(this.props.item.id, user)}>
				<View style={styles.friendItemContainer}>
					<View style={styles.friendInfoContainer}>
						<Avatar source={user.avatarUrl} key={user.avatarUrl} size={50} style={{ borderColor: 'white', borderWidth: 1, marginRight: 10 }} />
						<View style={styles.nameContainer}>
							<Text style={styles.fullName}>{user.fullname}</Text>
							<Text style={styles.userName}>{user.username}</Text>
						</View>
					</View>
					<Text style={styles.addedBorrower}>{user.added ? "Added" : ""}</Text>
				</View>
			</TouchableOpacity>
		)
	}

	renderInputItem = (item, isInputting, handleChange, handleBlur, values) => {
		console.log("Render input item value: ", values)
		if (isInputting && this.props.isEditing) {
			return (
				<>
					<Input
						customStyleInput={{
							fontSize: 14
						}}
						keyboardType={"numeric"}
						value={values.quantity}
						onChange={handleChange('quantity')}
						// onBlur={handleBlur('quantity')}
					/>
					<Input
						customStyleInput={{
							fontSize: 14,
						}}
						value={values.name}
						onChange={handleChange('name')}
						// onBlur={handleBlur('name')}
					/>
					<Input
						customStyleInput={{
							fontSize: 14,
						}}
						value={values.price}
						onChange={handleChange('price')}
						// onBlur={handleBlur('price')}
					/>
				</>
			)
		} else {
			return (
				<>
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
				</>
			)
		}
	}

	render() {
		console.log("this.props.item", this.props.item)
		const { item, index, isEditing, updateItem, changeTempData  } = this.props
		const { isInputting } = this.state
		// console.log(this.props.item, thais.state.item)
		return (
			<Formik
				initialValues={{
					id: item.id,
					quantity: item.quantity.toString(),
					name: item.name,
					price: item.price.toString(),
					borrower: item.borrower
				}}
				onSubmit={async (values, { setSubmitting, setErrors }) => {
					setSubmitting(true)
					this.setState({ 
						isInputting: false
					})
					updateItem(values, this.props.item.id)
					setSubmitting(false)
				}}
			>
				{({ handleChange, handleBlur, handleSubmit, values }) => (
					<View style={{
						flexDirection: 'row',
						flex: 1
					}}>
						<View style={{ flex: 7, marginBottom: 15, marginRight: isEditing ? 62 : 0 }}>
							<View style={{
								flexDirection: 'row',
								marginBottom: 5
							}}>
								{this.renderInputItem(item, isInputting, handleChange, handleBlur, values)}
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
												<Avatar source={borrower.avatarUrl} key={borrower.avatarUrl} size={24} style={{ borderColor: 'white', borderWidth: 1, marginRight: 5 }} />
											</View>
										)}
									</ScrollView>
								</View>
								<View style={{ flex: 1 }}>
									{
										isEditing ?
											<></>
											:
											<>
												<TouchableOpacity onPress={() => { this.openRBSheet(this[RBSheet + index]) }}>
													<MaterialCommunityIcons name="account-plus" size={24} color={COLORS.aqua} />
												</TouchableOpacity>
												<RBSheet
													animationType={"slide"}
													closeOnPressMask={true}
													closeOnPressBack={true}
													keyboardAvoidingViewEnabled={true}
													ref={ref => {
														this[RBSheet + index] = ref;
													}}
													height={100}
													customStyles={{
														wrapper: {
															backgroundColor: "transparent"
														},
														container: {
															height: '45%',
															backgroundColor: COLORS.lightdark,
															paddingVertical: 15,
															borderTopRightRadius: 42,
															borderTopLeftRadius: 42
														}
													}}
												>
													<SafeAreaView style={{ height: '100%' }}>
														<View style={styles.friendTextContainer}>
															<Text style={styles.friendListText}>Friendlist</Text>
															<TouchableOpacity onPress={async () => {
																await this[RBSheet + index].close()
																this.props.navigation.navigate("Profile")
															}}>
																<AntDesign name="arrowright" size={26} color={COLORS.aqua} />
															</TouchableOpacity>
														</View>
														<FlatList
															data={this.state.friends}
															renderItem={({ index, item }) => this.renderFriendItem(index, item)}
															keyExtractor={item => item.id}
														/>
													</SafeAreaView>
												</RBSheet>
											</>
									}
								</View>
							</View>
						</View>
						{
							isEditing ?
								<>
									{
										!isInputting ?
											<TouchableOpacity style={{
												position: 'absolute',
												right: 26,
												top: -5,
												flex: 1,
												alignItems: 'flex-end',
												padding: 5
											}}
												onPress={() => this.setState({ isInputting: true })}
											>
												<AntDesign name="form" size={18} color={COLORS.aqua} />
											</TouchableOpacity>
											:
											<TouchableOpacity style={{
												position: 'absolute',
												right: 26,
												top: -5,
												flex: 1,
												alignItems: 'flex-end',
												padding: 5
											}}
												onPress={handleSubmit}
											>
												<AntDesign name="check" size={18} color={COLORS.green} />
											</TouchableOpacity>
									}
									<TouchableOpacity style={{
										position: 'absolute',
										right: 0,
										top: -5,
										flex: 1,
										alignItems: 'flex-end',
										padding: 5
									}}
										onPress={() => { changeTempData(item, 'delete') }}
									>
										<AntDesign name="delete" size={18} color={COLORS.red} />
									</TouchableOpacity>
								</>
								:
								<></>
						}
					</View>

				)}
			</Formik>
		)
	}
}

const styles = StyleSheet.create({
	friendItemContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 10,
		paddingVertical: 5,
		marginHorizontal: 22
	},
	friendInfoContainer: {
		flexDirection: 'row'
	},
	nameContainer: {
		flexDirection: 'column'
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
		color: COLORS.light
	},
	friendTextContainer: {
		marginTop: 10,
		marginBottom: 5,
		marginHorizontal: 22,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	friendListText: {
		fontSize: 16,
		textTransform: 'uppercase',
		fontFamily: 'Montserrat-SemiBold',
		color: COLORS.white
	}
})