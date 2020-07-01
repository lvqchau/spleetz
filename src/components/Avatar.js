import React from 'react'
import { Image } from 'react-native'

class Avatar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      image: this.props.source ? this.props.source : require('../assets/images/null_avatar.png'),
      isUrl: this.props.source ? true : false
    }
  }

  onError = (err) => {
    this.setState({
      image: require('../assets/images/null_avatar.png')
    })
  }

  render() {
    const { size, style } = this.props
    return (
      <>
        {
          this.state.isUrl ?
            <Image
              style={[style, {
                width: size,
                height: size,
                borderRadius: size / 2
              }]}
              source={{ uri: this.state.image }}
              onError={(err) => this.onError(err)}
            />
            :
            <Image
              style={[style, {
                width: size,
                height: size,
                borderRadius: size / 2
              }]}
              source={this.state.image}
              onError={(err) => this.onError(err)}
            />
        }
      </>
    )
  }
}

export default Avatar