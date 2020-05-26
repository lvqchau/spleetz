import React from 'react';
import { setCustomText } from 'react-native-global-props/src';

import AccountScreen from './src/containers/Account/screens/AccountScreen'
// import MainAccount from './src/containers/Account/screens/MainAccount';
// import AppNavigator from './src/navigator/AppNavigator';

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
      <AccountScreen/>
    )
  }
};

export default App;
