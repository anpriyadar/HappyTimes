import React, { Component } from 'react'
import {StyleSheet, View } from 'react-native'
import Button from '../button'

import componentStyles from '../../styles/styles'
const s = StyleSheet.create(componentStyles)

class Form extends Component{
  render(){
    const { children, buttonDisplayText, customContainerStyles } = this.props
    return (
      <View style={{ marginTop: 10, marginBottom: 10 }}>
      {this.props.children}
        <View style={{ marginTop: 30}}>
          <Button title = { buttonDisplayText } customContainerStyles = {customContainerStyles} />
        </View>
      </View>
    )
  }
}

export default Form
