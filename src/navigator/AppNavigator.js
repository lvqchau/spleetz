import React from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AccountScreen from "../containers/Account/screens/AccountScreen/AccountScreen";

const TabNavigator = createBottomTabNavigator(
	{
		DebtDetail: {
			screen: AccountScreen,
			navigationOptions: {
				tabBarIcon: () => <MaterialCommunityIcons name="receipt" size={24} color="#00D0CB" />
			}
		},
		Chat: {
			screen: AccountScreen,
			navigationOptions: {
				tabBarIcon: () => <Ionicons name="chat" size={24} color="#FF6B6A" />
			}
		},
		Bill: {
			screen: AccountScreen,
			navigationOptions: {
				tabBarIcon: () => <Ionicons name="md-qr-scanner" size={24} color="#00D0CB" />
			}
		},
		Notification: {
			screen: AccountScreen,
			navigationOptions: {
				tabBarIcon: () => <Ionicons name="ios-chatbubbles" size={24} color="#FF6B6A" />
			}
		},
		Account: {
			screen: AccountScreen,
			navigationOptions: {
				tabBarIcon: () => <MaterialCommunityIcons name="account-circle" size={24} color="#00D0CB" />
			}
		}
	},
	{
		tabBarOptions: {
			showLabel: false
		}
	}
);

export default createAppContainer(TabNavigator);


// import React, { Component } from 'react';
// import { View } from 'react-native';

// class AppNavigator extends Component {
// 	render() {
// 		return (
// 			<View>
				
// 			</View>
// 		);
// 	}
// }

// export default AppNavigator;