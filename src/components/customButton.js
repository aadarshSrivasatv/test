import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

export default function CustomButton({title, onPress,customStyle}) {
  return (
    <TouchableOpacity style={[styles.button, customStyle]} onPress={onPress}>
      <Text
        style={{
          color: 'white',
          fontSize: 18,
          fontFamily: 'Montserrat-Regular',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#FFB100',
    padding: 10,
    borderRadius: 30,
    width: 300,
    marginTop: 10,
  },
});
