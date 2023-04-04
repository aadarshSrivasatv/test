import {View, Text, Button, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import CustomButton from '../components/customButton';
export default function ImgButton({navigation, value}) {
  // const i = '../asset/logo-red.png';
  const [img, setimg] = useState(null);

  const handleChoosePhoto = () => {
    console.log('clicked');
    const options = {
      noData: true,
      mediaType: 'photo',
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        setimg(response.assets[0].uri);
      }
    });
  };
  return (
    <TouchableOpacity onPress={handleChoosePhoto}>
      <View
        style={{
          alignItems: 'center',
          borderRadius: 100,
        }}>
        {img ? (
          <Image
            source={{uri: img}}
            style={{width: 100, height: 100, margin: 15, borderRadius: 100}}
          />
        ) : (
          <Image
            style={{width: 100, height: 100, margin: 15, borderRadius: 100}}
            source={value}
          />
        )}
      </View>
    </TouchableOpacity>
  );
}
