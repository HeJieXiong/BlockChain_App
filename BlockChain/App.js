import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './App/scr/screens/Home/Home';
import Login from './App/scr/screens/Login/Login';
import Register from './App/scr/screens/Register/Register';
import Transaction from './App/scr/screens/Transaction/Transaction';
import History from './App/scr/screens/History/History';
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Login')}
      />
      <Button
        title="Go to Transactions"
        onPress={() => navigation.navigate('Transaction')}
      />
      <Button
        title="Go to History"
        onPress={() => navigation.navigate('History')}
      />
    </View>
  );
}



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Transaction" component={Transaction} />
        <Stack.Screen name="History" component={History} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
