import React, { Component } from "react";
import styles from "./style";
import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, TouchableOpacity, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import DatePicker from "react-native-datepicker"
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'



export default class Login extends Component {

  render() {
    return (
      <KeyboardAwareScrollView style={styles.containerView} behavior="padding">

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
          <Text style={styles.logoText}>Home page</Text>
          </View>
          <Button
              buttonStyle={styles.loginButton}
              onPress={() => this.onPressLogin()}
              title="Tiến hành giao dịch"
            />
             <Button
              buttonStyle={styles.loginButton}
              onPress={() => this.onPressLogin()}
              title="Tiến hành giao dịch"
            />
        </ScrollView>
      </TouchableWithoutFeedback>
      </KeyboardAwareScrollView>
    );
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  onLoginPress() {

  }

}
