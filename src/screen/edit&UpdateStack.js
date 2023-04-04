import { View, Text } from 'react-native'
import React from 'react'

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function  editUpdateStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Notifications" component={Notifications} />
    </Stack.Navigator>
  );
}