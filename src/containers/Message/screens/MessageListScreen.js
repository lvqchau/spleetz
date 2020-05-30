import React, { Component } from 'react'
import { StyleSheet, FlatList, View, SafeAreaView, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Ionicons from 'react-native-vector-icons/Ionicons'

import GroupItem from './component/GroupItem'
import COLORS from '../../../assets/colors'
import styles from './Message.component.style'
import SearchContainer from '../../../components/SearchContainer'

const data = [
  // temporary data for UI
  {
    id: '0',
    type: 'group',
    groupName: 'EatingOut',
    users: [
      { username: 'John', avatar: '' },
      { username: 'Chau', avatar: '' },
      { username: 'Thanh', avatar: '' }
    ],
    date: '22/02/20',
    latestMessage: 'How are you doing?',
    isRead: true
  },
  {
    id: '1',
    type: 'group',
    groupName: 'EatingOut',
    users: [
      { username: 'John', avatar: '' },
      { username: 'Chau', avatar: '' },
      { username: 'Thanh', avatar: '' }
    ],
    date: '22/02/20',
    latestMessage: 'How are you doing?',
    isRead: true
  },
  {
    id: '2',
    type: 'normal',
    users: [
      { username: 'John', avatar: '' }
    ],
    date: '22/02/20',
    latestMessage: 'We still going to Smiths?',
    isRead: false
  },
  {
    id: '3',
    type: 'group',
    groupName: 'EatingOut',
    users: [
      { username: 'John', avatar: '' },
      { username: 'Chau', avatar: '' }
    ],
    date: '22/02/20',
    latestMessage: 'How are you doing?',
    isRead: true
  },
  {
    id: '4',
    type: 'normal',
    users: [
      { username: 'John', avatar: '' }
    ],
    date: '22/02/20',
    latestMessage: 'We still going to Smiths?',
    isRead: false
  },
  {
    id: '5',
    type: 'group',
    groupName: 'EatingOut',
    users: [
      { username: 'John', avatar: '' }
    ],
    date: '22/02/20',
    latestMessage: 'How are you doing?',
    isRead: true
  },
  {
    id: '6',
    type: 'group',
    groupName: 'EatingOut',
    users: [
      { username: 'John', avatar: '' },
      { username: 'John', avatar: '' },
      { username: 'John', avatar: '' },
      { username: 'John', avatar: '' }
    ],
    date: '22/02/20',
    latestMessage: 'We still going to Smiths?',
    isRead: false
  },
  {
    id: '7',
    type: 'group',
    groupName: 'EatingOut',
    users: [
      { username: 'John', avatar: '' },
      { username: 'Chau', avatar: '' },
      { username: 'Thanh', avatar: '' },
      { username: 'Thanh', avatar: '' },
      { username: 'Thanh', avatar: '' },
      { username: 'Thanh', avatar: '' },
      { username: 'Thanh', avatar: '' },
      { username: 'Thanh', avatar: '' }
    ],
    date: '22/02/20',
    latestMessage: 'How are you doing?',
    isRead: true
  },
  {
    id: '8',
    type: 'normal',
    users: [
      { username: 'John', avatar: '' }
    ],
    date: '22/02/20',
    latestMessage: 'We still going to Smiths?',
    isRead: false
  }
]

export default class MessageListScreen extends Component {
  render() {
    const { route, navigation } = this.props
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{
          flexDirection: 'row',
          paddingHorizontal: 25, 
          paddingVertical: 18
        }}>
          <LinearGradient
            start={{x:1, y:1}}
            end={{x:1, y:0}}
            colors={COLORS.gradientPink}
            style={{
              width: 42,
              height: 42,
              borderRadius: 42 / 2,
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 25
            }}
          >
            <Ionicons name="ios-add" size={42} color={COLORS.white} />
          </LinearGradient>
          <View style={{flex: 4}}>
            <SearchContainer/>
          </View>
        </View>
        <View style={{
          borderRadius: 30,
          backgroundColor: COLORS.white,
          paddingVertical: 20,
          shadowColor: COLORS.black,
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0.2,
          shadowRadius: 3,
          elevation: 3,
          marginBottom: 20*2+10
        }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            style={{ paddingHorizontal: 25 }}
            data={data}
            renderItem={({ item }) => <GroupItem item={item} route={route} navigation={navigation} />}
            keyExtractor={item => item.id}
          />
        </View>
      </SafeAreaView>
    )
  }
}