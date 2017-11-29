import React, { Component } from 'react'
import { Button, StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'


import componentStyles from '../../styles/styles'
const s = StyleSheet.create(componentStyles)

class UserButton extends Component{
  render(){
    const {customButtonStyles, btnText} =this.props
    buttonText = <Text style={s.buttonText}>{btnText}</Text>;
    return(
    <TouchableOpacity onPress={Actions.tabbar}
    style={customButtonStyles}>
    {buttonText}
    </TouchableOpacity>
    )
  }
}

export default UserButton
