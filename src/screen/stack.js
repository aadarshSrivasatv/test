import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './home';
import Edit from './edit';
const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="itemList" component={Home} />
      <Stack.Screen
        name="Edit"
        component={Edit}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="reorder-four" size={size} color={color} />
          ),
          headerShown: true,
          headerStyle: {
            height: 60,
            // borderBottomLeftRadius:30,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          },
          headerTitleStyle: {
            // alignItems: 'center',
            color: '#FFB100',
            textAlign: 'center',
            width: Dimensions.get('screen').width / 1.6,
            fontFamily: 'Montserrat-Regular',
            // width: Dimensions,
            // borderWidth: 2,
          },
          headerBackgroundContainerStyle: {
            //  paddingRight:10,
            backgroundColor: '#FFB100',
          },
        }}
      />
      
    </Stack.Navigator>
  );
}


