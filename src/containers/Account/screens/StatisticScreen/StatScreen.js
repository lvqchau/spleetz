import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, Dimensions } from 'react-native'
import { ScrollView, RefreshControl } from 'react-native-gesture-handler';
import { LineChart, PieChart, BarChart } from "react-native-chart-kit";

import HeaderNavigator from '../../components/HeaderNavigator';
import COLORS from '../../../../assets/colors';
import { chartConfig, pieData, lineData, barData } from './StatMockup';

const { width, height } = Dimensions.get('window')

class StatScreen extends React.Component {

  renderHeadings = (title, amount) => {
    return (
      <View style={{
        justifyContent: 'space-between',
        alignItems: 'baseline',
        flexDirection: 'row',
        marginBottom: 15
      }}>
        <Text style={styles.statHeadings}>{title}</Text>
        <Text style={styles.statAmount}>{amount}</Text>
      </View>
    )
  }

  render() {
    const { navigation } = this.props
    return (
      <SafeAreaView style={styles.statContainer}>
        <HeaderNavigator navigation={navigation} name="Statistics" />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.statBox}>
            {this.renderHeadings("Money returned", "20000"+" VND")}
            <View style={styles.statNumbers}>
              <LineChart
                data={lineData}
                width={width - 25 * 2}
                height={220}
                withInnerLines={false}
                yAxisSuffix="k"
                chartConfig={chartConfig}
                bezier
                style={{
                  borderRadius: 10
                }}
              />
            </View>
          </View>
          <View style={styles.statBox}>
            {this.renderHeadings("Money used", "40000"+" VND")}
            <View style={styles.statNumbers}>
              <LineChart
                data={lineData}
                width={width - 25 * 2}
                height={220}
                yAxisSuffix="k"
                chartConfig={chartConfig}
                bezier
                withInnerLines={false}
                style={{
                  borderRadius: 10
                }}
              />
            </View>
          </View>
          <View style={styles.statBox}>
            {this.renderHeadings("Category pie", "")}
            <View style={styles.statNumbers}>
              <PieChart
                data={pieData}
                width={width - 25 * 2}
                height={220}
                chartConfig={chartConfig}
                accessor="population"
                backgroundColor="transparent"
                paddingLeft="15"
                absolute
              />
            </View>
          </View>
          <View style={styles.statBox}>
            {this.renderHeadings("Bills", "20")}
            <View style={styles.statNumbers}>
              <BarChart
                data={barData}
                width={width - 25 * 2}
                height={220}
                withInnerLines={false}
                style={{
                  borderRadius: 10
                }}
                fromZero="true"
                chartConfig={chartConfig}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  statContainer: {
    flex: 1
  },
  statBox: {
    marginBottom: 25
  },
  statHeadings: {
    paddingLeft: 25,
    fontWeight: '600',
    color: COLORS.aqua,
  },
  statAmount: {
    paddingRight: 25,
    fontWeight: '500',
    fontSize: 22,
    color: COLORS.salmon
  },
  statNumbers: {
    
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    shadowColor: "#000",
    marginHorizontal: 25,
    borderRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  }
})

export default StatScreen;