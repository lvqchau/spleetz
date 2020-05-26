import React from 'react';
import { setCustomText } from 'react-native-global-props/src';

import MainAccount from './src/containers/Account/screens/MainAccount';
import { SafeAreaView } from 'react-navigation';

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
      <MainAccount />
    )
  }
};

export default App;