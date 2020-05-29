import React from 'react'
import { View, StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import COLORS from '../../../assets/colors'

class HeaderNavigator extends React.Component {
  render() {
    const { navigation, name, style, color } = this.props
    return (
      <View style={styles.headerNavigator}>
        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="ios-arrow-round-back" size={32} color={color} />
        </TouchableOpacity>
        <Text style={[styles.screenName, {...style}]}>{name}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  headerNavigator: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 25,
    marginBottom: 5
  },
  screenName: {
    position: 'absolute',
    marginLeft: 'auto',
    marginRight: 'auto',
    left: 0,
    right: 0,
    textAlign: 'center',
    fontSize: 18,
    zIndex: -1,
    color: COLORS.aqua
  }
})

export default HeaderNavigator