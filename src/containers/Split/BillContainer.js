import React, { Component } from 'react'
import { View } from 'react-native'
import BillItem from './BillItem'

export default class BillContainer extends Component {
	state = {}
  render() {
		const { data } = this.props
    return (
			<View>
				{data && data.map((billItem, index) => 
					<BillItem key={index} data={billItem}></BillItem>
				)}
			</View>
    )
  }
}
