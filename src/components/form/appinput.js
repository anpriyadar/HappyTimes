import React, { Component } from 'react';
import {TextInput, View, StyleSheet, Platform } from 'react-native';
import componentStyles from '../../styles/styles'
import responsiveComponentStyles from '../../styles/responsivestyles'
const s = StyleSheet.create(componentStyles)
const rs = StyleSheet.create(responsiveComponentStyles)

export default class Userinput extends Component {
  render() {
  const deviceStyle = Platform.OS === 'ios' ?[s.borderBottomGreyThin,rs.inputWidth,s.height40] : [rs.inputWidth,s.height40]
    return (
        <TextInput
          style= {deviceStyle}
          placeholder={this.props.placeholder}
          placeholderTextColor = '#777'
          selectionColor = 'darkblue'
          onChangeText={(text) => this.setState({text})}
        />
    );
  }
}
