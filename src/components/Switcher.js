import React from 'react'
import { Switch } from "react-native";
import COLORS from '../assets/colors';

class Switcher extends React.Component {

  constructor(props) {
    super(props)
    const { isEnabled } = this.props
    this.state = {
      isEnabled
    }
  }
  
  toggleSwitch = () => this.setState({isEnabled: !this.state.isEnabled});

  render() {
    const { isEnabled } = this.state
    return (
      <Switch
        style={{ transform: [{ scaleX: .8 }, { scaleY: .8 }] }}
        trackColor={{ false: "#767577", true: COLORS.aqua }}
        thumbColor={isEnabled ? "#fff" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={this.toggleSwitch}
        value={isEnabled}
      />
    )
  }
}

export default Switcher