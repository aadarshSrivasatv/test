import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomCard from '../components/customCard';
import { pushData,popData } from './data';
export default function Edit({navigation,route}) {
  const data = route.params;
  return (
    <View style={{backgroundColor: '#FFB100', flex: 1, alignItems: 'center'}}>
      <View style={{marginTop: 50}}>
        <CustomCard
          name={data.name}
          image={data.image}
          description={data.description}
          price={data.price}
          trim={true}
        />
      </View>

      <View style={{width: '80%',flexDirection:'row',justifyContent:"space-around"}}>
        <Icon
          name="trash"
          size={50}
          color="white"
          onPress={() => {
            alert('clicked');
          }}
        />
        <Icon
          name="create"
          size={50}
          color="white"
          onPress={() => {
            alert("edit clicked");
          }}
        />
      </View>
    </View>
  );
}
