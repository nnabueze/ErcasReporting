import React from "react";
import { StyleSheet, Text } from "react-native";
import NumberFormat from "react-number-format";
import { BLACK } from "../Contants";

const DisplayNumberFormat = ({ value, textStyle }) => {
  return (
    <NumberFormat
      value={value}
      displayType={"text"}
      thousandSeparator={true}
      prefix={"₦"}
      renderText={(formattedValue) => (
        <Text style={textStyle}>{formattedValue}</Text>
      )} // <--- Don't forget this!
    />
  );
};

export default DisplayNumberFormat;
