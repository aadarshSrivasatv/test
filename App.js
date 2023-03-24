import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
import SignUp from './src/screen/sign up';
import ScreenA from './src/screen/screenA';
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}  >
        <Stack.Screen name="signUp" component={SignUp} />
        <Stack.Screen name="test" component={ScreenA} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({});
export default App;
