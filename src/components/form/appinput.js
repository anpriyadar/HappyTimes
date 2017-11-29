import React, { Component } from 'react';
import {TextInput, View, StyleSheet } from 'react-native';
import componentStyles from '../../styles/styles'
import responsiveComponentStyles from '../../styles/responsivestyles'
const s = StyleSheet.create(componentStyles)
const rs = StyleSheet.create(responsiveComponentStyles)

export default class Userinput extends Component {
  render() {
    return (
      <View style={[s.fullPaddingLg]}>
        <TextInput
          style={[s.borderBottomGreyThin,rs.inputWidth,s.height26]}
          placeholder={this.props.placeholder}
          placeholderTextColor = '#777'
          selectionColor = 'darkblue'
          onChangeText={(text) => this.setState({text})}
        />
      </View>
    );
  }
}
