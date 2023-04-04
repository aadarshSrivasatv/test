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
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  //   color: (opacity = 10) => `rgba(0,15,15, ${opacity})`,
  color: (opacity = 1) => '#FFB100',
  labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
  style: {
    borderRadius: 16,
  },
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,

  useShadowColorFromDataset: false, // optional
};
export default function BChart() {
  return (
    <View style={{marginTop: 25, alignItems: 'center'}}>
      <Text style={{fontSize: 20, color: 'black', marginBottom: 8 , fontFamily: 'Montserrat-Bold',}}>
        Daily sales
      </Text>
      <View>
        <BarChart
          // style={styles.graphStyle}
          data={data}
          width={Dimensions.get('window').width / 1.1}
          height={220}
          yAxisLabel="$"
          chartConfig={chartConfig}
          verticalLabelRotation={20}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
