import React, { Component } from 'react'
import { Button, StyleSheet, View } from 'react-native'

import componentStyles from '../../styles/styles'
const s = StyleSheet.create(componentStyles)

class UserButton extends Component{
  render(){
    const {customContainerStyles} =this.props

    return(
      <View style={s.fullPadding}>
      <Button
       title="submit"
       color="#841584"
    />
      </View>
    )
  }
}

export default UserButton
