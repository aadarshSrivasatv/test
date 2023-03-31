import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import DashBoard from './dashBoard';
import Profile from './profile';
import AddItem from './addItem';
import MyStack from './stack';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        keyboardHidesTabBar: true,
      }}
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {color: 'black', fontSize: 15},
        tabBarActiveTintColor: '#FFB100',
      }}>
      <Tab.Screen
        name="Home"
        component={MyStack}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={AddItem}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="add-circle" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Dash Board"
        component={DashBoard}
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
            width: Dimensions.get('screen').width / 1.09,
            // width: Dimensions,
            // borderWidth: 2,
          },
          headerBackgroundContainerStyle: {
            //  paddingRight:10,
            backgroundColor: '#FFB100',
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="person-circle" size={30} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
