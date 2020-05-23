import { LoginScreen } from './../screens/LoginScreen';
import { RegisterScreen } from './../screens/Register/Register';
import { HomeScreen } from './../screens/Home/Home';
import { createBottomTabNavigator, createStackNavigator, createAppContainer,StackNavigator } from "react-navigation";
import Icon from 'react-native-vector-icons/FontAwesome';

export const HomeScreen = StackNavigator ({
  Home: {
    screens: HomeScreen
  },
  Register: {
    screens: RegisterScreen
  },
})

