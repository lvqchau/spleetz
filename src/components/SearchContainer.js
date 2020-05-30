import React, { Component } from 'react'
import { TextInput, View, StyleSheet } from 'react-native'
import EvilIcons from 'react-native-vector-icons/EvilIcons'

import COLORS from '../assets/colors';

export default class SearchContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      isFocused: false
    }
  }

  handleFocus = () => this.setState({ isFocused: true })
  handleInput = (searchText) => this.setState({ searchText })
  handleBlur = () => this.setState({ isFocused: false })

  render() {
    const { style } = this.props
    const { searchText, isFocused } = this.state
    return (
      <View>
        <TextInput
          style={[
            styles.inputStyle, {
              borderBottomColor: isFocused
                ? COLORS.aqua
                : COLORS.lightgray
            }, style]}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onChangeText={searchText => this.handleInput(searchText)}
          value={searchText}
          placeholder="Search a friend's name"
        />
        <View style={{
          position: 'absolute',
          top: 8,
          left: -5
        }}>
          <EvilIcons name="search" size={28} color={isFocused ? COLORS.aqua : COLORS.black} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  inputStyle: {
    fontFamily: 'Quicksand-SemiBold',
    padding: 10,
    borderBottomWidth: 1,
    width: '100%',
    paddingLeft: 30
  }
})