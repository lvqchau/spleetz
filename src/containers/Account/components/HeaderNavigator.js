import React from 'react'
import { View, StyleSheet, Text, Dimensions } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import COLORS from '../../../assets/colors'

class HeaderNavigator extends React.Component {
  render() {
    const { navigation, name } = this.props
    return (
      <View style={styles.headerNavigator}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="ios-arrow-round-back" size={32} color={COLORS.aqua} />
        </TouchableOpacity>
        <Text style={styles.screenName}>{name}</Text>
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