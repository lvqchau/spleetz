import React, { Component } from 'react'
import { StyleSheet, TextInput, View, Text } from 'react-native'
import COLORS from '../../assets/colors'

const styles = StyleSheet.create({
  label: {
    color: COLORS.black,
    fontSize: 16,
    fontFamily: 'Quicksand-Bold',
    marginBottom: 6,
	},
  inputIsFocused: {
    width: '100%',
    fontSize: 20,
		fontFamily: 'Quicksand-Medium',
		padding: 0,
		borderBottomWidth: 2,
		paddingBottom: 0,
		borderColor: COLORS.darkgray,
		marginBottom: 10
  },
  inputIsBlur: {
    width: '100%',
    fontSize: 20,
		fontFamily: 'Quicksand-Medium',
		padding: 0,
		paddingBottom: 0,
    borderBottomWidth: 2,
		borderColor: COLORS.darkgray,
		marginBottom: 10
  },
  error: {
    color: 'red',
    marginTop: 6
  }
})

export default class Input extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isFocused: false
    }
    this.isFocused = this.isFocused.bind(this)
    this.isNotFocused = this.isNotFocused.bind(this)
  }
  isFocused () {
    if (this.props.onFocus) this.props.onFocus()
    this.setState({
      isFocused: true
    })
  }
  isNotFocused () {
    if (this.props.onBlur) this.props.onBlur()
    this.setState({
      isFocused: false
    })
  }
  render () {
    const { editable = true, label, placeholder, onChange, errorMessage, style, value, styleInputIsFocused, styleInputIsBlur, customStyleInput, multiLine, numberOfLines, keyboardType, iRef, inputComponent: InputComponent = TextInput, ...restProps } = this.props
		const { isFocused } = this.state
    const styleInput = isFocused === true ? styles.inputIsFocused : styles.inputIsBlur
    const styleInputProp = isFocused === true ? styleInputIsFocused : styleInputIsBlur
    return (
      <View style={style}>
        {label && <Text style={styles.label}>{label}</Text>}
        <InputComponent
          style={[styleInput, styleInputProp, customStyleInput]}
          placeholder={placeholder}
          onChangeText={onChange}
          onFocus={this.isFocused}
          onBlur={this.isNotFocused}
          multiline={multiLine || false}
          numberOfLines={numberOfLines}
          keyboardType={keyboardType || 'default'}
          value={value}
          ref={iRef}
          editable={editable}
          {...restProps}
        />
        {!!errorMessage && (
          <Text
            style={styles.error}
          >
            {errorMessage}
          </Text>
        )}
      </View>
    )
  }
}
