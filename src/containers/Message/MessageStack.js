import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import MessageListScreen from './screens/MessageListScreen';
import MessageRoomScreen from './screens/MessageRoomScreen';

const Stack = createStackNavigator();

export default class MessageNavigator extends React.Component {
  render() {
    return (
      <Stack.Navigator
        initialRouteName="Messages"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen
          name="Messages"
          component={MessageListScreen}
        />
        <Stack.Screen
          name="Chatroom"
          component={MessageRoomScreen}
        />
      </Stack.Navigator>
    )
  }
}