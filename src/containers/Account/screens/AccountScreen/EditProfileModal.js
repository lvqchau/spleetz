import React from 'react'
import { TouchableOpacity, SafeAreaView, Text } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

import COLORS from '../../../../assets/colors'

class EditProfileModal extends React.Component {
  render() {
    const { navigation } = this.props
    return (
      <SafeAreaView>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="ios-arrow-round-back" size={32} color={COLORS.aqua} />
        </TouchableOpacity>
        <Text>Edit your profile here!</Text>
      </SafeAreaView>
    )
  }
}

export default EditProfileModal