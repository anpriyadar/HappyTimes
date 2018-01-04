import React, { Component } from 'react'
import { Button, StyleSheet, View, Text, TouchableOpacity } from 'react-native'


import componentStyles from '../../styles/styles'
const s = StyleSheet.create(componentStyles)

class UserButton extends Component{
  render(){
    const {customButtonStyles, btnText, nav} =this.props
    buttonText = <Text style={s.buttonText}>{btnText}</Text>;
    return(
    <TouchableOpacity onPress={()=>  nav.navigate('Home')}
    style={customButtonStyles}>
    {buttonText}
    </TouchableOpacity>
    )
  }
}

export default UserButton
