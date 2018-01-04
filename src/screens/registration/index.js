import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native'
import AppForms from '../../components/form/appforms.js'
import Userinput from '../../components/form/appinput.js'
import componentStyles from '../../styles/styles'
import responsiveComponentStyles from '../../styles/responsivestyles'

const rs = StyleSheet.create(responsiveComponentStyles)



export default class Registration extends Component {
  render(){
    return(
      <AppForms customButtonStyles = {rs.button} btnText = {'Submit'} nav = {this.props.navigation} >
        <Userinput placeholder ='Emai Address'/>
        <Userinput placeholder ='Password' secureTextEntry = {true}/>
        </AppForms>
    );
  }

}
