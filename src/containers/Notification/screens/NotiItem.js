import React from 'react'
import { View, StyleSheet, Text, Dimensions } from 'react-native'
import Avatar from '../../../components/Avatar'
import COLORS from '../../../assets/colors'

class NotiItem extends React.Component {
  render() {
    const { noti } = this.props
    return (
      <View style={styles.itemContainer}>
        <View style={styles.userInfo}>
          <Avatar style={{ marginRight: 15 }} size={42} source={""} />
          <View>
            <Text style={styles.username}>{noti.user.name}
              <Text> {noti.role === "payer" ? "repaid" : "requested"}</Text>
            </Text>
            <Text style={styles.timestamp}>12m ago</Text>
          </View>
        </View>
        <View style={styles.debtContainer}>
          <Text style={styles.debtText}>10000</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  itemContainer: {
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
    fontWeight: '600'
  },
  userInfo: {
    flexDirection: 'row',
    flex: 2
  },
  timestamp: {
    color: COLORS.gray,
    fontSize: 14
  },
  debtContainer: {
    flex: 1, 
    alignItems: 'flex-end'
  },
  debtText: {
    color: COLORS.aqua
  }
})



export default NotiItem