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
        <View style={[styles.infoContainer, styles.infoTouch]}>
          {/* <TouchableOpacity style={styles.infoTouch}> */}
            <Avatar
              size={52}
							style={styles.avatar}
							source={avatarUrl}
            />
            <Text>{fullname}</Text>
          {/* </TouchableOpacity> */}
        </View>
        <View style={styles.phone}>
          <TouchableOpacity style={styles.phoneTouch} onPress={()=>{Linking.openURL(`tel:${phone}`);}}>
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
  },
  phoneTouch: {
    width: 50,
    height: 50,
    backgroundColor: 'transparent',
    paddingRight: 50 / 2 - 28 / 2,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default FriendItem;