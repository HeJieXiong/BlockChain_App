import React, { Component } from "react";
import styles from "./style";
import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import { Button } from 'react-native-elements';
import { AsyncStorage } from "react-native"
import Config from "./../../config";
export default class LoginScreen extends Component {
  onPressLogin = () => {
    var params = {
           'email': this.state.email,
           'password': this.state.password,
       };

     let url = Config.SERVER_URL + "/api/login";
     console.log('1');
     console.log(url);
     fetch(url, {
       method: 'POST',
       headers: {
       Accept: 'application/json',
       'Content-Type': 'application/json',
       },
       body: JSON.stringify(params),
     }) .then((response) => response.json())
     .then((responseJson) => {
      console.log(responseJson);
       AsyncStorage.setItem('USER_TOKEN_', JSON.stringify(responseJson.access_token));
       console.log(JSON.stringify(responseJson.access_token));
       AsyncStorage.getItem('USER_TOKEN_', (err, result)=> {
        if(JSON.stringify(responseJson.access_token) != null){
          this.props.navigation.navigate('HomePage');
        }	
        else {
          alert('Tài khoản hoặc mật khẩu sai, vui lòng kiểm tra lại!');
        }
      });

       
     })
      .catch((error) => {
       console.error(error);
       
     });
   
  }
  render() {
    return (
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
          <Text style={styles.logoText}>Đăng nhập</Text>
            <TextInput placeholder="Email" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} onChangeText={(text) => this.setState({email: text})} />
            <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true}  onChangeText={(text) => this.setState({password: text})}/>
            <Button
              buttonStyle={styles.loginButton}
              onPress={() => this.onPressLogin()}
              title="Login"
            />
            <TouchableOpacity  style={styles.regisText} 
             onPress={() => {this.props.navigation.navigate('Register')}}
            ><Text>Đăng ký</Text></TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }


}
