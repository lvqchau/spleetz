import React, { Component } from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import LinearGradient from 'react-native-linear-gradient'
import { ScrollView } from 'react-native-gesture-handler'

import styles from './Split.component.style'
import COLORS from '../../assets/colors'
import BillContainer from './BillContainer'
import CategoryComponent from './components/CategoryComponent'
import { getFriend } from '../../services/accountGateway'
import { createBill } from '../../services/billGateway'
import { createDebtDetail } from '../../services/debtDetailGateway'
import Input from '../../components/FormModal/Input'

const mockData = [
	{
		id: 0,
		name: "Bánh mì xúc xích xông khói",
		quantity: 100,
		price: 100000,
		borrower: []
	},
	{
		id: 1,
		name: "Banh mi xuc xich",
		quantity: 10,
		price: 20000,
		borrower: []
	},
	{
		id: 2,
		name: "Banh mi ga",
		quantity: 2,
		price: 15000,
		borrower: []
	},
	{
		id: 3,
		name: "Banh mi ga",
		quantity: 2,
		price: 15000,
		borrower: []
	},
	{
		id: 4,
		name: "Banh mi ga",
		quantity: 5,
		price: 15000,
		borrower: []
	},
	{
		id: 5,
		name: "Banh mi ga",
		quantity: 5,
		price: 15000,
		borrower: []
	},
	{
		id: 6,
		name: "Banh mi ga",
		quantity: 5,
		price: 15000,
		borrower: []
	},
	{
		id: 7,
		name: "Banh mi ga",
		quantity: 5,
		price: 15000,
		borrower: []
	}
]

export default class SplitScreen extends Component {

	constructor(props) {
		super(props)
		this.state = {
			isCategory: 'food',
			isEditing: false,
			data: [], //from api, changable
			originalData: [], //from api
			friends: [],
			total: 0,
			itemCount: 0,
			location: '',
			originalLocation: '',
			isCheckingOut: false
		}
	}

	componentDidMount() {
		const { navigation } = this.props
		this.focusListener = navigation.addListener('focus', () => {
			this._getFriend()
		});
	}

	componentWillUnmount() {
		this.focusListener.remove();
	}

	checkOutBill = async () => {
		const { originalData, originalLocation, isCategory } = this.state
		this.setState({isCheckingOut: true})
		const items = [...originalData]
		let friendList = []
		items.forEach((item) => {
			item.borrower.forEach(person => {
				delete person.added
				let debtItem = {...item}
				debtItem.price = Math.round((item.price * item.quantity / item.borrower.length)/500)*500
				delete debtItem.borrower
				delete debtItem.quantity
				delete debtItem.id
				let index = friendList.findIndex(friend => friend.borrowerId === person.accountId)
				if (index === -1) {
					let friend = {
						borrowerId: person.accountId, 
						items: [{...debtItem}]
					}
					friendList.push(friend)
				}
				else {
					friendList[index].items.push({...debtItem})
				}
			})
		})
		console.log("Friend list: ", friendList)
		const bill = await createBill({
			location: originalLocation,
			items,
			date: new Date(),
			category: isCategory,
			debtCount: friendList.length
		})
		friendList.forEach(async (friend) => {
			let newDebt = {...friend}
			newDebt.billId = bill.id
			let debtDetail = await createDebtDetail(newDebt)
			console.log("Debt Detail: ", debtDetail)
		})
		this.setState({isCheckingOut: false})
	}

	updateItem = (item, id) => {
		let { data } = this.state
		let indexI = data.findIndex(item => item.id === id)
		data[indexI] = item
		this.setState({ data })
	}

	_getFriend = async () => {
		let friends = await getFriend()
		this.setState({ friends: [...friends] })
	}

	editBill = (type) => {
		this.setState({ isEditing: !this.state.isEditing })
		switch (type) {
			case 'edit':
				break
			case 'cancel':
				this.changeData(this.state.originalData, 'cancel')
				break
			case 'done':
				this.changeData(this.state.data, 'done')
				break
		}
	}

	getTotal = async () => {
		let originalData = this.state.originalData
		let total = originalData.reduce((money, item) => {
			money += item.price.toString()*item.quantity.toString()
			return money
		}, 0)
		await this.setState({total})
	}

	changeData = async (data, method) => {
		// let originalData = [...this.state.originalData]
		if (method === 'done') {
			await this.setState({ originalData: [...data], data: [...data], originalLocation: this.state.location})
			this.getTotal()
		} else if (method === 'delete') {
			await this.setState({ data: [...data] }, () => this.getTotal()) //delete in state
		} else if (method === 'cancel') {
			await this.setState({ data: [...data], location: this.state.originalLocation })
		}
	}

	openCamera = () => {
		this.props.navigation.navigate("Camera")
	}

	editTouchable = (type) => {
		let color = type === 'done' ? COLORS.aqua : COLORS.salmon
		return (
			<TouchableOpacity
				activeOpacity={.7}
				style={{
					alignItems: 'flex-end'
				}}
				onPress={() => this.editBill(type)}
			>
				<Text style={{
					fontWeight: '700',
					textTransform: 'uppercase',
					color,
					marginRight: type === 'cancel' ? 4 : 0
				}}>{type}</Text>
			</TouchableOpacity>
		)
	}

	setCategory = (category) => {
		this.setState({ isCategory: category })
	}

	changeBorrower = (itemId, person, method) => {
		let data = this.state.originalData
		let index = data.findIndex(item => item.id === itemId)
		if (method === 'delete') {
			data[index].borrower = data[index].borrower.filter(user => user.username !== person.username)
			this.setState({ originalData: [...data], data: [...data] })
		} else if (method === 'add') {
			data[index].borrower.push(person)
			this.setState({ originalData: [...data], data: [...data] })
		}
	}

	handleChangeLocation = (text) => {
		this.setState({
			location: text
		})
	}

	addEmptyItem = () => {
		let { originalData, data } = this.state
		let { itemCount } = this.state
		this.setState({
			itemCount: itemCount+1
		})
		let defaultItem = {
			id: itemCount,
			name: `Item ${itemCount+1}`,
			quantity: 1,
			price: 5000,
			borrower: []
		}
		console.log(defaultItem)
		originalData.push(defaultItem)
		data.push(defaultItem)

		this.setState({
			originalData,
			data
		})
		this.getTotal()
	}

	render() {
		const { isCheckingOut, isEditing, friends, location, total } = this.state
		return (
			<SafeAreaView style={[
				styles.splitContainer, {
					position: 'relative',
					flexDirection: 'column',
					flex: 1,
					marginHorizontal: 25
				}]}>
				<View style={{
					flex: 1
				}}>
					<View style={{
						marginBottom: 25,
					}}>
						<CategoryComponent setCategory={this.setCategory} isCategory={this.state.isCategory}></CategoryComponent>
					</View>
					<View style={{
						marginBottom: 15,
						flexDirection: 'row',
						justifyContent: 'space-between'
					}}>
						<View style={{
							flexDirection: 'column',
							width: '50%'
						}}>
							<Text style={{
								color: COLORS.purple,
								fontWeight: '700',
								marginBottom: 5
							}}>Location</Text>
							{
								isEditing ?
									<Input
										style={{ margin: 0, paddingVertical: 0, padding: 0 }}
										value={this.state.location}
										onChange={(text) => this.handleChangeLocation(text)}>
									</Input>
									:
									<>
										{
											location === null ?
												<Text style={{ fontFamily: 'Quicksand-Regular', color: COLORS.lightgray, fontSize: 16 }}>Edit your location</Text>
												:
												<ScrollView
													horizontal={true}
													showsHorizontalScrollIndicator={false}>
													<Text style={{
														fontSize: 18,
														fontWeight: '400'
													}}>{this.state.location}</Text>
												</ScrollView>

										}
									</>
							}
							</View>
							<View style={{
								alignSelf: 'flex-end',
								alignItems: 'flex-end',
								textAlign: 'right',
								flexDirection: 'row'
							}}>
								{
									!isEditing ?
										this.editTouchable('edit')
										:
										<>
											{this.editTouchable('cancel')}
											{this.editTouchable('done')}
										</>
								}
							</View>
						</View>

						{/* info container */}
						<View>
							<BillContainer 
								addEmptyItem={this.addEmptyItem} 
								updateItem={this.updateItem} 
								navigation={this.props.navigation} 
								friends={friends} 
								changeBorrower={this.changeBorrower} 
								changeData={this.changeData} 
								isEditing={isEditing} 
								data={[...this.state.data]} 
								originalData={this.state.originalData}
								total={total}></BillContainer>
						</View>
					</View>
					<View style={{
						position: 'absolute',
						bottom: 15,
						right: 0,
						flexDirection: 'row',
					}}>
						<TouchableOpacity
							activeOpacity={.7}
							onPress={() => { this.openCamera() }}
						>
							<LinearGradient
								start={{ x: 1, y: 1 }}
								end={{ x: 1, y: 0 }}
								colors={[COLORS.salmon, COLORS.salmon]}
								style={{
									width: 54,
									height: 54,
									marginRight: 15,
									borderRadius: 54 / 2,
									justifyContent: 'center',
									alignItems: 'center'
								}}>
								<MaterialCommunityIcons size={30} name="camera" color={COLORS.white} style={{ height: 30 }} />
							</LinearGradient>
						</TouchableOpacity>
						{
							isCheckingOut ?
							<LinearGradient
								start={{ x: 1, y: 1 }}
								end={{ x: 1, y: 0 }}
								colors={[COLORS.aqua, COLORS.aqua]}
								style={{
									height: 54,
									paddingHorizontal: 20,
									borderRadius: 54 / 2,
									justifyContent: 'center',
									alignItems: 'center',
									flexDirection: 'row'
								}}>
								<Text style={{
									color: COLORS.white,
									fontSize: 20,
									marginRight: 5,
									marginBottom: 5
								}}>Checkout</Text>
								<ActivityIndicator size={25} color={COLORS.white} />
							</LinearGradient>
							:
							<>
								<TouchableOpacity
							activeOpacity={.7}
							onPress={() => this.checkOutBill()}
						>
							<LinearGradient
								start={{ x: 1, y: 1 }}
								end={{ x: 1, y: 0 }}
								colors={[COLORS.aqua, COLORS.aqua]}
								style={{
									height: 54,
									paddingHorizontal: 20,
									borderRadius: 54 / 2,
									justifyContent: 'center',
									alignItems: 'center',
									flexDirection: 'row'
								}}>
								<Text style={{
									color: COLORS.white,
									fontSize: 20,
									marginRight: 5,
									marginBottom: 5
								}}>Checkout</Text>
								<AntDesign size={30} name="arrowright" color={COLORS.white} style={{ height: 30 }} />
							</LinearGradient>
						</TouchableOpacity>
							</>
						}
					
					</View>
			</SafeAreaView>
		)
	}
}