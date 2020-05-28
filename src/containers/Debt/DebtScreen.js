import React, { Component } from 'react'
import { SafeAreaView, View, Text, Image, TouchableOpacity, Animated, ScrollView, Dimensions, TouchableHighlight, FlatList, ListView } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons
 from 'react-native-vector-icons/MaterialCommunityIcons'

import DebtContainer from './DebtContainer'
import BillContainer from './BillContainer'

import COLORS from '../../assets/colors'
import styles from './Debt.component.style'

const { width, height } = Dimensions.get('window')

const mockData = {
	debt: [
		{
			id: '1',
			type: 'owe',
			address: '23 Nguyen Trai, Q1',
			date: '22/02/2020',
			payer: {
				name: 'Alice',
				avatar: 'https://api.adorable.io/avatars/285/thanh@adorable.io.png'
			},
			items: [
				{
					id: '1',
					name: 'Kẹo gummy',
					quantity: 3,
					price: 5000
				},
				{
					id: '2',
					name: 'Bánh oreo',
					quantity: 1,
					price: 15000
				}
			]
		},
		{
			id: '2',
			type: 'split',
			address: 'Easy Life NVCU',
			date: '21/02/2020',
			borrower: [
				{
					id: '1',
					name: 'Chau',
					avatar: 'https://api.adorable.io/avatars/285/thanh@adorable.io.png'
				},
				{
					id: '2',
					name: 'Huy', 
					avatar: 'https://api.adorable.io/avatars/285/huy@adorable.io.png'
				},
				{
					id: '3',
					name: 'Huy', 
					avatar: 'https://api.adorable.io/avatars/285/huy@adorable.io.png'
				},
				{
					id: '4',
					name: 'Huy', 
					avatar: 'https://api.adorable.io/avatars/285/huy@adorable.io.png'
				},
				{
					id: '5',
					name: 'Huy', 
					avatar: 'https://api.adorable.io/avatars/285/huy@adorable.io.png'
				},
				{
					id: '6',
					name: 'Huy', 
					avatar: 'https://api.adorable.io/avatars/285/huy@adorable.io.png'
				}
			]
		},
		{
			id: '3',
			type: 'owe',
			address: '23 Nguyen Trai, Q1',
			date: '22/02/2020',
			payer: {
				name: 'Alice', 
				avatar: 'https://api.adorable.io/avatars/285/thanh@adorable.io.png'
			},
			items: [
				{
					id: '1',
					name: 'Kẹo gummy',
					quantity: 3,
					price: 5000
				},
				{
					id: '2',
					name: 'Bánh oreo',
					quantity: 1,
					price: 15000
				}
			]
		},
		{
			id: '4',
			type: 'owe',
			address: '23 Nguyen Trai, Q1',
			date: '22/02/2020',
			payer: {
				name: 'Alice', 
				avatar: 'https://api.adorable.io/avatars/285/thanh@adorable.io.png'
			},
			items: [
				{
					id: '1',
					name: 'Kẹo gummy',
					quantity: 3,
					price: 5000
				},
				{
					id: '2',
					name: 'Bánh oreo',
					quantity: 1,
					price: 15000
				}
			]
		},
		{
			id: '5',
			type: 'split',
			address: 'Easy Life NVCU',
			date: '21/02/2020',
			borrower: [
				{
					id: '1',
					name: 'Chau',
					avatar: 'https://api.adorable.io/avatars/285/thanh@adorable.io.png'
				},
				{
					id: '2',
					name: 'Huy', 
					avatar: 'https://api.adorable.io/avatars/285/huy@adorable.io.png'
				},
				{
					id: '3',
					name: 'Huy', 
					avatar: 'https://api.adorable.io/avatars/285/huy@adorable.io.png'
				},
			]
		}
	],
	bill: 'Hello'
}
export default class DebtScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
			backgroundColor: 'rgba(0,0,0,0.1)',
			isDebt: true
    }
  }

  render() {
		const {backgroundColor, isDebt} = this.state
		const {debt, bill} = mockData
    return (
      <SafeAreaView  style={{flex: 1}}>
        <View style={styles.topButtonContainer}>
					<TouchableHighlight 
					style={
						isDebt ? {...styles.debtButton, ...styles.choseButton} : {...styles.debtButton, ...styles.normalButton}
					} 
					onPress={()=> this.setState({isDebt: true})}>
						<Text style={
							isDebt ? styles.choseButtonText : styles.normalButtonText
						}>Debt</Text>
					</TouchableHighlight>
					<TouchableHighlight 
						style={
							isDebt ? {...styles.billButton, ...styles.normalButton} : {...styles.billButton, ...styles.choseButton}
						} 
						onPress={()=> this.setState({isDebt: false})}>
						<Text style={
							isDebt ? styles.normalButtonText : styles.choseButtonText
						}>Bill</Text>
					</TouchableHighlight>
				</View>
				{isDebt ? 
					<DebtContainer data={debt}></DebtContainer>
				:
					<BillContainer data={bill}></BillContainer>
				}
      </SafeAreaView>
    )
  }
}