import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

class FriendScreen extends React.Component {
  render() {
    const { navigation } = this.props
    return (
      <View>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
        >
          <Text>Friend</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default FriendScreen