import React, { Component } from 'react'
import { SafeAreaView, View, Text, Image, TouchableOpacity, Animated, ScrollView, Dimensions, TouchableHighlight } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons
 from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './Account.component.style.js';
import COLORS from '../../assets/colors'

const { width, height } = Dimensions.get('window');

export default class AccountScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      backgroundColor: 'rgba(0,0,0,0.1)'
    }
  }

  render() {
    const {backgroundColor} = this.state.backgroundColor
    return (
      <SafeAreaView style={styles.accountContainer}>
        {/* Info containing name, phone, email */}
        <View style={styles.infoContainer}>
          <View style={styles.topContainer}>
            <View style={styles.avatarContainer}>
              <Image
                style={styles.avatar}
                source={require('../../assets/images/avatar_2.png')}
              />
              <View>
                <Text style={styles.fullName}>John Smith</Text>
                <Text style={styles.lightText}>jnsmith</Text>
              </View>
            </View>
            <AntDesign name="edit" size={24} color={COLORS.darkblue}/>
          </View>
          <View style={{flexDirection: 'row', marginBottom: 10}}>
            <AntDesign style={{marginRight: 10}} name="phone" size={20} color={COLORS.lightgray}/>
            <Text style={styles.lightText}>(+84) 0906835383</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <AntDesign style={{marginRight: 10}} name="mail" size={20} color={COLORS.lightgray}/>
            <Text style={styles.lightText}>jnsmith@gmail.com</Text>
          </View>
        </View>

        {/* Overview of Balance and Bills involved */}
        <View style={[styles.borderLight, styles.overviewContainer]}>
          <View style={styles.centeredText}>
            <Text style={styles.empText}>140.000</Text>
            <Text style={styles.lightText}>Balance</Text>
          </View>
          <View style={styles.middleBar}/>
          <View style={styles.centeredText}>
            <Text style={styles.empText}>12</Text>
            <Text style={styles.lightText}>Bills</Text>
          </View>
        </View>

        {/* Statistic and Friends */}
        <View style={{marginBottom: 25}}>
          <TouchableHighlight
            style={styles.rowTouchContainer}
            underlayColor={'rgba(186,186,186,0.1)'}
            onPress={()=>{}}
            >
            <>
              <MaterialCommunityIcons name="wallet-outline" size={24} color={COLORS.aqua}/>
              <Text style={styles.tagText}>Payment</Text>
            </>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.rowTouchContainer}
            underlayColor={'rgba(186,186,186,0.1)'}
            onPress={()=>{}}
            >
            <>
              <AntDesign name="barschart" size={24} color={COLORS.aqua}/>
              <Text style={styles.tagText}>Statistics</Text>
            </>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.rowTouchContainer}
            underlayColor={'rgba(186,186,186,0.1)'}
            onPress={()=>{}}
            >
            <>
              <MaterialCommunityIcons name="account-multiple-outline" size={24} color={COLORS.aqua}/>
              <Text style={styles.tagText}>Friends</Text>
            </>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.rowTouchContainer}
            underlayColor={'rgba(186,186,186,0.1)'}
            onPress={()=>{}}
            >
            <>
              <AntDesign name="setting" size={24} color={COLORS.aqua}/>
              <Text style={styles.tagText}>Settings</Text>
            </>
          </TouchableHighlight>
        </View>

        {/* Signout */}
        <View style={[styles.borderLight, {paddingVertical: 10}]}>
          <TouchableHighlight
            style={{flex: 1}}
            underlayColor={'rgba(186,186,186,0.1)'}
            onPress={()=>{}}
          >
            <View style={styles.rowTouchContainer}>
              <AntDesign name="logout" size={24} color={COLORS.salmon}/>
              <Text style={[styles.tagText, styles.logoutText]}>Sign out</Text>
            </View>
          </TouchableHighlight>
        </View>
      </SafeAreaView>
    )
  }
}