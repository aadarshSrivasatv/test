import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

export default function CustomCard({
  name,
  image,
  description,
  price,
  trim = false,
}) {
  // console.log(trim);
  function trimString(string, maxLength) {
    if (string.length > maxLength) {
      return string.slice(0, maxLength) + '...';
    } else {
      return string;
    }
  }
  return (
    <View style={[styles.cardStyle, styles.shadowProp]}>
      <View
        style={{
          flex: 0.4,
          // borderWidth: 3,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
        }}>
        <Image
          style={{
            width: 100,
            height: 100,
            borderRadius: 30,
            borderColor: '#FFB100',
            borderWidth: 3,
          }}
          source={image}
        />
        <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
          {name}
          <Text> ${price}</Text>
        </Text>
      </View>
      <View
        style={[
          {
            flex: 0.7,
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
          },
          trim && {padding: 30},
        ]}>
        <Text style={{fontSize: 20, color: 'black'}}>
          {trim ? description : trimString(description, 100)}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardStyle: {
    width: '90%',
    minHeight: 150,
    backgroundColor: 'white',
    borderRadius: 20,
    margin: 20,
    flexDirection: 'row',
  },
  shadowProp: {
    shadowOffset: {width: -3, height: 4},
    shadowColor: '#171717',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 40,
  },
});
