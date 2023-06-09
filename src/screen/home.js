import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Data, {pushData} from './data';
import CustomCard from '../components/customCard';
import CustomInput from '../components/customInput';

export default function Home({navigation}) {
  // pushData();
  const [searchData, setSearchData] = useState('');

  const result = Data.find(
    item => item.name === searchData.replace(/\s/g, '').toLowerCase(), //special case handled
  );
  result ? Keyboard.dismiss() : null;

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => {
          navigation.navigate('Edit', item);
        }}>
        <CustomCard
          name={item.name}
          price={item.price}
          description={item.description}
          image={item.image}
          // trim={true}
        />
      </TouchableOpacity>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <KeyboardAvoidingView
        style={{
          flex: result ? 0.6 : 0.1,
          backgroundColor: 'white',
        }}>
        <View style={{marginLeft: 12, marginTop: 4}}>
          <CustomInput
            placeholder="search item"
            value={searchData}
            setValue={setSearchData}
          />
        </View>

        {result ? (
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => {
              navigation.navigate('Edit', result);
            }}>
            <CustomCard
              name={result.name}
              price={result.price}
              description={result.description}
              image={result.image}
              // trim={true}
            />
          </TouchableOpacity>
        ) : null}
      </KeyboardAvoidingView>
      <View
        style={{
          flex: 0.9,
          backgroundColor: '#FFB100',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          alignItems: 'center',
        }}>
        <FlatList
          style={{
            height: '100%', //without hight width flat is not working?. doubt
            width: '100%',
            // flex:1,
            // borderWidth: 2,
          }}
          data={Data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardStyle: {
    width: '90%',
    height: 150,
    backgroundColor: 'white',
    borderRadius: 20,
    marginTop: 20,
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
