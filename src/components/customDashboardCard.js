import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function CustomDashboardCard({heading, amount}) {
  return (
    <View style={[styles.cardBody, styles.shadowProp]}>
      <Text style={styles.textStyle}>{heading}</Text>
      <Text style={{color: 'green', fontSize: 35}}>{amount}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  cardBody: {
    width: '45%',
    minHeight: 100,
    backgroundColor: 'white',
    borderRadius: 30,
    margin: 10,
    alignItems: 'center',
    padding: 12,
  },
  shadowProp: {
    shadowOffset: {width: -3, height: 4},
    shadowColor: '#171717',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 15,
  },
  textStyle: {
    fontSize: 20,
    color: 'black',
  },
});
