import {View, Text, Button} from 'react-native';
import React from 'react';

export default function ScreenA({navigation}) {
  const onPress = () => {
    navigation.navigate('signUp');
  };
  return (
    <View style={{backgroundColor: 'red'}}>
      <Text>screenA</Text>
      <Button title="move" onPress={onPress} />
    </View>
  );
}
