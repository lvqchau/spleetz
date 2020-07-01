import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import LinearGradient from 'react-native-linear-gradient'
import COLORS from '../../../assets/colors'

class CategoryComponent extends Component {

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
				onPress={() => this.props.setCategory(category)}
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
		const { isCategory } = this.props
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
    return (
      <>
        {this.renderCategories()}
      </>
    );
  }
}

export default CategoryComponent;