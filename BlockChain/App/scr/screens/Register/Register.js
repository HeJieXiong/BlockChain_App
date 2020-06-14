import React, { Component } from "react";
import styles from "./style";
import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, TouchableOpacity, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import DatePicker from "react-native-datepicker"
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'
import { AsyncStorage } from "react-native"
import {Picker} from '@react-native-community/picker';
import Config from "./../../config"
const appId = "1047121222092614"

export default class Login extends Component {
  constructor(props) {
		super(props);
		this.state = {
		  titleText: "Đăng ký",
		  UserText: 'Tên tài khoản',
		  PasswordText: 'Mật khẩu',
		  RePasswordText: 'Nhập lại mật khẩu',
		  UserNameText: 'Họ và tên',
		  DoBText:'Ngày sinh',
		  SexText:'Giới tính',
		  PhoneText:'Số điện thoại',
		  EmailText:'Email',
		  AddressText:'Địa chỉ',
		  TownText:'Thành phố',
		  TownshipText:'Quận',
		  EmailValdate:true,
		  RePasswordValdate:true,
		  gioitinh:'Nam',
		  date:'',	
		}
		
  };
  onPressRegister= () => {
		var params= {
			userName: this.state.username,
            password: this.state.password,
			hoVaTen: this.state.hoVaTen,	
			soDienThoai:  this.state.phone,
			gioiTinh: this.state.gioiTinh,
			email:this.state.email,
			diaChi: this.state.diaChi,
			keyAdress: '46465487',
		}
		console.log(params);
		 let url = Config.SERVER_URL + "/api/register";
		 console.log(url);
			fetch(url, {
			  method: 'POST',
			  headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			  },
			  body: JSON.stringify(params),
			}) .then((response) => {
				console.log(response);
				return response.json()
			})
		
			.then((responseJson) => {
				alert(JSON.stringify(responseJson));
				if(JSON.stringify(responseJson.status==200)||JSON.stringify(responseJson.status==401)){
					AsyncStorage.setItem('USER_ID', JSON.stringify(responseJson.id));
					AsyncStorage.setItem('USER_TOKEN_', JSON.stringify(responseJson.token));	
					alert('Đăng kí thành công');
				}
				else{
					alert(JSON.stringify(responseJson.errors));
				}
			})
			 .catch((error) => {
			  console.error(error);
			});
	 }
  render() {
    return (
      <KeyboardAwareScrollView style={styles.containerView} behavior="padding">

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
          <Text style={styles.logoText}>Đăng ký</Text>
            <TextInput placeholder="Họ và tên" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} onChangeText={(text) => this.setState({hoVaTen: text})} />
			<TextInput placeholder="Email" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} onChangeText={(text) => this.setState({email: text})}/>
            <TextInput placeholder="Địa chỉ" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} onChangeText={(text) => this.setState({diaChi: text})}/>
            <TextInput placeholder="Số CMND" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} onChangeText={(text) => this.setState({identitycard: text})}/>
            <TextInput placeholder="Số điện thoại" placeholderColor="#c4c3cb" keyboardType='numeric' style={styles.loginFormTextInput} onChangeText={(text) => this.setState({phone: text})}/>
			<Picker
					  selectedValue={this.state.gioiTinh}
					  style={styles.UserText}
					  onValueChange={(itemValue, itemIndex) => this.setState({gioiTinh: itemValue})}>
					  <Picker.Item label="Nam" value="Nam" />
					  <Picker.Item label="Nữ" value="Nữ" />
					  <Picker.Item label="Khác" value="Khác" />
					</Picker>
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
           <TextInput placeholder="Username" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} onChangeText={(text) => this.setState({username: text})}/>
            <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true} onChangeText={(text) => this.setState({password: text})}/>
            <Button
              buttonStyle={styles.loginButton}
              onPress={this.onPressRegister}
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
