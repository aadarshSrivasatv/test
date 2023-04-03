import {View, Text, Button, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import CustomButton from '../components/customButton';

export default function ImgButton({navigation}) {
  // const i = '../asset/logo-red.png';
  const [img, setimg] = useState(null);
  // console.log(img);

  // console.log(i);

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
      // if (response) {
       
      //   console.log(response);
      // } else {
      //   console.log('love from bug');
      // }
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
            source={require('../asset/cart.jpg')}
          />
        )}
      </View>
    </TouchableOpacity>
  );
}
// import React, {useState} from 'react';
// import {View, Text, Image, Button} from 'react-native';
// import { ImagePicker ,showImagePicker} from 'react-native-image-picker';

// const ScreenA = () => {
//   const [imageUri, setImageUri] = useState(null);

//   const handleImagePicker = () => {
//     showImagePicker({}, response => {
//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//       } else if (response.error) {
//         console.log('ImagePicker Error: ', response.error);
//       } else {
//         setImageUri(response.uri);
//       }
//     });
//   };

//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       {imageUri ? (
//         <Image source={{uri: imageUri}} style={{width: 200, height: 200}} />
//       ) : (
//         <Text>No image selected</Text>
//       )}
//       <Button title="Select Image" onPress={handleImagePicker} />
//     </View>
//   );
// };

// export default ScreenA;

{
  /* <CustomButton title="Upload Image" onPress={handleChoosePhoto
      } />  */
}
{
  /* <Button title="Upload Image" onPress={handleChoosePhoto} /> */
}
