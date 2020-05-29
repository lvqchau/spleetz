import React, { Component } from 'react'
import { Animated, TouchableOpacity, SafeAreaView, View, Text, StyleSheet, FlatList } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import LinearGradient from 'react-native-linear-gradient'

import Avatar from '../../components/Avatar'
import COLORS from '../../assets/colors'
import displayPrice from '../../utils/displayPrice'

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList)

class BillContainer extends Component {
  renderBillItem = (item, index) => {
    const { createdDate, location, status } = item
    let colorGrad = COLORS.gradientGreen
    if (index % 3 === 0) colorGrad = COLORS.gradientPurple
    else if (index % 2 === 0) colorGrad = COLORS.gradientPink

    return (
      <>
        <View style={[styles.badge, {backgroundColor: status ? COLORS.green : 'red'}]}></View>
        <LinearGradient
          end={{ x: 1, y: 0 }}
          start={{ x: 0, y: 1 }}
          colors={colorGrad}
          style={styles.billItem}
        >
          <View style={styles.billTop}>
            <View style={{
              flex: 5
            }}>
              <Text style={{
                fontSize: 12,
                fontWeight: '700',
                color: COLORS.white
              }}>{createdDate}</Text>
              <Text style={{
                fontSize: 18,
                color: COLORS.white
              }}>{location}</Text>
            </View>
            <View style={{
              flex: 1,
              alignItems: 'flex-end'
            }}>
              <TouchableOpacity
                onPress={() => this.setState({ openModal: true })}
              >
                <Entypo name="resize-full-screen" size={24} color={COLORS.white} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.billBot}>
            <Text
              style={{
                fontFamily: 'Montserrat',
                fontWeight: '700',
                fontSize: 28,
                bottom: -5,
                color: COLORS.white
              }}>{displayPrice(1050000)}</Text>
            <Avatar
              style={{ borderColor: COLORS.white, borderWidth: 1 }}
              size={32}
              source={""} />
          </View>
        </LinearGradient>
      </>
    )
  }

  render() {
    const { data } = this.props
    return (
      <SafeAreaView style={styles.billContainer}>
        <AnimatedFlatList
          data={data}
          renderItem={({ index, item }) => this.renderBillItem(item, index)}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
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