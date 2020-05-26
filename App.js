/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { setCustomText } from 'react-native-global-props/src';

import SplitScreen from './src/containers/Split/SplitScreen'
import AccountScreen from './src/containers/Account/AccountScreen'
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
      <SplitScreen/>
    )
  }
};

export default App;
