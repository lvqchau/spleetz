import React from 'react'
import MainAccountStack from '../navigator/MainAccountStack'

class MainAccount extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <MainAccountStack/>
      </NavigationContainer>
    )
  }
}

export default MainAccount