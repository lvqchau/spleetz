import React, { Component } from 'react'
import { FlatList, TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import LinearGradient from 'react-native-linear-gradient'

import Avatar from '../../components/Avatar'
import COLORS from '../../assets/colors'
import displayPrice from '../../utils/displayPrice'
import { ScrollView } from 'react-native-gesture-handler'
import { displayDate } from '../../utils/displayDate'

export default class BillItem extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isSpanning: false
    }
  }

  render() {
    const { bill, index } = this.props
    let { isSpanning } = this.state
    const { items, borrowers, payer, location, category, date, debtCount, total } = bill
    let colorGrad = COLORS.gradientGreen
    if (index % 3 === 0) colorGrad = COLORS.gradientPurple
    else if (index % 2 === 0) colorGrad = COLORS.gradientPink
    return (
      <>
        <View style={[styles.badge, { backgroundColor: debtCount === 0 ? COLORS.black : COLORS.green }]}></View>
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
              }}>{displayDate(date, 'DD.MM.YYYY')}</Text>
              <Text style={{
                fontSize: 18,
                color: COLORS.white,
                marginBottom: 5
              }}>{location}</Text>
              <ScrollView
                style={{
                  width: '60%',
                  marginBottom: 10
                }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <FlatList
                  style={styles.flexRow}
                  data={borrowers}
                  renderItem={({ index, item }) =>
                    <Avatar
                      id={index}
                      source={item.avatarUrl}
                      size={26}
                      style={{ borderColor: 'white', borderWidth: 1, marginRight: 5 }} />
                  }
                  listKey={(item, index) => 'Item' + index.toString()}
                />
              </ScrollView>
            </View>
            <View style={{
              flex: 1,
              alignItems: 'flex-end'
            }}>
              <TouchableOpacity
                onPress={() => this.setState({ isSpanning: !this.state.isSpanning })}
              >
                <Entypo name="resize-full-screen" size={24} color={COLORS.white} />
              </TouchableOpacity>
            </View>
          </View>
          <View>
            {
              !isSpanning ?
                <></>
                :
                <ScrollView
                  style={{
                    // width: '60%',
                    marginBottom: 10
                  }}
                >
                  <FlatList
                    // style={styles.flexRow}
                    data={items}
                    renderItem={({ index, item }) => {
                      return (
                        <View style={{ flexDirection: 'row' }}>
                          <Text style={{
                            flex: 1,
                            color: COLORS.white,
                            marginBottom: 5
                          }}>{item.quantity}</Text>
                          <Text style={{
                            color: COLORS.white,
                            flex: 4,
                            marginBottom: 5
                          }}>{item.name}</Text>
                          <Text style={{
                            color: COLORS.white,
                            flex: 2,
                            fontFamily: 'Montserrat-Bold',
                            textAlign: 'right',
                            alignItems: 'stretch',
                            marginBottom: 5
                          }}>{displayPrice(item.price)}</Text>
                        </View>
                      )
                    }}
                    listKey={(item, index) => 'ItemF' + index.toString()}
                  />
                </ScrollView>
            }
          </View>
          <View style={styles.billBot}>
            <Text
              style={{
                fontFamily: 'Montserrat-Bold',
                fontSize: 28,
                bottom: -5,
                color: COLORS.white
              }}>{displayPrice(total)}</Text>
            <Avatar
              style={{ borderColor: COLORS.white, borderWidth: 1 }}
              size={32}
              source={payer.avatarUrl} />
          </View>
          <Text style={styles.categoryText}>{category}</Text>
        </LinearGradient>
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
  flexRow: {
    flexDirection: 'row'
  }
})