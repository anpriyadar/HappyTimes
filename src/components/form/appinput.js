import React, { Component } from 'react';
import {TextInput, View, StyleSheet, Platform } from 'react-native';
import componentStyles from '../../styles/styles'
import responsiveComponentStyles from '../../styles/responsivestyles'
const s = StyleSheet.create(componentStyles)
const rs = StyleSheet.create(responsiveComponentStyles)

export default class Userinput extends Component {
  render() {
  const deviceStyle = Platform.OS === 'ios' ?[s.borderFullGreyThin,rs.inputWidth,s.height40,s.backgroundWhite,s.borderRadiusLg,s.fullPaddingSm] : [rs.inputWidth,s.height40,s.backgroundWhite,s.borderRadiusLg,s.fullPaddingSm,s.borderFullGreyThin]
    return (
        <TextInput
          style= {deviceStyle}
          secureTextEntry = {this.props.secureTextEntry}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder={this.props.placeholder}
          placeholderTextColor = '#777'
          selectionColor = 'darkblue'
          onChangeText={(text) => this.setState({text})}
        />
    );
  }
}
