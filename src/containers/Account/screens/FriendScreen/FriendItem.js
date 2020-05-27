import React from 'react'
import { View, Text, StyleSheet, Linking } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Ionicons from 'react-native-vector-icons/Ionicons'

import Avatar from '../../../../components/Avatar'
import COLORS from '../../../../assets/colors'

class FriendItem extends React.Component {
  render() {
    const { user, style } = this.props
    const { name, phone } = user
    return (
      <View style={[style, styles.item]}>
        <View style={styles.infoContainer}>
          <TouchableOpacity style={styles.infoTouch}>
            <Avatar
              size={52}
              style={styles.avatar}
            />
            <Text>{name}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.phone}>
          <TouchableOpacity onPress={()=>{Linking.openURL(`tel:${phone}`);}}>
            <Ionicons name="ios-call" size={28} color={COLORS.aqua} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  infoContainer: {
    flex: 8
  },
  infoTouch: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  avatar: {
    marginRight: 20
  },
  phone: {
    flex: 1
  }
})

export default FriendItem;