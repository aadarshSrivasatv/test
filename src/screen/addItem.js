import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomInput from '../components/customInput';
import CustomButton from '../components/customButton';
import DropdownInput from '../components/customDropList';
import ImgButton from '../components/customImgButton';
export default function AddItem() {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('pen');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  console.log(category);
  return (
    <SafeAreaView style={styles.body}>
      <View
        style={[
          {
            width: '80%',
            alignItems: 'center',
            // borderWidth: 2,
            backgroundColor: 'white',
            marginTop: 100,
            borderRadius: 30,
            padding: 20,
          },
          styles.shadowProp,
        ]}>
        <Text
          style={{
            fontSize: 30,
            color: 'black',
            marginBottom: 10,
            fontFamily: 'Montserrat-Bold',
          }}>
          Add Item
        </Text>
        <ImgButton />
        <CustomInput
          placeholder="Item name"
          value={name}
          setValue={setName}
          customStyle={{borderColor: '#FFB100', borderWidth: 3}}
        />
        <DropdownInput value={category} setValue={setCategory} />
        {/* <CustomInput
          placeholder="Category"
          value={category}
          setValue={setCategory}
          customStyle={{borderColor: '#FFB100', borderWidth: 3}}
        /> */}
        <CustomInput
          placeholder="Price"
          value={price}
          setValue={setPrice}
          customStyle={{borderColor: '#FFB100', borderWidth: 3}}
          type="numeric"
        />
        <CustomInput
          placeholder="Quantity"
          value={quantity}
          setValue={setQuantity}
          customStyle={{borderColor: '#FFB100', borderWidth: 3}}
          type="numeric"
        />
        <CustomButton
          title="Add"
          customStyle={{width: 100}}
          onPress={() => {
            pushData({id: 6, name: name, price: price});
            // alert("clicked");
          }}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFB100',
  },
  shadowProp: {
    shadowOffset: {width: -3, height: 4},
    shadowColor: '#171717',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 40,
  },
});
