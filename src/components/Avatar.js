import React from 'react'
import { Image } from 'react-native'

class Avatar extends React.Component {

  constructor(props) {
    super(props)
    if (this.props.source === "" || !this.props.source) {
      this.state = { 
        image: require("../assets/images/null_avatar.png")
      }
    } else {
      this.state = { 
        image: this.props.source
      }
    }
    
  }

  onError = (err) => {
    this.setState({ 
      image: require("../assets/images/null_avatar.png")
    })
  }

  render() {
    const { source, size, style } = this.props
    // For http handel and default avatars
    return (
      <Image
          style={[style, {
            width: size,
            height: size,
            borderRadius: size/2
          }]}
          source={this.state.image}
          onError={(err) => this.onError(err)}
        />
    )
  }
}

export default Avatar