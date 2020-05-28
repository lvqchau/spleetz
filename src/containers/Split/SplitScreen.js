import React, { Component } from 'react'
import { SafeAreaView, View, Text, Image, TouchableOpacity, Animated, ScrollView, Dimensions, TouchableHighlight } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from './Split.component.style.js'
import COLORS from '../../assets/colors'
import BillContainer from './BillContainer'

const { width, height } = Dimensions.get('window')
const mockData = [
	{
		name: "Banh mi xuc xich xong khoi",
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
			}
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
		quantity: 2,
		price: 15000
	}
]

export default class SplitScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      backgroundColor: 'rgba(0,0,0,0.1)'
    }
	}
	
  render() {
    const {backgroundColor} = this.state.backgroundColor
    return (
      <SafeAreaView style={styles.splitContainer}>
				<ScrollView>
					<View style={styles.titleContainer}>
						<View style={{flexDirection: 'row'}}>
							<Text style={styles.splitText}>Split</Text>
							<Text style={styles.orderText}>order</Text>
						</View>
						<View>
							<TouchableOpacity>
								<MaterialCommunityIcons name="pencil" size={24} color={COLORS.red}/>
							</TouchableOpacity>
							<TouchableOpacity>
								<Image source={require('../../assets/images/add.svg')}></Image>
							</TouchableOpacity>
						</View>
					</View>
					{/* info container */}
					<View>
						<View>
							<View>
								<MaterialCommunityIcons name="hamburger"/>
								<Text>Food and restaurant</Text>
							</View>
							<View>
								<MaterialCommunityIcons name="map-marker"/>
								<Text>23 Nguyen Trai, Q1</Text>
							</View>
						</View>
					</View>			
					<BillContainer data={mockData}></BillContainer>	
				</ScrollView>
			</SafeAreaView>
    )
  }
}