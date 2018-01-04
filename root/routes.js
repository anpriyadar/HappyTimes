import React, {Component} from 'react'
import {Text,View} from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation';

import Login from '../src/screens/login'
import Home from '../src/screens/home'
import Registeration from '../src/screens/registration'

export default class RouterComponent extends Component {
  render () {
  return (
   <Root/>
  );
};
}

export const Root = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
    title: 'Login',
  }
  },
  Home:{
    screen: Home,
    navigationOptions: {
    title: 'Home',
  }
},
Registeration:{
  screen: Registeration,
  navigationOptions: {
  title: 'Registeration',
}
}
});
