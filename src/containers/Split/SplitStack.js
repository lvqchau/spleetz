import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import SplitScreen from './SplitScreen';
import CameraScreen from '../Camera/CameraScreen';

const Stack = createStackNavigator();

export default class SplitNavigator extends React.Component {
  render() {
    return (
      <Stack.Navigator
        initialRouteName="Split"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen
          name="Split"
          component={SplitScreen}
        />
        <Stack.Screen
          name="Camera"
          component={CameraScreen}
        />
      </Stack.Navigator>
    )
  }
}