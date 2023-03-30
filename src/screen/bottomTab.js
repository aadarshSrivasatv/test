import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
// import Icon from 'react-native-vector-icons/FontAwesome';r
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './home';
import DashBoard from './dashBoard';
import Profile from './profile';
import AddItem from './addItem';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {color: 'black', fontSize: 15},
        tabBarActiveTintColor: '#FFB100',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
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
