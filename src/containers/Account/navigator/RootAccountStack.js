import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import EditProfileModal from '../screens/AccountScreen/EditProfileModal';
import MainAccountStack from './MainAccountStack';

const Stack = createStackNavigator();

export default function RootAccountStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        cardOverlayEnabled: true,
        ...TransitionPresets.ModalPresentationIOS,
      }}
      mode="modal"
      headerMode="none"
    >
      <Stack.Screen
        name="Main"
        component={MainAccountStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="EditProfile" component={EditProfileModal} />
    </Stack.Navigator>
  );
}