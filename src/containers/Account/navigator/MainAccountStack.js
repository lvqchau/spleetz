import React from 'react'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import FriendScreen from '../screens/FriendScreen/FriendScreen';
import AccountScreen from '../screens/AccountScreen/AccountScreen';
import StatScreen from '../screens/StatisticScreen/StatScreen';
import EditProfileModal from '../screens/AccountScreen/EditProfileModal';

const Stack = createStackNavigator();

export default class MainAccountStack extends React.Component {
  render() {
    return (
      <Stack.Navigator
        initialRouteName="Account"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen
          name="Account"
          component={AccountScreen}
          resetStack={this.resetStack}
        />
        <Stack.Screen
          name="Friendlist"
          component={FriendScreen}
          resetStack={this.resetStack}
        />
        <Stack.Screen
          name="Statistics"
          component={StatScreen}
          resetStack={this.resetStack}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfileModal}
          resetStack={this.resetStack}
        />
      </Stack.Navigator>
    )
  }
}