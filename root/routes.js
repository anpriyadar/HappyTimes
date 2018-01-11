import React, {Component} from 'react'
import AppNavigator from './index'
import { Provider } from 'react-redux'
import store from './store'

export default class RouterComponent extends Component {
  render () {
  return (
    <Provider store={store}>
   <AppNavigator/>
   </Provider>
  );
};
}
