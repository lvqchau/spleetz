import React from 'react'
// import MainAccountStack from '../navigator/MainAccountStack'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootAccountStack from '../navigator/RootAccountStack';
import MainAccountStack from '../navigator/MainAccountStack';

const MyTheme = {
  colors: {
    background: '#fff'
  },
};

class MainAccount extends React.Component {
  render() {
    return (
      <SafeAreaProvider>
        <NavigationContainer theme={MyTheme}>
          <MainAccountStack/>
        </NavigationContainer>
      </SafeAreaProvider>
    )
  }
}

export default MainAccount