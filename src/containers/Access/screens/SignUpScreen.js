import React, { Component } from 'react'
import { SafeAreaView, TouchableOpacity, Text } from 'react-native'

class SignUpScreen extends Component {

  navigate = (name) => {
    this.props.navigation.navigate(name)
  }

  render() {
    const { _authedUser } = this.props
    return (
      <SafeAreaView>
        {/* Sign up */}
        <TouchableOpacity onPress={() => _authedUser('token', false)}>
          <Text>Signup</Text>
        </TouchableOpacity>
        {/* Switch to signin */}
        <TouchableOpacity onPress={()=>this.navigate('Signin')}>
          <Text>already have one?</Text>
        </TouchableOpacity>
      </SafeAreaView>
    )
  }
}

export default SignUpScreen