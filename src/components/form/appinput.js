import React, { Component } from 'react';
import {TextInput, View, StyleSheet } from 'react-native';
import componentStyles from '../../styles/styles'
const s = StyleSheet.create(componentStyles)


export default class Userinput extends Component {
  render() {
    return (
      <View style={s.fullPadding}>
        <TextInput
          style={[s.borderBottomGreyThin,s.height40,s.width150]}
          placeholder={this.props.placeholder}
          onChangeText={(text) => this.setState({text})}
        />
      </View>
    );
  }
}
