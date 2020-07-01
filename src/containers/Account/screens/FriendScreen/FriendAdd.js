import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet, Linking, ActivityIndicator } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

import Avatar from '../../../../components/Avatar'
import COLORS from '../../../../assets/colors'

class FriendAdd extends React.Component {
  render() {
    const { user, style, addFriend, isAdding } = this.props
    const { id, avatarUrl, fullname } = user
    return (
      <View style={[style, styles.item]}>
        <View style={[styles.infoContainer, styles.infoTouch]}>
          <Avatar
            size={52}
            style={styles.avatar}
            source={avatarUrl}
          />
          <Text>{fullname}</Text>
          {/* </TouchableOpacity> */}
        </View>
        {
          isAdding ?
            <ActivityIndicator size={25} color="#0000ff" />
            :
            <View style={styles.add}>
              <TouchableOpacity style={styles.addContainer} onPress={() => addFriend(id)}>
                <Ionicons name="ios-add" size={30} color={COLORS.aqua} />
              </TouchableOpacity>
            </View>
        }

      </View>
    )
  }
}

const styles = StyleSheet.create({
  addContainer: {
    width: 50,
    height: 50,
    backgroundColor: 'transparent',
    paddingRight: 50 / 2 - 30 / 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
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
  add: {
    flex: 1
  }
})

export default FriendAdd;