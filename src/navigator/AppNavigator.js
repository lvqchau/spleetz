import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AccountScreen from '../containers/Account/screens/AccountScreen/AccountScreen';
import NotificationScreen from '../containers/Notification/screens/NotificationScreen';
import { NavigationContainer } from '@react-navigation/native';
import MainAccount from '../containers/Account/screens/MainAccount';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
const Tab = createBottomTabNavigator();

const MyTheme = {
  colors: {
    background: '#fff'
	},
	borderTopWidth: 0
};

export default function MyTabs() {
	return (
		<SafeAreaProvider>
			<NavigationContainer style={{borderWidth: 0}}theme={{colors: {background: "white"}}}>
				<Tab.Navigator
					initialRouteName="Home"
					tabBarOptions={{
						activeTintColor: '#e91e63',
					}}
				>
					<Tab.Screen 
						name="Home" 
						component={MainAccount} 
						options={{
							tabBarIcon: ({ color, size }) => (
								<MaterialIcons name="home" color={color} size={size} />
							),
						}}
						/>
					<Tab.Screen 
						name="Profile" 
						component={AccountScreen} 
						options={{
							tabBarIcon: ({ color, size }) => (
								<MaterialIcons name="account-circle" color={color} size={size} />
							),
						}}
						/>
					<Tab.Screen 
						name="Notification" 
						component={NotificationScreen} 
						options={{
							tabBarIcon: ({ color, size }) => (
								<MaterialIcons name="notifications" color={color} size={size} />
							),
						}}
						/>
				</Tab.Navigator>
			</NavigationContainer>
		</SafeAreaProvider>
	);
}