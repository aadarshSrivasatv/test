import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomInput from '../components/customInput';
import CustomButton from '../components/customButton';
import DropdownInput from '../components/customDropList';
import ImgButton from '../components/customImgButton';
export default function AddItem({route}) {
  const data = route.params;
  // data?data:{name:"",quantity:5,price:5}
  const [name, setName] = useState(data ? data.name : '');
  const [category, setCategory] = useState(data ? data.name : 'pen');
  const [price, setPrice] = useState(data ? data.price.toString() : 0);
  const [quantity, setQuantity] = useState(data ? data.quantity.toString() : 0);
  // console.log(data);
  return (
    <View style={styles.body}>
      <KeyboardAwareScrollView
        style={{marginLeft: Dimensions.get('window').width / 9}}>
        <View
          style={[
            {
              width: Dimensions.get('window').width / 1.3,
              alignItems: 'center',
              // borderWidth: 2,
              backgroundColor: 'white',
              marginTop: 100,
              borderRadius: 30,
              padding: 20,
            },
            styles.shadowProp,
          ]}>
          {data ? (
            <Text style={styles.txtHeading}>Update Item</Text>
          ) : (
            <Text style={styles.txtHeading}>Add Item </Text>
          )}
          <ImgButton value={data?data.image:require("../asset/cart.jpg")} />
          <CustomInput
            placeholder="Item name"
            value={name}
            setValue={setName}
            customStyle={{borderColor: '#FFB100', borderWidth: 3}}
          />
          <DropdownInput value={category} setValue={setCategory} />

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
      </KeyboardAwareScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
    //  justifyContent: 'center',
    // alignItems: 'center',
    // marginLeft:Dimensions.get('window').width/8,
    backgroundColor: '#FFB100',
  },
  shadowProp: {
    shadowOffset: {width: -3, height: 4},
    shadowColor: '#171717',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 40,
  },
  txtHeading: {
    fontSize: 30,
    color: 'black',
    marginBottom: 10,
    fontFamily: 'Montserrat-Bold',
  },
});
