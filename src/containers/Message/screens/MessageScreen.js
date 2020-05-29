import React, { Component } from 'react'
import { ScrollView, View, SafeAreaView, TouchableOpacity, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Ionicons from 'react-native-vector-icons/Ionicons'

import COLORS from '../../../assets/colors'
import styles from './Message.component.style'
class MessageScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.messageScreenContainer}>
        <View style={styles.messageContainer}>
          <View style={styles.scrollContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <Text>Message</Text>
              <Text>Message</Text>
              <Text>Message</Text>
              <Text>Message</Text>
              <Text>Message</Text>
              <Text>Message</Text>
              <Text>Message</Text>
              <Text>Message</Text>
              <Text>Message</Text>
              <Text>Message</Text>
              <Text>Message</Text>
              <Text>Message</Text>
              <Text>Message</Text>
              <Text>Message</Text>
              <Text>Message</Text>
              <Text>Message</Text>
              <Text>Message</Text>
              <Text>Message</Text>
              <Text>Message</Text>
              <Text>Message</Text>
              <Text>Message</Text>
              <Text>Message</Text>
              <Text>Message</Text>
              <Text>Message</Text>
              <Text>Message</Text>
              <Text>Message</Text>
              <Text>Message</Text>
              <Text>Message</Text>
              <Text>Message</Text>
              <Text>Message</Text>
              <Text>Message</Text>
              <Text>Message</Text>
              <Text>Message</Text>
              <Text>Message</Text>
              <Text>Message</Text>
              <Text>Message</Text>
            </ScrollView>
          </View>
          <View style={styles.sendContainer}>
            <View style={styles.sendBox}>
              <TouchableOpacity style={styles.fileIcon}>
                <Ionicons name="md-add" size={24} color={COLORS.white}/>
              </TouchableOpacity>
              <View style={styles.messageInput}>
                <ScrollView contentContainerStyle={{flexGrow: 1, alignItems: 'center'}} horizontal={true} showsHorizontalScrollIndicator={false}>
                  {/* Input field, temporary Text tag */}
                  <Text numberOfLines={1}>Message...</Text>
                </ScrollView>
              </View>
              <TouchableOpacity style={styles.sendIcon}>
                <Ionicons name="md-send" size={30} color={COLORS.turquoise}/>
              </TouchableOpacity>
            </View>
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