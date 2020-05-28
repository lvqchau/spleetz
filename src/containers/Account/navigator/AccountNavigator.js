import React from 'react'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import FriendScreen from '../screens/FriendScreen/FriendScreen';
import AccountScreen from '../screens/AccountScreen/AccountScreen';
import StatScreen from '../screens/StatisticScreen/StatScreen';
import EditProfileModal from '../screens/AccountScreen/EditProfileModal';

const Stack = createStackNavigator();

export default class AccountNavigator extends React.Component {
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
        >
          {props => <AccountScreen {...props}  _authedUser={this.props._authedUser}/>}
        </Stack.Screen>
        <Stack.Screen
          name="Friendlist"
          component={FriendScreen}
        />
        <Stack.Screen
          name="Statistics"
          component={StatScreen}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfileModal}
        />
      </Stack.Navigator>
    )
  }
}