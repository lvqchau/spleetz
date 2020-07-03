import React, { Component, PureComponent } from 'react'
import { SafeAreaView, StyleSheet, FlatList, View, ActivityIndicator } from 'react-native'

import COLORS from '../../assets/colors'
import BillItem from './BillItem'

class BillContainer extends PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      bills: this.props.bills ? this.props.bills : []
    }
  }

  renderBillItem = (item, index) => {
    return <BillItem key={index.toString()} bill={item} index={index}></BillItem>
  }

  render() {
    const { bills, isLoading } = this.props
    return (
      <>
        {
          isLoading ?
            <ActivityIndicator size={25} color="#0000ff" />
            :
            <>
              {
                bills == null
                  ?
                  <ActivityIndicator size={25} color="#0000ff" />
                  :
                  <SafeAreaView style={styles.billContainer}>
                    <FlatList
                      data={bills}
                      renderItem={({ index, item }) => <View key={index.toString()}>{this.renderBillItem(item, index)}</View>}
                      keyExtractor={(item, index) => index.toString()}
                    />
                  </SafeAreaView>

              }
            </>

        }
      </>
    )
  }
}

const styles = StyleSheet.create({
  badge: {
    position: 'absolute',
    width: 14,
    height: 14,
    top: 0,
    left: 20,
    zIndex: 10,
    borderRadius: 14 / 2,
    borderWidth: 2,
    borderColor: COLORS.white
  },
  billContainer: {
    flex: 1,
  },
  billItem: {
    marginHorizontal: 25,
    borderRadius: 12,
    padding: 10,
    minHeight: 130,
    flexDirection: 'column',
    marginTop: 5,
    marginBottom: 15
  },
  billTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    flex: 1
  },
  billBot: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flex: 1,
    zIndex: 2
  },
  categoryText: {
    position: 'absolute',
    bottom: -12,
    right: -5,
    fontSize: 40,
    fontFamily: 'Montserrat-Bold',
    textTransform: 'uppercase',
    color: COLORS.white,
    opacity: .5,
    zIndex: 1
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