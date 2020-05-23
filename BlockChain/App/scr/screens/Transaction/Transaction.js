import React, { Component } from "react";
import styles from "./style";
import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, TouchableOpacity, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import DatePicker from "react-native-datepicker"
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'

const appId = "1047121222092614"

export default class Transaction extends Component {

  render() {
    return (
      <KeyboardAwareScrollView style={styles.containerView} behavior="padding">

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
          <Text style={styles.logoText}>Giao dịch</Text>
            <TextInput placeholder="Địa chỉ nhận" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
            <TextInput placeholder="Số tiền gửi" placeholderColor="#c4c3cb" style={styles.loginFormTextInput}/>
            <TextInput placeholder="Số tiền hiện có" placeholderColor="#c4c3cb" style={styles.loginFormTextInput}/>
            
            <TextInput placeholder="Nội dung giao dịch" placeholderColor="#c4c3cb" style={styles.loginFormTextInput}/>
            <Button
              buttonStyle={styles.loginButton}
              onPress={() => this.onLoginPress()}
              title="Gửi tiền"
            />
          </View>
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
