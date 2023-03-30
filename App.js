import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CustomInput from './src/components/customInput';
const Stack = createStackNavigator();
import SignUp from './src/screen/signUp';
// import ScreenA from './src/screen/screenA';
import SignIn from './src/screen/signIn';
import ForgetPassword from './src/screen/forgetPassword';
import ResetPassword from './src/screen/resetPassword';
import AddItem from './src/screen/addItem';
import DropdownInput from './src/components/customDropList';
import Home from './src/screen/bottomTab';
import BottomTab from './src/screen/bottomTab';
const App = () => {
  const [Email, setEmail] = useState('');
  console.log(Email);
  return (
    <NavigationContainer>
      {/* <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="signUp" component={SignUp} />
        <Stack.Screen name="signIn" component={SignIn} />
        <Stack.Screen name="forgetPassword" component={ForgetPassword} />
        <Stack.Screen name="resetPassword" component={ResetPassword} />
        <Stack.Screen name="home" component={AddItem} />
      </Stack.Navigator> */}
      <BottomTab />
      {/* <AddItem />  */}
    </NavigationContainer>
    /* <ScreenA /> */
    // <SignIn />
  );
};
const styles = StyleSheet.create({});
export default App;
