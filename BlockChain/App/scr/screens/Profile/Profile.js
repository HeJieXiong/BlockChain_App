import React, { Component } from "react";
import styles from "./style";
import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, TouchableOpacity, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'
import { AsyncStorage } from "react-native"
const appId = "1047121222092614"
import Config from "./../../config";
export default class Login extends Component {

  render() {
    return (
      <KeyboardAwareScrollView style={styles.containerView} behavior="padding">

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
          <Text style={styles.logoText}>Thông tin cá nhân</Text>
          <View style={styles.detailFormView}>
            <Text style={styles.detailText}>Họ và tên:</Text> 
            <TextInput style={styles.loginFormTextInput} editable = {false} value={this.state.hoVaTen} />
          </View>  
          <View style={styles.detailFormView}>
            <Text style={styles.detailText}>Địa chỉ:</Text> 
            <TextInput style={styles.loginFormTextInput} editable = {false} value={this.state.diaChi} />
          </View>  
          <View style={styles.detailFormView}>
            <Text style={styles.detailText}>Ngày sinh:</Text> 
            <TextInput style={styles.loginFormTextInput} editable = {false} value={this.state.ngaysinh} />
          </View>  
          <View style={styles.detailFormView}>
            <Text style={styles.detailText}>Email:</Text> 
            <TextInput style={styles.loginFormTextInput} editable = {false} value={this.state.email} />
          </View>  
          <View style={styles.detailFormView}>
            <Text style={styles.detailText}>Số điện thoại:</Text> 
            <TextInput style={styles.loginFormTextInput} editable = {false} value={this.state.soDienThoai} />
          </View>
          <View style={styles.detailFormView}>
            <Text style={styles.detailText}>Địa chỉ ví:</Text> 
            <TextInput style={styles.loginFormTextInput} editable = {false} value={this.state.value} />
          </View>
          <View style={styles.detailFormView}>
            <Text style={styles.detailText}>Số tiền còn lại trong ví:</Text> 
            <TextInput style={styles.loginFormTextInput} editable = {false} />
          </View>     
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
      </KeyboardAwareScrollView>
    );
  }
  constructor(props) {
		super(props);
		this.state = {
			
			user: [],
		};
	}
  componentDidMount(){
		AsyncStorage.getItem('USER_ID', (err, result)=> {
			if(JSON.parse(result) != null){
        this.setState({user_id: JSON.parse(result)});
      };
      let url = Config.SERVER_URL + "/api/" + this.state.user_id;
      console.log(url);
     
	    fetch(url)
		.then((response) => response.json())
		.then((responseJson) => {
			this.setState({
				
        user: responseJson.data,
			}, function(){
        console.log(this.state.user.user[0]);
        this.setState({ hoVaTen: this.state.user.user[0]['hoVaTen'] });
        this.setState({ diaChi: this.state.user.user[0]['diaChi'] });
        this.setState({ ngaysinh: this.state.user.user[0]['ngaysinh'] });
        this.setState({ email: this.state.user.user[0]['email'] });
        this.setState({ soDienThoai: this.state.user.user[0]['soDienThoai'] });
			});
    });
    });
	}

  componentWillUnmount() {
  }

  onLoginPress() {

  }

}
