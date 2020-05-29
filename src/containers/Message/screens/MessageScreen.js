import React, { Component } from 'react'
import { Dimensions, StatusBar, ScrollView, View, SafeAreaView, TouchableOpacity, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Ionicons from 'react-native-vector-icons/Ionicons'

import COLORS from '../../../assets/colors'
import styles from './Message.component.style'
class MessageScreen extends Component {
  render() {
    const { width, height } = Dimensions.get('window')
    const { sWidth, sHeight } = Dimensions.get('screen')
    console.log(width, sWidth, height, sHeight, StatusBar.currentHeight)
    return (
      <SafeAreaView forceInset={{ bottom: 'always' }} style={styles.messageScreenContainer}>
        <View style={styles.messageContainer}>
          <View style={styles.scrollContainer}>
            <ScrollView>
              <Text>Message</Text>
              <Text>Message</Text>
              <Text>Message</Text>
              <Text>Message</Text>
              <Text>Message</Text>
              <Text>Message</Text>
            </ScrollView>
          </View>
          <View style={styles.sendContainer}>
            <Text>SendBox</Text>
          </View>
        </View>
        <LinearGradient 
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          colors={COLORS.gradientPink}
          style={styles.gradContainer}
          >
          <View style={styles.headerNavigator}>
            <TouchableOpacity onPress={() => {}}>
              <Ionicons name="ios-arrow-round-back" size={32} color={COLORS.white} />
            </TouchableOpacity>
            <Text style={[styles.userName]}>John Smith</Text>
          </View>
          
        </LinearGradient>
        
      </SafeAreaView>
    )
  }
}

export default MessageScreen