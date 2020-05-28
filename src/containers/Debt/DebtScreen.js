import React, { Component } from 'react'
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'

import DebtContainer from './DebtContainer'
import BillContainer from './BillContainer'

import styles from './Debt.component.style'

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
		},
		{
			id: '6',
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
	bill: [
		{
			id: '1',
			owner: {
				avatar: '../../../assets/images/avatar_2.png',
				name: 'John Smithhhhhhhhhhhhhhhhhhhhhhhh'
			},
			createdDate: '28.08.2020000000',
			status: 0, //complete, unfinished
			category: 'Housinggggggggggggg',
			deadline: '10.09.2020',
			total: '200.000.000.000.000',
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
			status: 1, //complete, unfinished
			category: 'Housing',
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
			status: 0, //complete, unfinished
			category: 'Food',
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
			status: 1, //complete, unfinished
			category: 'Housing',
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
			status: 0, //complete, unfinished
			category: 'Food',
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
			status: 1, //complete, unfinished
			category: 'Housing',
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
			status: 0, //complete, unfinished
			category: 'Food',
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
			status: 1, //complete, unfinished
			category: 'Housing',
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
			backgroundColor: 'rgba(0,0,0,0.1)',
			isDebt: true
		}
	}

	render() {
		const { isDebt } = this.state
		const { debt, bill } = mockData
		return (
			<SafeAreaView style={{ flex: 1 }}>
				<View style={styles.topButtonContainer}>
					<TouchableOpacity
						activeOpacity={.7}
						style={[styles.topButton,
						isDebt ? [styles.debtButton, styles.choseButton] : [styles.debtButton, styles.normalButton]
						]}
						onPress={() => this.setState({ isDebt: true })}>
						<Text style={
							isDebt ? [styles.normalButtonText, styles.choseButtonText] : styles.normalButtonText
						}>Debt</Text>
					</TouchableOpacity>
					<TouchableOpacity
						activeOpacity={.7}
						style={[styles.topButton,
						isDebt ? [styles.billButton, styles.normalButton] : [styles.billButton, styles.choseButton]
						]}
						onPress={() => this.setState({ isDebt: false })}>
						<Text style={
							isDebt ? styles.normalButtonText : [styles.normalButtonText, styles.choseButtonText]
						}>Bill</Text>
					</TouchableOpacity>
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