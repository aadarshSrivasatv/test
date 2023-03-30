import {View, Text, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import CustomDashboardCard from '../components/customDashboardCard';
import {dashBoardData} from './data';
import Graph from '../components/graph';
import BChart from '../components/barChart';
import {ScrollView} from 'react-native-gesture-handler';
export default function DashBoard() {
  const renderItem = ({item}) => {
    return <CustomDashboardCard heading={item.heading} amount={item.amount} />;
  };
  return (
    <View style={styles.body}>
      <View
        style={{
          height: 280,
          marginTop: 20,
        }}>
        <FlatList
          numColumns={2}
          data={dashBoardData}
          // horizontal={true}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
      <ScrollView>
        <View
          style={{
            alignItems: 'center',
            // borderWidth: 2,
            // alignContent: 'center',
          }}>
          <Graph />
          <BChart />
        </View>
      </ScrollView>
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
