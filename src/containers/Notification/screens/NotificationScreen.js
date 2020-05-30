import React, { Component } from 'react'
import { Animated, SafeAreaView, StyleSheet, Dimensions, FlatList } from 'react-native'
import { data } from './NotiData'
import NotiItem from '../components/NotiItem'
import LinearGradient from 'react-native-linear-gradient'

import COLORS from '../../../assets/colors'

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList)
class NotificationScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      containerHeight: Dimensions.get('window').height - 32,
    }
  }

  render() {
    const y = new Animated.Value(0);
    const onScroll = Animated.event([{ nativeEvent: { contentOffset: { y } } }], {
      useNativeDriver: true,
    });
    return (
      // <LinearGradient colors={['#3FE1EF', '#24AAD8', '#007FFF']}>
      <LinearGradient 
        end={{ x: 1, y: 1 }}
        start={{ x: 1, y: 0 }}
        colors={COLORS.gradientGreen}
      >
        <SafeAreaView>
          <AnimatedFlatList
            bounces={false}
            scrollEventThrottle={16}
            style={styles.listStyle}
            data={data}
            renderItem={({ item, index }) => <NotiItem noti={item} index={index} y={y} containerHeight={this.state.containerHeight}/>}
            keyExtractor={item => item.id}
            {...{ onScroll }}
            onLayout={(event) => {
              var { x, y, width, height } = event.nativeEvent.layout;
              this.setState({ containerHeight: height })
            }}
          />
        </SafeAreaView>
      </LinearGradient>
    )
  }
}
var styles = StyleSheet.create({
  notiContainer: {
    flex: 1,
    backgroundColor: 'beige'
  },
  listStyle: {
    paddingHorizontal: 25
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
export default NotificationScreen