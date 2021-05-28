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

const DashbordPicker = () => {
  const [selectedValue, setSelectedValue] = useState("java");
  return (
    <Picker
      mode="dialog"
      selectedValue={selectedValue}
      style={styles.picker}
      onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
    >
      <Picker.Item label="Select Biller" value="java" />
      <Picker.Item label="JavaScript" value="js" />
    </Picker>
  );
};

export default DashbordPicker;
