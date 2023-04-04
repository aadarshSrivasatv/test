import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';

export default function CustomInput({
  placeholder,
  value,
  setValue,
  secure = false,
  type = 'default',
  length,
  customStyle,
}) {
  return (
    <TextInput
      style={[styles.input, customStyle]}
      placeholder={placeholder}
      value={value}
      onChangeText={setValue}
      secureTextEntry={secure}
      keyboardType={type}
      maxLength={length}
      placeholderTextColor="black"
      // onFocus={()=>{console.log("hi")}}
      // inlineImageLeft="logo-red"
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 3,
    paddingLeft: 30,
    borderColor: '#FFB100',
    width: '90%',
    // textAlign: 'center',
    borderRadius: 12,
    color: 'black',
    fontFamily: 'Montserrat-Regular',
  },
});
