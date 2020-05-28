import React, { Component } from 'react'
import { SafeAreaView, TouchableOpacity, Text } from 'react-native'

class SignInScreen extends Component {

  navigate = (name) => {
    this.props.navigation.navigate(name)
  }

  render() {
    const { _authedUser } = this.props
    return (
      <SafeAreaView>
        {/* Sigining in */}
        <TouchableOpacity onPress={() => _authedUser('token', false)}>
          <Text>Signin</Text>
        </TouchableOpacity>
        {/* Switch to signup */}
        <TouchableOpacity onPress={()=>this.navigate('Signup')}>
          <Text>No account yet?</Text>
        </TouchableOpacity>
      </SafeAreaView>
    )
  }
}

export default SignInScreen