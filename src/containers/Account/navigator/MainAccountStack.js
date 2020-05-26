import React from 'react'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import FriendScreen from '../screens/FriendScreen/FriendScreen';
import AccountScreen from '../screens/AccountScreen/AccountScreen';
import StatScreen from '../screens/StatisticScreen/StatScreen';
import EditProfileModal from '../screens/AccountScreen/EditProfileModal';

const Stack = createStackNavigator();

export default function MainAccountStack() {
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
      />
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
  );
}