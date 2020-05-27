import React from 'react'
// import MainAccountStack from '../navigator/MainAccountStack'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import MainAccountStack from '../navigator/MainAccountStack';

const MyTheme = {
  colors: {
    background: '#fff'
  },
};

class MainAccount extends React.Component {
  render() {
    return (
      // <SafeAreaView>
        // {/* <NavigationContainer > */}
          <MainAccountStack/>
        // {/* </NavigationContainer> */}
      // </SafeAreaView>
    )
  }
}

export default MainAccount