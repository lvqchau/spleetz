import React from 'react';
import { setCustomText } from 'react-native-global-props/src';
import {Image} from 'react-native'
import MainAccount from './src/containers/Account/screens/MainAccount';
import { SafeAreaView } from 'react-navigation';
import Avatar from './src/components/Avatar';
import NotificationScreen from './src/containers/Notification/screens/NotificationScreen';
import MyTabs from './src/navigator/AppNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './src/navigator/AppNavigator';

class App extends React.Component {
  render() {
    const customTextProps = { 
      style: { 
        fontFamily: 'Quicksand',
        fontSize: 16,
        fontWeight: '500'
      }
    }
    setCustomText(customTextProps);
    return (
      // <MainAccount/>
      // <NotificationScreen />
      <AppNavigator/>
        // <MyTabs/>
      
    )
  }
};

export default App;