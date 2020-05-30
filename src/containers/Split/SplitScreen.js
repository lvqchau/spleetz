import React, { Component } from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, Dimensions } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import LinearGradient from 'react-native-linear-gradient'

import styles from './Split.component.style.js'
import COLORS from '../../assets/colors'
import BillContainer from './BillContainer'
import displayPrice from '../../utils/displayPrice.js'

const { width, height } = Dimensions.get('window')
const mockData = [
	{
		name: "Bánh mì xúc xích xông khói",
		quantity: 100,
		price: 100000,
		borrower: [
			{
				name: "Thanh",
				avatar: '../../assets/images/add.svg'
			},
			{
				name: "Tran",
				avatar: '../../assets/images/add.svg'
			},
			{
				name: "Trieu",
				avatar: '../../assets/images/add.svg'
			},
			{
				name: "Thanh",
				avatar: '../../assets/images/add.svg'
			},
			{
				name: "Tran",
				avatar: '../../assets/images/add.svg'
			},
			{
				name: "Thanh",
				avatar: '../../assets/images/add.svg'
			},
			{
				name: "Tran",
				avatar: '../../assets/images/add.svg'
			},
			{
				name: "Thanh",
				avatar: '../../assets/images/add.svg'
			},
			{
				name: "Tran",
				avatar: '../../assets/images/add.svg'
			},
		]
	},
	{
		name: "Banh mi xuc xich",
		quantity: 10,
		price: 20000
	},
	{
		name: "Banh mi ga",
		quantity: 2,
		price: 15000
	},
	{
		name: "Banh mi ga",
		quantity: 2,
		price: 15000
	},
	{
		name: "Banh mi ga",
		quantity: 5,
		price: 15000
	},
	{
		name: "Banh mi ga",
		quantity: 5,
		price: 15000
	},
	{
		name: "Banh mi ga",
		quantity: 5,
		price: 15000
	},
	{
		name: "Banh mi ga",
		quantity: 5,
		price: 15000
	}
]

export default class SplitScreen extends Component {

	constructor(props) {
		super(props)
		this.state = {
			isCategory: 'food',
			isEditing: false
		}
	}

	openCamera = () => {
		this.props.navigation.navigate("Camera")
	}

	renderCategory = (category, isCategory) => {
		let colorGrad = COLORS.gradientGray
		let icon = ''
		let textColor = COLORS.light
		switch (category) {
			case 'food':
				icon = 'hamburger'
				if (isCategory === 'food') {
					textColor = 'white'
					colorGrad = COLORS.gradientPink
				}
				break
			case 'others':
				if (isCategory === 'others') {
					textColor = 'white'
					colorGrad = COLORS.gradientPink
				}
				break
			case 'shop':
				icon = 'shopping'
				if (isCategory === 'shop') {
					textColor = 'white'
					colorGrad = COLORS.gradientGreen
				}
				break
			case 'house':
				icon = 'home-variant'
				if (isCategory === 'house') {
					textColor = 'white'
					colorGrad = COLORS.gradientPurple
				}
				break
		}

		return (
			<TouchableOpacity
				activeOpacity={0.8}
				onPress={() => this.setState({ isCategory: category })}
			>
				<LinearGradient
					start={{ x: 1, y: 1 }}
					end={{ x: 1, y: 0 }}
					colors={colorGrad} style={{
						width: 68,
						height: 68,
						justifyContent: 'center',
						alignItems: 'center',
						borderRadius: 10
					}}>
					{
						category === 'others' ?
							<Text style={{
								textTransform: 'uppercase',
								color: textColor,
								fontSize: 14,
								fontWeight: '600'
							}}>Others</Text>
							:
							<MaterialCommunityIcons size={50} name={icon} color={textColor} />
					}

				</LinearGradient>
			</TouchableOpacity>
		)
	}

	renderCategories = () => {
		const { isCategory } = this.state
		return (
			<View style={{
				flexDirection: 'row',
				justifyContent: 'space-between',
				alignItem: 'center'
			}}>
				{/* Food */}
				{this.renderCategory('food', isCategory)}
				{/* Shopping/Groceries */}
				{this.renderCategory('shop', isCategory)}
				{/* Housing */}
				{this.renderCategory('house', isCategory)}
				{/* Others */}
				{this.renderCategory('others', isCategory)}
			</View>
		)
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
						{this.renderCategories()}
					</View>
					<View style={{
						marginBottom: 15,
					}}>
						<Text style={{
							color: COLORS.purple,
							fontWeight: '700',
							marginBottom: 5
						}}>Location</Text>
						<View style={{
							flexDirection: 'row'
						}}>
							<Text style={{
								fontSize: 18,
								fontWeight: '400'
							}}>23 Nguyen Trai, Q1</Text>
							<TouchableOpacity
								activeOpacity={.7}
								style={{
									flex: 1,
									alignItems: 'flex-end'
								}}
								onPress={() => this.setState({ isEditing: !isEditing })}
							>
								<Text style={{
									fontWeight: '700',
									textTransform: 'uppercase',
									color: !isEditing ? COLORS.salmon : COLORS.aqua
								}}>{!isEditing ? 'Edit' : 'Done'}</Text>
							</TouchableOpacity>
						</View>
					</View>

					{/* info container */}
					<View>
						<BillContainer data={mockData}></BillContainer>
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
						onPress={() => {this.openCamera()}}
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