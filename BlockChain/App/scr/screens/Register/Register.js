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
          <Text style={styles.logoText}>Đăng ký</Text>
            <TextInput placeholder="Họ và tên" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
            <TextInput placeholder="Địa chỉ" placeholderColor="#c4c3cb" style={styles.loginFormTextInput}/>
            <TextInput placeholder="Số CMND" placeholderColor="#c4c3cb" style={styles.loginFormTextInput}/>
            <TextInput placeholder="Số điện thoại" placeholderColor="#c4c3cb" style={styles.loginFormTextInput}/>
            <TextInput placeholder="Địa chỉ" placeholderColor="#c4c3cb" style={styles.loginFormTextInput}/>
            <TouchableOpacity  style={styles.regisText} 
             onPress={() => {this.props.navigation.navigate('Register')}}
            >
            <View  style ={{flexDirection: "row"}}>
						<View style={{paddingTop:10,}}>
						<Text style={styles.DoBText}> Ngày sinh: </Text>
						</View>
						<DatePicker
							style={{width: 200}}
							
							mode="date"
							placeholder="select date"
							format="YYYY-MM-DD"
							minDate="1950-05-01"
							maxDate="2019-01-01"
							confirmBtnText="Confirm"
							cancelBtnText="Cancel"
							customStyles={{
							  dateIcon: {
								position: 'absolute',
								left: 0,
								top: 4,
								marginLeft: 0
							  },
							  dateInput: {
								marginLeft: 30
							  }
							}}
							onDateChange={(date) => {this.setState({DoB: date})}}
						/>
            
					</View>
           </TouchableOpacity>
           <TextInput placeholder="Username" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
            <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true}/>
            <Button
              buttonStyle={styles.loginButton}
              onPress={() => this.onLoginPress()}
              title="Đăng ký"
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
