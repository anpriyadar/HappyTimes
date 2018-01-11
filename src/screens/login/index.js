import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  ImageBackground,
  TouchableWithoutFeedback
} from 'react-native';

import Userinput from '../../components/form/appinput.js'
import AppForms from '../../components/form/appforms.js'
import componentStyles from '../../styles/styles'
import responsiveComponentStyles from '../../styles/responsivestyles'
import Icon from 'react-native-vector-icons/FontAwesome'
import { connect } from "react-redux";
import {login}  from "../../redux/actions/auth";


const s = StyleSheet.create(componentStyles)
const rs = StyleSheet.create(responsiveComponentStyles)

class Login extends Component<{}> {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      isValid: false,
      forgotPasswordModalVisible: false,
      showSpinner: false
    };
  }

  changeUsername(username) {
  this.setState({
    username: username,
  });
}

changePassword(password){
  this.setState({
    password: password,
  });
}

  render() {
    const deviceStyle = Platform.OS === 'ios' ?[s.borderFullGreyThin,rs.inputWidth,s.height40,s.backgroundWhite,s.borderRadiusLg,s.fullPaddingSm] : [rs.inputWidth,s.height40,s.backgroundWhite,s.borderRadiusLg,s.fullPaddingSm,s.borderFullGreyThin]
    return (
      <ImageBackground  style={[rs.fullWidthImage,rs.fullHeightImage,s.alignItemsCenter,s.justifyCenter]} source={require('../../../assets/Login2.jpg')}>
      <TextInput
        style= {deviceStyle}
        underlineColorAndroid='rgba(0,0,0,0)'
        placeholder={'Name@email.com'}
        placeholderTextColor = '#777'
        selectionColor = 'darkblue'
        onChangeText={this.changeUsername.bind(this)}
      />
      <TextInput
        style= {deviceStyle}
        secureTextEntry = {true}
        underlineColorAndroid='rgba(0,0,0,0)'
        placeholder={"Password"}
        placeholderTextColor = '#777'
        selectionColor = 'darkblue'
        onChangeText={this.changePassword.bind(this)}
      />

      <TouchableWithoutFeedback onPress ={()=>this.props.login(this.state.username, this.state.password)}>
      <View style={[rs.button, s.alignItemsCenter]}>
      <Text>
       Submitt
      </Text>
      </View>
      </TouchableWithoutFeedback>

        <Icon.Button name="facebook" backgroundColor="#3b5998" onPress = {()=>this.props.login()}>
          <Text style={{fontFamily: 'Arial', fontSize: 15, color: '#fff'}}>Login with Facebook</Text>
        </Icon.Button>
        <TouchableWithoutFeedback onPress ={()=>this.props.username.username === 'Ani'? this.props.navigation.navigate("Registeration"): null}>
        <View style={[s.backgroundTransparent, s.fullPadding]}>
        <Text>
         Sign Up!
        </Text>
        </View>
        </TouchableWithoutFeedback>
        </ImageBackground>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.auth.isLoading,
  username:state.auth.username
});

const mapDispatchToProps = {
  login
};

export default connect(mapStateToProps, mapDispatchToProps)(Login)
