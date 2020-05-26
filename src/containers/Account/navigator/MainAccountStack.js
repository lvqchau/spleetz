import { createStackNavigator } from '@react-navigation/stack';
import FriendScreen from '../screens/FriendScreen';
import AccountScreen from '../screens/AccountScreen';
import StatScreen from '../screens/StatScreen';

const Stack = createStackNavigator();

export default function MainAccountStack() {
  return (
    <Stack.Navigator
      initialRouteName="Account"
      headerMode="screen"
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'tomato' },
      }}
    >
      <Stack.Screen
        name="Account"
        component={AccountScreen}
        options={{
          title: 'Account',
        }}
      />
      <Stack.Screen
        name="Friendlist"
        component={FriendScreen}
        options={{
          title: 'Friendlist',
        }}
      />
      <Stack.Screen
        name="Statistics"
        component={StatScreen}
        options={{
          title: 'Statistics',
        }}
      />
      {/* <Stack.Screen
        name="Settings"
        component={Settings}
        options={{
          gestureEnabled: false,
        }}
      /> */}
    </Stack.Navigator>
  );
}