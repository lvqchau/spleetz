import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from '../containers/Access/screens/SignInScreen';
import SignUpScreen from '../containers/Access/screens/SignUpScreen';

const Stack = createStackNavigator();

export default class AccessStack extends React.Component {
  render() {
    const { _authedUser } = this.props
    return (
          <Stack.Navigator>
            <Stack.Screen
              name="Signin"
              options={{
                title: 'Sign in'
              }}
            >
              {props => <SignInScreen {...props} _authedUser={_authedUser} />}
            </Stack.Screen>
            <Stack.Screen
              name="Signup"
              options={{
                title: 'Sign up'
              }}
            >
              {props => <SignUpScreen {...props} _authedUser={_authedUser} />}
            </Stack.Screen>
          </Stack.Navigator>
    )
  }
}