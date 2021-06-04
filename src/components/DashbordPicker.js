import React, { useState } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  View,
  Picker,
  Form,
} from "native-base";

import styles from "../screens/dashboard/DashboardSheet";

const DashbordPicker = ({ onPickerChange, selectedValue, billers }) => {
  return (
    <Picker
      mode="dialog"
      selectedValue={selectedValue}
      style={styles.picker}
      onValueChange={(itemValue, itemIndex) => onPickerChange(itemValue)}
    >
      <Picker.Item label="Select Biller" value="" />
      {billers.map((item, index) => (
        <Picker.Item key={index} label={item.IGR_Name} value={item.IGR_Code} />
      ))}
    </Picker>
  );
};

export default DashbordPicker;
