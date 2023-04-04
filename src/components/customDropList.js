import React, {useState} from 'react';
import {View} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const DropdownInput = ({value, setValue}) => {
  //   const [selectedValue, setSelectedValue] = useState('java');

  return (
    <View
      style={{
        borderWidth: 3,
        width: '90%',
        borderColor: '#FFB100',
        borderRadius: 12,
        margin: 12,
        justifyContent: 'center',
        paddingLeft: 15,
      }}>
      <Picker
        selectedValue={value}
        onValueChange={setValue}
        style={{
          color: 'black',
          height: 35,
          width: '90%',
        }}>
        <Picker.Item label="Pen" value="pen" />
        <Picker.Item label="Pencil" value="pencil" />
        <Picker.Item label="Rubber" value="rubber" />
        <Picker.Item label="Scale" value="scale" />
        <Picker.Item label="Sharpner" value="sharpner" />
      </Picker>
    </View>
  );
};

export default DropdownInput;
