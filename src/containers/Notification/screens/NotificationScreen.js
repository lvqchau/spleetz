import React, { Component } from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { data } from './NotiData'
import NotiItem from './NotiItem'
import LinearGradient from 'react-native-linear-gradient';
class NotificationScreen extends Component {
  render() {
    return (
      // <LinearGradient colors={['#3FE1EF', '#24AAD8', '#007FFF']}>
      <LinearGradient 
        end={{ x: 0, y: 1 }}
        start={{ x: 1, y: 1 }}
        colors={['#FF764D', '#FF7464', '#FE655A']}
      >
        <SafeAreaView>
          <FlatList
            style={styles.listStyle}
            data={data}
            renderItem={({ item }) => <NotiItem noti={item} />}
            keyExtractor={item => item.id}
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