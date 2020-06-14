import React, { Component } from "react";
import styles from "./style";
import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import { Button } from 'react-native-elements';
import Config from "./../../config";
export default class LoginScreen extends Component {
  onPressLogin = () => {
    var params = {
           'email': '123@gmail.com',
           'password': '1234',
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
       //AsyncStorage.setItem('USER_TOKEN_', JSON.stringify(responseJson.access_token));	
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
            <TextInput placeholder="Username" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
            <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true}/>
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
