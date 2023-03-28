import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';

export default function CustomInput({
  placeholder,
  value,
  setValue,
  secure,
  type,
  length,
}) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={setValue}
      secureTextEntry={secure}
      keyboardType={type}
      maxLength={length}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#FFB100',
    width: '90%',
    textAlign: 'center',
    borderRadius: 12,
  },
});
