import React from 'react'
import { View, Text } from 'react-native'
import Avatar from '../../../../components/Avatar'
import COLORS from '../../../../assets/colors'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default class GroupItem extends React.Component {
  goToChat = (item) => {
    this.props.navigation.navigate('Chatroom', {
      item
    });
  }

  renderAvatars = (length) => {
    switch (length) {
      case 1:
        return <Avatar source={''} size={58} style={{ marginRight: 12 }} />
      case 2:
        return (
          <View style={{ marginRight: 12, width: 58, height: 58 }}>
            <View style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}>
              <Avatar source={''} size={38} />
            </View>
            <View style={{ position: 'absolute', bottom: 0, right: 0 }}>
              <Avatar source={''} size={38} />
            </View>
          </View>
        )
      case 3:
        return (
          <View style={{ marginRight: 12, width: 58, height: 58 }}>
            <View style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}>
              <Avatar source={''} size={34} />
            </View>
            <View style={{ position: 'absolute', bottom: 0, right: 58 / 2 - 17, zIndex: 2 }}>
              <Avatar source={''} size={34} />
            </View>
            <View style={{ position: 'absolute', top: 5, right: 0, zIndex: 3 }}>
              <Avatar source={''} size={34} />
            </View>
          </View>
        )
      case 4:
        return (
          <View style={{ marginRight: 12, width: 58, height: 58 }}>
            <View style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}>
              <Avatar source={''} size={34} />
            </View>
            <View style={{ position: 'absolute', top: 0, right: 0, zIndex: 2 }}>
              <Avatar source={''} size={34} />
            </View>
            <View style={{ position: 'absolute', bottom: 5, left: 0, zIndex: 3 }}>
              <Avatar source={''} size={34} />
            </View>
            <View style={{ position: 'absolute', bottom: 5, right: 0, zIndex: 4 }}>
              <Avatar source={''} size={34} />
            </View>
          </View>
        )
      default:
        return (
          <View style={{ marginRight: 12, width: 58, height: 58 }}>
            <View style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}>
              <Avatar source={''} size={34} />
            </View>
            <View style={{ position: 'absolute', top: 0, right: 0, zIndex: 2 }}>
              <Avatar source={''} size={34} />
            </View>
            <View style={{ position: 'absolute', bottom: 5, left: 0, zIndex: 3 }}>
              <Avatar source={''} size={34} />
            </View>
            <View style={{
              position: 'absolute', bottom: 5, right: 0, zIndex: 4,
              width: 34,
              height: 34,
              backgroundColor: COLORS.light,
              borderRadius: 34 / 2,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Text style={{ color: COLORS.salmon }}>+{length - 3}</Text>
            </View>
          </View>
        )
    }
  }

  render() {
    const { item } = this.props
    const { id, type, groupName, users, date, latestMessage, isRead } = item
    const length = users.length
    return (
      <TouchableOpacity activeOpacity={.7} onPress={() => this.goToChat(item)}>
        <View style={{ marginBottom: 20, flexDirection: 'row', alignItems: 'flex-start' }}>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            flex: 10
          }}>
            {this.renderAvatars(length)}
            <View>
              <Text style={{
                fontFamily: 'Montserrat-SemiBold',
                marginBottom: 2,
              }}>{type === "group" ? groupName : users[0].username}</Text>
              <Text
                numberOfLines={1}
                style={{
                  overflow: 'hidden',
                  fontSize: 14,
                  color: isRead ? '#878787' : COLORS.gray,
                  fontFamily: isRead ? 'Quicksand-Bold' : 'Quicksand-Regular',
                }}>{latestMessage}</Text>
            </View>
          </View>
          <View style={{
            flex: 4
          }}>
            <Text style={{
              fontSize: 12,
              alignSelf: 'stretch',
              textAlign: 'right',
              fontFamily: 'Quicksand-SemiBold',
              color: COLORS.gray
            }}>{date}</Text>
          </View>

        </View>
      </TouchableOpacity>
    )

  }
}
