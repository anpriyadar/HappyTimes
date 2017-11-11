import React, {Component} from 'react'
import {Scene,Router} from 'react-native-router-flux'
import Login from '../screens/login'

const RouterComponent =()=> {
  return (
    <Router>
    <Scene key="root">
      <Scene key="login" component={Login} title ='Login' initial/>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
