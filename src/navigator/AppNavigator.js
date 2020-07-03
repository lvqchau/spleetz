import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'

import NotificationScreen from '../containers/Notification/screens/NotificationScreen'
import DebtScreen from '../containers/Debt/DebtScreen'
import { navigationRef } from './RootNavigation'
import AccountNavigator from '../containers/Account/navigator/AccountNavigator'
import SplitNavigator from '../containers/Split/SplitStack'
import MessageNavigator from '../containers/Message/MessageStack'
import { Easing } from 'react-native'
import { CardStyleInterpolators } from '@react-navigation/stack'

const Tab = createBottomTabNavigator()

export default class MyTabs extends React.Component {

	getTabBarVisibility = (route) => {
		const routeName = route.state
			? route.state.routes[route.state.index].name
			: ''
		if (routeName === 'Camera' || routeName === 'Chatroom') {
			return false
		}
		return true
	}

	render() {

		const config = {
			animation: 'spring', 
			config: {
				stiffness: 1000, 
				damping: 50, 
				mass: 3, 
				overshootClamping: true, 
				restDisplacementThreshold: 0.01, 
				restSpeedThreshold: 0.01
			}
		}

		const closeConfig = {
			animation: 'timing',
			config: {
				duration: 500,
				easing: Easing.linear
			}
		}

		return (
			<Tab.Navigator
				initialRouteName='Split'
				tabBarOptions={{
					showLabel: false,
				}}
				screenOptions={{
					gestureEnabled: true,
					gestureDirection: "horizontal",
					cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
					transitionSpec: {
						open: config,
						close: closeConfig
					}
				}}
			>
				<Tab.Screen
					name='Bill'
					listeners={{
						tabPress: e => {
							navigationRef.current.navigate('Bill')
						}
					}}
					component={DebtScreen}
					options={{
						tabBarIcon: ({ color, size }) => (
							<MaterialIcons name='account-balance-wallet' color={color} size={size} />
						)
					}}
				/>
				<Tab.Screen
					name='Messages'
					listeners={{
						tabPress: e => {
							navigationRef.current.navigate('Messages')
						}
					}}
					options={({ route }) => ({
						tabBarIcon: ({ color, size }) => (
							<Ionicons name='ios-chatbubbles' color={color} size={size} />
						),
						tabBarVisible: this.getTabBarVisibility(route)
					})}						
				>
					{props => <MessageNavigator {...props}/>}
				</Tab.Screen>
				
				<Tab.Screen
					name='Split'
					listeners={{
						tabPress: e => {
							navigationRef.current.navigate('Split')
						}
					}}
					options={({ route }) => ({
						tabBarIcon: ({ color, size }) => (
							<MaterialIcons name='receipt' color={color} size={size} />
						),
						tabBarVisible: this.getTabBarVisibility(route)
					})}						
				>
					{props => <SplitNavigator {...props}/>}
				</Tab.Screen>
				<Tab.Screen
					name='Notification'
					component={NotificationScreen}
					options={{
						tabBarIcon: ({ color, size }) => (
							<MaterialIcons name='notifications' color={color} size={size} />
						)
					}}
				/>
				<Tab.Screen
					name='Profile'
					listeners={{
						tabPress: e => {
							navigationRef.current.navigate('Profile')
						}
					}}
					options={{
						tabBarIcon: ({ color, size }) => (
							<MaterialIcons name='account-circle' color={color} size={size} />
						)
					}}
				>
					{props => <AccountNavigator {...props} _authedUser={this.props._authedUser}/>}
				</Tab.Screen>
			</Tab.Navigator>
		)
	}
}