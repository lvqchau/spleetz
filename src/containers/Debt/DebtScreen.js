import React, { Component } from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'

import DebtContainer from './DebtContainer'
import BillContainer from './BillContainer'

import styles from './Debt.component.style'
import LinearGradient from 'react-native-linear-gradient'
import COLORS from '../../assets/colors'
import { getBillsOfSelf } from '../../services/billGateway'
import { getDebt, getAll } from '../../services/debtDetailGateway'
import { getFriend } from '../../services/accountGateway'
import AsyncStorage from '@react-native-community/async-storage'

export default class DebtScreen extends Component {

	constructor(props) {
		super(props)
		this.state = {
			isLoading: false,
			isDebt: false,
			bills: null
		}
	}
	
	getAllItems = async () => {
		await this.setState({ isDebt: false })
		let myAll = await getAll()
		const myBills = await getBillsOfSelf()
		this.setState({ bills: myBills, ...myAll, isLoading: false })
	}

	async componentDidMount() {
		await this.setState({ isLoading: true })
		const { navigation } = this.props
		await this.getAllItems()
		this.focusListener = navigation.addListener('focus', async () => {
			await this.getAllItems()
		})
	}

	componentWillUnmount() {
		this.focusListener()
	}

	renderGradientButton = (type) => {
		if (type === "debt") isDebt = this.state.isDebt
		else isDebt = !this.state.isDebt
		return (
			<TouchableOpacity
				activeOpacity={.7}
				style={{ flex: 1 }}
				onPress={() => this.setState({ isDebt })}
			>
				<LinearGradient
					start={{ x: 1, y: 1 }}
					end={{ x: 0, y: 1 }}
					colors={!isDebt ? COLORS.gradientGreen : COLORS.gradientLight}
					style={[styles.topButton, type === "debt" ? [styles.debtButton] : [styles.billButton]]}
				>
					<Text style={!isDebt ? [styles.normalButtonText, styles.choseButtonText] : [styles.normalButtonText]}>{type}</Text>
				</LinearGradient>
			</TouchableOpacity>
		)
	}

	render() {
		const { debt, friend, userId, isLoading, bills } = this.state
		return (
			<SafeAreaView style={{ flex: 1 }}>
				<View style={styles.topButtonContainer}>
					{this.renderGradientButton('debt')}
					{this.renderGradientButton('bill')}
				</View>
				{
					isDebt ?
					    <DebtContainer getAllItems={this.getAllItems} isLoading={isLoading} userId={userId} friend={friend} data={debt}></DebtContainer>
						:
						<BillContainer bills={bills} isLoading={isLoading}></BillContainer>
				}
			</SafeAreaView>
		)
	}
}