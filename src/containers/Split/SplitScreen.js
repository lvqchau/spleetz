import React, { Component } from 'react'
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import LinearGradient from 'react-native-linear-gradient'
import { ScrollView } from 'react-native-gesture-handler'

import styles from './Split.component.style'
import COLORS from '../../assets/colors'
import BillContainer from './BillContainer'
import displayPrice from '../../utils/displayPrice'
import CategoryComponent from './components/CategoryComponent'
import { baseURL } from '../../assets/constant/constant'
import AsyncStorage from '@react-native-community/async-storage'

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
			data: mockData, //from api, changable
			originalData: mockData, //from api
			friends: []
		}
	}

	componentDidMount() {
		const { navigation } = this.props
		this.focusListener = navigation.addListener('focus', () => {
			this.getFriend()
		});
	}

	componentWillUnmount() {
    // Remove the event listener before removing the screen from the stack
    this.focusListener.remove();
}

	editBill = (type) => {
		this.setState({ isEditing: !this.state.isEditing })
		switch (type) {
			case 'edit':
				console.log(this.state.originalData)
				break
			case 'cancel':
				console.log(this.state.originalData)
				this.changeData(this.state.originalData, 'cancel')
				break
			case 'done':
				console.log(this.state.originalData)
				this.changeData(this.state.data, 'done')
				break
		}
	}

	changeData = (data, method) => {
		// let originalData = this.state.originalData
		if (method === 'done') {
			console.log('done')
			this.setState({ originalData: data, data })
			// console.log('api called') //saving... 
		} else if (method === 'delete') {
			this.setState({ data }) //delete in state
		} else if (method === 'cancel') {
			this.setState({ data: this.state.originalData, originalData: data })
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
		this.setState({isCategory: category})
	}

	changeBorrower = (itemId, person, method) => {
		let data = this.state.originalData
		let friends = this.state.friends
		let index = data.findIndex(item => item.id === itemId)
		let indexF = friends.findIndex(item => item.username === person.username)
		if (method === 'delete') {
			console.log(friends[indexF])
			friends[indexF].added = false
			data[index].borrower.splice(index, 1)
			this.setState({originalData: data, data, friends})
		} else if (method === 'add') {
			console.log("indexF:", friends[indexF])
			friends[indexF].added = true
			data[index].borrower.push(person)
			this.setState({originalData: data, data, friends})
		}
	}

	getFriend = async () => {
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
			}).then(async res => {
				let friendList = res.data.friends
				friendList = friendList.map((friend) => {
					friend.added = false
					return friend
				})
				await this.setState({
					friends: friendList
				})
			}).catch(err => {
				console.log(err.response.data)
			})
		}
	}

	render() {
		const { isEditing } = this.state
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
							<ScrollView
								style={{
									// width: '30%'
								}}
								horizontal={true}
								showsHorizontalScrollIndicator={false}>
								<Text style={{
									fontSize: 18,
									fontWeight: '400'
								}}>23 Nguyen Trai, Q1111111 Q1111111 Q1111111 Q1111111</Text>
							</ScrollView>
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
						<BillContainer friends={this.state.friends} changeBorrower={this.changeBorrower} changeData={this.changeData} isEditing={isEditing} data={this.state.data}></BillContainer>
					</View>
				</View>
				<View style={{
					position: 'absolute',
					bottom: 10,
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
					<TouchableOpacity
						activeOpacity={.7}
						onPress={() => { }}
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
				</View>
			</SafeAreaView>
		)
	}
}