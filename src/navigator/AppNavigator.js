import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'

import NotificationScreen from '../containers/Notification/screens/NotificationScreen';
import MessageScreen from '../containers/Message/screens/MessageScreen';
import DebtScreen from '../containers/Debt/DebtScreen';
import { navigationRef } from './RootNavigation';
import AccountNavigator from '../containers/Account/navigator/AccountNavigator';

const Tab = createBottomTabNavigator();

export default class MyTabs extends React.Component {
	render() {
		return (
			<Tab.Navigator
				initialRouteName="Bill"
			>
				<Tab.Screen
					name="Bill"
					component={DebtScreen}
					options={{
						tabBarIcon: ({ color, size }) => (
							<MaterialIcons name="account-balance-wallet" color={color} size={size} />
						),
					}}
				/>
				<Tab.Screen
					name="Chat"
					component={MessageScreen}
					options={{
						tabBarIcon: ({ color, size }) => (
							<Ionicons name="ios-chatbubbles" color={color} size={size} />
						),
					}}
				/>
				<Tab.Screen
					name="Camera"
					component={MessageScreen}
					options={{
						tabBarIcon: ({ color, size }) => (
							<MaterialIcons name="crop-free" color={color} size={size} />
						),
					}}
				/>
				<Tab.Screen
					name="Notification"
					component={NotificationScreen}
					options={{
						tabBarIcon: ({ color, size }) => (
							<MaterialIcons name="notifications" color={color} size={size} />
						)
					}}
				/>
				<Tab.Screen
					name="Profile"
					listeners={{
						tabPress: e => {
							navigationRef.current.navigate('Profile');
						},
					}}
					options={{
						tabBarIcon: ({ color, size }) => (
							<MaterialIcons name="account-circle" color={color} size={size} />
						),
					}}
				>
					{props => <AccountNavigator {...props} _authedUser={this.props._authedUser}/>}
				</Tab.Screen>
			</Tab.Navigator>
		)
	}
}