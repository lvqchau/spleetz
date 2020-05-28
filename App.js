import React from 'react';
import { setCustomText } from 'react-native-global-props/src';
// import MyTabs from './src/navigator/AppNavigator';
import AppNavigator from './src/navigator/AppNavigator';

class App extends React.Component {
  render() {
    const customTextProps = { 
      style: { 
        fontFamily: 'Montserrat',
        fontSize: 16,
        fontWeight: '500'
      }
    }
    setCustomText(customTextProps);
    return (
      <AppNavigator/>
        // <MyTabs/>
    )
  }
};

export default App;