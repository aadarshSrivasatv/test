import {View, Text, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import CustomDashboardCard from '../components/customDashboardCard';
import {dashBoardData} from './data';
export default function DashBoard() {
  const renderItem = ({item}) => {
    return <CustomDashboardCard heading={item.heading} amount={item.amount} />;
  };
  return (
    <View style={styles.body}>
      <FlatList
        style={{
          height: '100%', //without hight width flat is not working?. doubt
          width: '100%',
          // flex:1,
          borderWidth: 2,
        }}
        // numColumns={2}
        data={dashBoardData}
        horizontal={true}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#FFB100',
    alignItems: 'center',
  },
});
