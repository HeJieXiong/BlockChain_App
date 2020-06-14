import React, { Component } from "react";
import styles from "./style";
import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, TouchableOpacity, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import DatePicker from "react-native-datepicker"
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'

const appId = "1047121222092614"

export default class Login extends Component {

  render() {
    return (
      <KeyboardAwareScrollView style={styles.containerView} behavior="padding">

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
          <Text style={styles.logoText}>Chi tiết giao dịch</Text>
          <View style={styles.detailFormView}>
            <Text style={styles.detailText}>Họ tên người nhận:</Text> 
            <TextInput style={styles.loginFormTextInput} editable = {false} />
          </View>  
          <View style={styles.detailFormView}>
            <Text style={styles.detailText}>Địa chỉ nhận:</Text> 
            <TextInput style={styles.loginFormTextInput} editable = {false} />
          </View>  
          <View style={styles.detailFormView}>
            <Text style={styles.detailText}>Thời gian:</Text> 
            <TextInput style={styles.loginFormTextInput} editable = {false} />
          </View>  
          <View style={styles.detailFormView}>
            <Text style={styles.detailText}>Số tiền:</Text> 
            <TextInput style={styles.loginFormTextInput} editable = {false} />
          </View>  
          <View style={styles.detailFormView}>
            <Text style={styles.detailText}>Nội dung:</Text> 
            <TextInput style={styles.loginFormTextInput} editable = {false} />
          </View>
          <View style={styles.detailFormView}>
            <Text style={styles.detailText}>Trạng thái:</Text> 
            <TextInput style={styles.loginFormTextInput} editable = {false} />
          </View>          
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
