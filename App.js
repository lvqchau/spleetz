import React from 'react';
import { setCustomText } from 'react-native-global-props/src';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import COLORS from './src/assets/colors';
import { navigationRef } from './src/navigator/RootNavigation';
import AppNavigator from './src/navigator/AppNavigator';
import AccessStack from './src/navigator/AccessNavigator';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
    text: COLORS.darkblue,
    primary: COLORS.salmon
  }
};

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      userToken: null,
      isSignout: true
    }
  }

  _stateChange = (e) => {
    console.log(navigationRef.current.getCurrentRoute().name)
  }

  _authedUser = (userToken, isSignout) => {
    this.setState({
      userToken,
      isSignout
    })
  }

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
      <SafeAreaProvider>
        <NavigationContainer 
          theme={MyTheme}
          ref={navigationRef}
          onStateChange={(e) => this._stateChange(e)}
        >
        {this.state.userToken === null 
          ? <AccessStack _authedUser={this._authedUser}/>
          : <AppNavigator _authedUser={this._authedUser}/>
        }
        </NavigationContainer>
      </SafeAreaProvider>
    )
  }
};

export default App;