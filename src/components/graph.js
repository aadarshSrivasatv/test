import {View, Text, Dimensions} from 'react-native';
import React from 'react';
import {LineChart} from 'react-native-chart-kit';

export default function Graph() {
  return (
    <View
      style={{
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontSize: 20,
          color: 'black',
          marginBottom: 8,
          fontFamily: 'Montserrat-Bold',
        }}>
        Sales
      </Text>
      <LineChart
        data={{
          labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'july'],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
        }}
        width={Dimensions.get('window').width / 1.1} // from react-native
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: '#e26a00',
          //   backgroundGradientFrom: '#fb8c00',
          backgroundGradientFrom: 'white',
          //   backgroundGradientTo: '#ffa726',
          backgroundGradientTo: 'white',
          decimalPlaces: 2, // optional, defaults to 2dp
          //   color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          color: (opacity = 1) => '#FFB100',
          //   labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0,0,0,${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            // stroke: '#ffa726',
            stroke: 'black',
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
}
