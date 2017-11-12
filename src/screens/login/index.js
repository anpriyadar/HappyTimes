import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Userinput from '../../components/form/appinput.js'
import AppForms from '../../components/form/appforms.js'


export default class Login extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
      <AppForms >
        <Userinput placeholder ='email'/>
        <Userinput placeholder ='password'/>
        </AppForms>
      </View>
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
