import React, {Component} from 'react'
import {Text} from 'react-native'
import {Scene,Router} from 'react-native-router-flux'
import Login from '../src/screens/login'
import Home from '../src/screens/home'
import RKumar from '../src/screens/home/rk'


const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{color: selected ? 'red' :'black'}}>{"Animesh"}</Text>
  );
}

const TabIcon1 = ({ selected, title }) => {
  return (
    <Text style={{color: selected ? 'red' :'black'}}>{"Rishi"}</Text>
  );
}


class RouterComponent extends Component {
  render () {
  return (
          <Router>
              <Scene key='root'>
                <Scene initial key='login' component={Login} title='Login' initial />
                <Scene  key="tabbar" tabs={true} hideNavBar={true} tabBarStyle={{ backgroundColor: '#FFFFFF' }} >
                <Scene key="osu" title="OSU" icon={TabIcon}>
            <Scene key="home" component={Home} hideNavBar={true} title="Scarlet"/>
             </Scene>
          <Scene key="RK" title="RK" icon={TabIcon1}>
      <Scene key="RK"
        component={RKumar}
        hideNavBar={true}
        title="login"
      />
    </Scene>
    </Scene>
    </Scene>
          </Router>
  );
};
};

export default RouterComponent;
