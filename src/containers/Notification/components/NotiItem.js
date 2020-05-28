import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Ionicons from 'react-native-vector-icons/Ionicons'

import Avatar from '../../../components/Avatar'
import COLORS from '../../../assets/colors'
import displayPrice from '../../../utils/displayPrice'

class NotiItem extends React.Component {
  
  
  render() {
    const { noti } = this.props
    return (
      <View style={styles.itemContainer}>
        <View style={styles.userContainer}>
          <Avatar style={{ marginRight: 15 }} size={42} source={""} />
          <View style={styles.userDetail}>
            <Text style={styles.username}>{noti.user.name}
              <Text> {noti.role === "payer" ? "repaid" : "requested"}</Text>
            </Text>
            <Text style={styles.timestamp}>12m ago</Text>
          </View>
        </View>
        <View style={styles.debtContainer}>
          <Text style={styles.debtText}>{displayPrice(100000)}</Text>
          <View style={styles.choices}>
            <TouchableOpacity style={styles.choiceCircle}>
              <Ionicons name="ios-checkmark-circle" size={28} color={COLORS.green}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.choiceCircle}>
              <Ionicons name="ios-close-circle" size={28} color={COLORS.salmon}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    borderRadius: 12,
    padding: 15,
    minHeight: 70,
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: 'white',
    shadowColor: "#000",
    marginVertical: 10,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2
  },
  username: {
    fontWeight: '600',
    marginBottom: 5
  },
  userDetail: {
    flex: 1
  },
  userContainer: {
    flexDirection: 'row',
    flex: 3
  },
  timestamp: {
    color: COLORS.gray,
    fontSize: 14
  },
  debtContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'space-between'
  },
  debtText: {
    color: COLORS.aqua
  },
  choices: {
    flexDirection: 'row'
  },
  choiceCircle: {
    marginLeft: 5
  }
})



export default NotiItem