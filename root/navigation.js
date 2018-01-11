import { TabNavigator, StackNavigator } from 'react-navigation';
import Login from '../src/screens/login'
import Home from '../src/screens/home'
import Registeration from '../src/screens/registration'

 const navigator = StackNavigator({
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

export default navigator;
