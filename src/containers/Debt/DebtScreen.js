import React, { Component } from 'react'
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'

import DebtContainer from './DebtContainer'
import BillContainer from './BillContainer'

import styles from './Debt.component.style'
import LinearGradient from 'react-native-linear-gradient'
import COLORS from '../../assets/colors'
import { getBillsOfSelf } from '../../services/billGateway'
import { getDebt } from '../../services/debtDetailGateway'
import AsyncStorage from '@react-native-community/async-storage'

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
			date: '22/02/2019',
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
			date: '22/02/2019',
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
			date: '21/02/2018',
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
		},
		{
			id: '6',
			type: 'split',
			address: 'Easy Life NVCU',
			date: '21/02/2018',
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
	bill: [
		{
			id: '1',
			owner: {
				avatar: '../../../assets/images/avatar_2.png',
				name: 'John Smithhhhhhhhhhhhhhhhhhhhhhhh'
			},
			createdDate: '28.08.2020',
			location: '24 Nguyen Trai, Q1',
			status: 0, //complete, unfinished
			category: 'others',
			deadline: '10.09.2020',
			total: '200.000.000',
			borrower: [
				{
					avatar: '../../../assets/images/avatar_2.png',
					name: 'Trieu Thanh'
				},
				{
					avatar: '../../../assets/images/avatar_2.png',
					name: 'Quynh Chau'
				}
			],
			items: [
				{
					item: { name: 'gummy', quantity: 5, price: '5000' },
					borrower: [
						{
							avatar: '../../../assets/images/avatar_2.png',
							name: 'Trieu Thanh'
						}
					]
				},
				{
					item: { name: 'candy', quantity: 5, price: '10000' },
					borrower: [
						{
							avatar: '../../../assets/images/avatar_2.png',
							name: 'Quynh Chau'
						}
					]
				}

			]
		},
		{
			id: '2',
			owner: {
				avatar: '../../../assets/images/avatar_2.png',
				name: 'Trieu Thanh'
			},
			createdDate: '28.07.2020',
			location: '25 Nguyen Trai, Q1',
			status: 1, //complete, unfinished
			category: 'house',
			deadline: '20.08.2020',
			total: '100.000.000',
			borrowers: [
				{
					avatar: '../../../assets/images/avatar_2.png',
					name: 'John Smith'
				},
				{
					avatar: '../../../assets/images/avatar_2.png',
					name: 'Quynh Chau'
				}
			],
			items: [
				{
					item: { name: 'gummy', quantity: 2, price: '5000' },
					borrower: [
						{
							avatar: '../../../assets/images/avatar_2.png',
							name: 'John Smith'
						},
						{
							avatar: '../../../assets/images/avatar_2.png',
							name: 'Quynh Chau'
						}
					]
				}
			]
		},
		{
			id: '3',
			owner: {
				avatar: '../../../assets/images/avatar_2.png',
				name: 'John Smith'
			},
			createdDate: '28.08.2020',
			location: '24 Nguyen Trai, Q1',
			status: 0, //complete, unfinished
			category: 'shop',
			deadline: '10.09.2020',
			total: '200.000.000',
			borrower: [
				{
					avatar: '../../../assets/images/avatar_2.png',
					name: 'Trieu Thanh'
				},
				{
					avatar: '../../../assets/images/avatar_2.png',
					name: 'Quynh Chau'
				}
			],
			items: [
				{
					item: { name: 'gummy', quantity: 5, price: '5000' },
					borrower: [
						{
							avatar: '../../../assets/images/avatar_2.png',
							name: 'Trieu Thanh'
						}
					]
				},
				{
					item: { name: 'candy', quantity: 5, price: '10000' },
					borrower: [
						{
							avatar: '../../../assets/images/avatar_2.png',
							name: 'Quynh Chau'
						}
					]
				}

			]
		},
		{
			id: '4',
			owner: {
				avatar: '../../../assets/images/avatar_2.png',
				name: 'Trieu Thanh'
			},
			createdDate: '28.07.2020',
			location: '25 Nguyễn Trãi, phường Nguyễn Cư Trinh, Quận 1, Thành phố Hồ Chí Minh',
			status: 1, //complete, unfinished
			category: 'shop',
			deadline: '20.08.2020',
			total: '100.000',
			borrowers: [
				{
					avatar: '../../../assets/images/avatar_2.png',
					name: 'John Smith'
				},
				{
					avatar: '../../../assets/images/avatar_2.png',
					name: 'Quynh Chau'
				}
			],
			items: [
				{
					item: { name: 'gummy', quantity: 2, price: '5000' },
					borrower: [
						{
							avatar: '../../../assets/images/avatar_2.png',
							name: 'John Smith'
						},
						{
							avatar: '../../../assets/images/avatar_2.png',
							name: 'Quynh Chau'
						}
					]
				}
			]
		},
		{
			id: '5',
			owner: {
				avatar: '../../../assets/images/avatar_2.png',
				name: 'John Smith'
			},
			createdDate: '28.08.2020',
			location: '24 Nguyen Trai, Q1',
			status: 0, //complete, unfinished
			category: 'food',
			deadline: '10.09.2020',
			total: '200.000.000',
			borrower: [
				{
					avatar: '../../../assets/images/avatar_2.png',
					name: 'Trieu Thanh'
				},
				{
					avatar: '../../../assets/images/avatar_2.png',
					name: 'Quynh Chau'
				}
			],
			items: [
				{
					item: { name: 'gummy', quantity: 5, price: '5000' },
					borrower: [
						{
							avatar: '../../../assets/images/avatar_2.png',
							name: 'Trieu Thanh'
						}
					]
				},
				{
					item: { name: 'candy', quantity: 5, price: '10000' },
					borrower: [
						{
							avatar: '../../../assets/images/avatar_2.png',
							name: 'Quynh Chau'
						}
					]
				}

			]
		},
		{
			id: '6',
			owner: {
				avatar: '../../../assets/images/avatar_2.png',
				name: 'Trieu Thanh'
			},
			createdDate: '28.07.2020',
			location: '25 Nguyen Trai, Q1',
			status: 1, //complete, unfinished
			category: 'shop',
			deadline: '20.08.2020',
			total: '100.000.000',
			borrowers: [
				{
					avatar: '../../../assets/images/avatar_2.png',
					name: 'John Smith'
				},
				{
					avatar: '../../../assets/images/avatar_2.png',
					name: 'Quynh Chau'
				}
			],
			items: [
				{
					item: { name: 'gummy', quantity: 2, price: '5000' },
					borrower: [
						{
							avatar: '../../../assets/images/avatar_2.png',
							name: 'John Smith'
						},
						{
							avatar: '../../../assets/images/avatar_2.png',
							name: 'Quynh Chau'
						}
					]
				}
			]
		},
		{
			id: '7',
			owner: {
				avatar: '../../../assets/images/avatar_2.png',
				name: 'John Smith'
			},
			createdDate: '28.08.2020',
			location: '24 Nguyen Trai, Q1',
			status: 0, //complete, unfinished
			category: 'food',
			deadline: '10.09.2020',
			total: '200.000.000',
			borrower: [
				{
					avatar: '../../../assets/images/avatar_2.png',
					name: 'Trieu Thanh'
				},
				{
					avatar: '../../../assets/images/avatar_2.png',
					name: 'Quynh Chau'
				}
			],
			items: [
				{
					item: { name: 'gummy', quantity: 5, price: '5000' },
					borrower: [
						{
							avatar: '../../../assets/images/avatar_2.png',
							name: 'Trieu Thanh'
						}
					]
				},
				{
					item: { name: 'candy', quantity: 5, price: '10000' },
					borrower: [
						{
							avatar: '../../../assets/images/avatar_2.png',
							name: 'Quynh Chau'
						}
					]
				}

			]
		},
		{
			id: '8',
			owner: {
				avatar: '../../../assets/images/avatar_2.png',
				name: 'Trieu Thanh'
			},
			createdDate: '28.07.2020',
			location: '25 Nguyen Trai, Q1',
			status: 1, //complete, unfinished
			category: 'house',
			deadline: '20.08.2020',
			total: '100.000.000',
			borrowers: [
				{
					avatar: '../../../assets/images/avatar_2.png',
					name: 'John Smith'
				},
				{
					avatar: '../../../assets/images/avatar_2.png',
					name: 'Quynh Chau'
				}
			],
			items: [
				{
					item: { name: 'gummy', quantity: 2, price: '5000' },
					borrower: [
						{
							avatar: '../../../assets/images/avatar_2.png',
							name: 'John Smith'
						},
						{
							avatar: '../../../assets/images/avatar_2.png',
							name: 'Quynh Chau'
						}
					]
				}
			]
		}
	]
}
export default class DebtScreen extends Component {

	constructor(props) {
		super(props)
		this.state = {
			isDebt: false
		}
	}

	
	async componentDidMount(){
		const { navigation } = this.props
		this.focusListener = navigation.addListener('focus', async () => {
			const myBills = await getBillsOfSelf()
			const myDebts = await getDebt()
			const userId = await AsyncStorage.getItem('userId')
			this.setState({
				debts: myDebts,
				userId: userId
			})
			// console.log("My debt: ", myDebts)
			// console.log("hú", myBills)
		})
	}

	componentWillUnmount() {
		if (this.focusListener != null && this.focusListener?.remove)
      this.focusListener.remove();
	}

	renderGradientButton = (type) => {
		if (type === "debt") isDebt = this.state.isDebt
		else isDebt = !this.state.isDebt
		return (
			<TouchableOpacity 
				activeOpacity={.7}
				style={{flex: 1}}
				onPress={() => this.setState({ isDebt })}>
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
		const { debt, bill } = mockData
		const { debts, userId } = this.state
		return (
			<SafeAreaView style={{ flex: 1 }}>
				<View style={styles.topButtonContainer}>
					{this.renderGradientButton('debt')}
					{this.renderGradientButton('bill')}
				</View>
				{isDebt ?
					<DebtContainer userId={userId} data={debts}></DebtContainer>
					:
					<BillContainer data={bill}></BillContainer>
				}
			</SafeAreaView>
		)
	}
}