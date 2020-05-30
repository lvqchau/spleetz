import React, { Component } from 'react'
import { ScrollView, View, SafeAreaView, TouchableOpacity, Text, FlatList } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Ionicons from 'react-native-vector-icons/Ionicons'

import COLORS from '../../../assets/colors'
import styles from './Message.component.style'
import SendBubble from './component/SendBubble'
import ReceiveBubble from './component/ReceiveBubble'

const mockData = [
	{
		id: '0',
		time: '6:25 PM',
		content: `Sub, about the arrangements for Alice's birthday, you can make the cake in time right 1?`,
		sender: 2
	}, 
	{
		id: '1',
		time: '6:30 PM',
		content: `Sub, about the arrangements for Alice's birthday, you can make the cake in time right 1?`,
		sender: 1
	}, 
	{
		id: '2',
		time: '6:35 PM',
		content: `Sub, about the arrangements for Alice's birthday, you can make the cake in time right 2?`,
		sender: 2
	}, 
	{
		id: '3',
		time: '6:40 PM',
		content: `Sub, about the arrangements for Alice's birthday, you can make the cake in time right 3?`,
		sender: 1
	}, 
	{
		id: '4',
		time: '6:45 PM',
		content: `Sub, about the arrangements for Alice's birthday, you can make the cake in time right 4?`,
		sender: 2
	}, 
	{
		id: '5',
		time: '6:50 PM',
		content: `Sub, about the arrangements for Alice's birthday, you can make the cake in time right 5?`,
		sender: 1
	}, 
	{
		id: '6',
		time: '6:55 PM',
		content: `Hello there`,
		sender: 2
	},
	{
		id: '7',
		time: '7:00 PM',
		content: `Hi`,
		sender: 1
	},
]
class MessageRoomScreen extends Component {
  render() {
    const { id, type, groupName, users, date, latestMessage, isRead } = this.props.route.params.item
    let headerName = "room-name"
    if (type === "group")
      headerName = groupName
    else headerName = users[0].username

    return (
      <SafeAreaView style={styles.messageScreenContainer}>
        <View style={styles.messageContainer}>
          <View style={styles.scrollContainer}>
                <FlatList
                    style={styles.flexColumn}
                    data={mockData}
                    renderItem={({ index, item }) =>
                    item.sender === 1 
                        ?	<SendBubble content={item.content} time={item.time}/>
                        : <ReceiveBubble content={item.content} time={item.time}/> 
                    }
                    showsVerticalScrollIndicator={false}
                    initialScrollIndex={mockData.length -1}
                    />
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
            <TouchableOpacity style={{zIndex: 100}} onPress={() => this.props.navigation.goBack()}>
              <Ionicons name="ios-arrow-round-back" size={32} color={COLORS.white} />
            </TouchableOpacity>
            <Text style={[styles.userName]}>{headerName}</Text>
          </View>
        </LinearGradient>
      </SafeAreaView>
    )
  }
}

export default MessageRoomScreen