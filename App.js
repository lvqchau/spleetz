import React from 'react';
import { setCustomText } from 'react-native-global-props/src';
import {Image} from 'react-native'
import MainAccount from './src/containers/Account/screens/MainAccount';
import { SafeAreaView } from 'react-navigation';
import Avatar from './src/components/Avatar';
import NotificationScreen from './src/containers/Notification/screens/NotificationScreen';

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
      <MainAccount/>
      // <NotificationScreen />
    )
  }
};

export default App;