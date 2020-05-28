import React, { Component } from 'react'
import { TouchableOpacity, SafeAreaView, View, Text, StyleSheet, FlatList } from 'react-native'
import Avatar from '../../components/Avatar'
import COLORS from '../../assets/colors'

class BillContainer extends Component {

  renderBillItem = (item, index) => {
    const { id, owner, createdDate, status, category,
      deadline, total, borrowers, items } = item
    const { avatar, name } = owner
    return (
      <TouchableOpacity>
        <View style={styles.billItem}>
          <View style={styles.billTop}>
            <View style={styles.userContainer}>
              <Avatar
                style={{ marginRight: 15 }}
                size={42}
                source={""} />
              <Text style={{flex: 2}}>{name}</Text>
            </View>
            <View style={styles.categoryContainer}>
              <Text>{category}</Text>
            </View>
          </View>
          <View style={styles.billBot}>
            <View style={styles.totalView}>
              <Text style={styles.normalTitle}>Total</Text>
              <Text style={styles.amountText}>{total} VND</Text>
            </View>
            <View style={styles.statusView}>
              <Text style={[styles.normalTitle, styles.smallTitle]}>Created Date</Text>
              <Text style={styles.statusText}>{createdDate}</Text>
            </View>
            <View style={styles.statusView}>
              <Text style={[styles.normalTitle, styles.smallTitle]}>Status</Text>
              {
                status ?
                  <Text style={[styles.statusText, styles.successText]}>Resolved</Text>
                  :
                  <Text style={[styles.statusText, styles.unsuccessText]}>Unresolved</Text>
              }
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    const { data } = this.props
    return (
      <SafeAreaView style={styles.billContainer}>
        <FlatList
          data={data}
          renderItem={({ index, item }) => this.renderBillItem(item, index)}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  billContainer: {
    flex: 1,
  },
  billItem: {
    marginHorizontal: 25,
    borderRadius: 12,
    padding: 10,
    minHeight: 70,
    flexDirection: 'column',
    backgroundColor: 'white',
    shadowColor: "#000",
    marginVertical: 10,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2
  },
  billTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    flex: 1
  },
  billBot: {
    flexDirection: 'row',
    flex: 1
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 5,
    flex: 2
  },
  categoryContainer: {
    flex: 1,
    alignItems: 'flex-end'
  },
  totalView: {
    flex: 4,
    marginRight: 10
  },
  statusView: {
    flex: 3,
    marginHorizontal: 2
  },
  normalTitle: {
    color: COLORS.gray,
    fontSize: 12,
    paddingBottom: 5
  },
  amountText: {
    fontSize: 16,
    fontWeight: '600'
  },
  smallTitle: {
    paddingBottom: 7
  },
  statusText: {
    fontSize: 14
  },
  successText: {
    color: COLORS.green
  },
  unsuccessText: {
    color: COLORS.salmon
  }
})

export default BillContainer