import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet, Linking } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

import Avatar from '../../../../components/Avatar'
import COLORS from '../../../../assets/colors'

class FriendItem extends React.Component {
  render() {
    const { user, style } = this.props
    const { fullname, phone, avatarUrl } = user
    return (
      <View style={[style, styles.item]}>
        <View style={styles.infoContainer}>
          <TouchableOpacity style={styles.infoTouch}>
            <Avatar
              size={52}
							style={styles.avatar}
							source={avatarUrl}
            />
            <Text>{fullname}</Text>
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