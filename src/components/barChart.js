import {View, Text, Dimensions, StyleSheet} from 'react-native';
import React from 'react';
import {BarChart} from 'react-native-chart-kit';
const data = {
  labels: ['Pen', 'Pencil', 'Scale', 'Map', 'Eraser', 'Sharpner'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
    },
  ],
};
const chartConfig = {
  //   backgroundGradientFrom: '#1E2923',
  backgroundGradientFrom: 'white',
  backgroundGradientFromOpacity: 1,
  backgroundGradientTo: 'white',
  backgroundGradientToOpacity: 1,
  //   color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  color: (opacity = 1) => '#FFB100',
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};
export default function BChart() {
  return (
    <View style={{borderRadius: 20, marginTop: 25, alignItems: 'center'}}>
      <Text style={{fontSize: 20, color: 'black', marginBottom: 8}}>
        Daily sales
      </Text>
      <BarChart
        // style={styles.graphStyle}
        data={data}
        width={Dimensions.get('window').width / 1.1}
        height={220}
        yAxisLabel="$"
        chartConfig={chartConfig}
        verticalLabelRotation={30}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
