import React, { Component } from 'react'
import {StyleSheet, View } from 'react-native'
import Button from '../button'

import componentStyles from '../../styles/styles'
const s = StyleSheet.create(componentStyles)

class Form extends Component{
  render(){
    const { children, buttonDisplayText, customButtonStyles, btnText, nav } = this.props
    return (
      <View style={{ marginTop: 10, marginBottom: 10, alignItems:'center'}}>
      {this.props.children}
      <Button title = { buttonDisplayText } customButtonStyles = {customButtonStyles} btnText= {btnText} nav ={nav} />
      </View>
    )
  }
}

export default Form
