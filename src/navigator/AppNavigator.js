import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'

import NotificationScreen from '../containers/Notification/screens/NotificationScreen';
import MainAccount from '../containers/Account/screens/MainAccount';
import MessageScreen from '../containers/Message/screens/MessageScreen';
import { navigationRef } from './RootNavigation';
import COLORS from '../assets/colors';

const Tab = createBottomTabNavigator();

const MyTheme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		background: 'white',
		text: COLORS.darkblue,
		primary: COLORS.aqua
	}
};

export default class MyTabs extends React.Component {

	_reset = (e) => {
		console.log(navigationRef.current.getCurrentRoute().name)
	}

	render() {
		return (
			<SafeAreaProvider>
				<NavigationContainer 
					theme={MyTheme}  
					onStateChange={(e)=>this._reset(e)}
					ref={navigationRef}
					>
					<Tab.Navigator
						initialRouteName="Bill"
					>
						<Tab.Screen
							name="Bill"
							component={MainAccount}
							options={{
								tabBarIcon: ({ color, size }) => (
									<MaterialIcons name="account-balance-wallet" color={color} size={size} />
								),
							}}
							listeners={{
								tabPress: e => {
									navigationRef.current.navigate('Bill');
								},
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
									<MaterialIcons name="notifications" color={color} size={size}/>
								)
							}}
						/>
						<Tab.Screen
							name="Profile"
							component={MessageScreen}
							options={{
								tabBarIcon: ({ color, size }) => (
									<MaterialIcons name="account-circle" color={color} size={size} />
								),
							}}
						/>
					</Tab.Navigator>
				</NavigationContainer>
			</SafeAreaProvider>
		)
	}
}