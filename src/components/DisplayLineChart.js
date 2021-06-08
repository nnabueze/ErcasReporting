import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

const DisplayLineChart = ({ day6, day5, day4, day3, yesterday, today }) => {
  const screenWidth = Dimensions.get("window").width;

  const data = {
    labels: ["Day6", "Day5", "Day4", "Day3", "Yesterday", "Today"],
    datasets: [
      {
        data: [day6, day5, day4, day3, yesterday, today],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
    legend: ["Last 7days progress collection"], // optional
  };

  return (
    <LineChart
      data={data}
      width={screenWidth / 1.1}
      height={200}
      chartConfig={{
        backgroundColor: "#1cc910",
        backgroundGradientFrom: "#eff3ff",
        backgroundGradientTo: "#efefef",
        decimalPlaces: 0,
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        style: {
          borderRadius: 16,
        },
      }}
      style={{
        marginVertical: 8,
        borderRadius: 16,
      }}
    />
  );
};

export default DisplayLineChart;
