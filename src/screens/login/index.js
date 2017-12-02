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
import Icon from 'react-native-vector-icons/FontAwesome'
import firebase from 'react-native-firebase';


const s = StyleSheet.create(componentStyles)
const rs = StyleSheet.create(responsiveComponentStyles)


export default class Login extends Component<{}> {
  constructor() {
    super();
    this.state = {
      isAuthenticated: false,
    };
  }
  componentDidMount() {
  firebase.auth().signInAnonymously()
    .then(() => {
      this.setState({
        isAuthenticated: true,
      });
    });
}
  render() {
    return (
      <ImageBackground  style={[rs.fullWidthImage,rs.fullHeightImage,s.alignItemsCenter,s.justifyCenter]} source={require('../../../assets/Login2.jpg')}>
      <AppForms customButtonStyles = {rs.button} btnText = {'Submit'} >
        <Userinput placeholder ='Username'/>
        <Userinput placeholder ='Password' secureTextEntry = {true}/>
        </AppForms>
        <Icon.Button name="facebook" backgroundColor="#3b5998" onPress = {()=>alert('Test Button Press')}>
          <Text style={{fontFamily: 'Arial', fontSize: 15, color: '#fff'}}>Login with Facebook</Text>
        </Icon.Button>
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
