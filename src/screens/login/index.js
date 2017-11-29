import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ImageBackground
} from 'react-native';

import Userinput from '../../components/form/appinput.js'
import AppForms from '../../components/form/appforms.js'
import componentStyles from '../../styles/styles'
import responsiveComponentStyles from '../../styles/responsivestyles'


const s = StyleSheet.create(componentStyles)
const rs = StyleSheet.create(responsiveComponentStyles)





export default class Login extends Component<{}> {
  render() {
    return (
      <ImageBackground  style={[rs.fullWidthImage,rs.fullHeightImage,s.alignItemsCenter,s.justifyCenter]} source={require('../../../assets/Login2.jpg')}>
      <AppForms customButtonStyles = {rs.button} btnText = {'Submit'} >
        <Userinput placeholder ='Username'/>
        <Userinput placeholder ='Password'/>
        </AppForms>
        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
