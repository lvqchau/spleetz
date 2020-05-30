import React from 'react'
import { TouchableOpacity, Animated, View, StyleSheet, Text } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

import Avatar from '../../../components/Avatar'
import COLORS from '../../../assets/colors'
import displayPrice from '../../../utils/displayPrice'

class NotiItem extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      cardHeight: 70,
      isChosen: false,
      isChecked: null
    }
  }

  confirmNoti = (isChecked) => {
    this.setState({
      isChosen: true,
      isChecked
    })
  }

  render() {
    const { noti, index, y, containerHeight } = this.props
    const { cardHeight } = this.state
    const position = Animated.subtract(index * cardHeight, y)
    const isDisappearing = -cardHeight
    const isTop = 0
    const isBottom = containerHeight - cardHeight
    const isAppearing = containerHeight
    const translateY = Animated.add(
      Animated.add(
        y,
        y.interpolate({
          inputRange: [0, 0.00001 + index * cardHeight],
          outputRange: [0, -index * cardHeight],
          extrapolateRight: "clamp",
        })
      ),
      position.interpolate({
        inputRange: [isBottom, isAppearing],
        outputRange: [0, -cardHeight / 4],
        extrapolate: "clamp",
      })
    );
    const scale = position.interpolate({
      inputRange: [isDisappearing, isTop, isBottom, isAppearing],
      outputRange: [0.5, 1, 1, 0.5],
      extrapolate: "clamp",
    });
    const opacity = position.interpolate({
      inputRange: [isDisappearing, isTop, isBottom, isAppearing],
      outputRange: [0.5, 1, 1, 0.5],
    });
    return (
      <Animated.View
        style={{ opacity, transform: [{ translateY }, { scale }] }}
        onLayout={(event) => {
          var { x, y, width, height } = event.nativeEvent.layout;
          this.setState({ cardHeight: height })
        }}>
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
              {
                this.state.isChosen ?
                  (
                    <>
                    {
                      this.state.isChecked ? 
                      <Ionicons name="ios-checkmark" size={28} color={COLORS.green}/>
                      : 
                      <Ionicons name="ios-close" size={28} color={COLORS.salmon}/>
                    }
                    </>
                  )
                  : (
                    <>
                      <TouchableOpacity 
                        style={styles.choiceCircle}
                        onPress={()=>{this.confirmNoti(1)}}
                        >
                        <Ionicons name="ios-checkmark-circle" size={28} color={COLORS.green} />
                      </TouchableOpacity>
                      <TouchableOpacity 
                        style={styles.choiceCircle}
                        onPress={()=>{this.confirmNoti(0)}}
                        >
                        <Ionicons name="ios-close-circle" size={28} color={COLORS.salmon} />
                      </TouchableOpacity>
                    </>
                  )
              }
            </View>
          </View>
        </View>
      </Animated.View>
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