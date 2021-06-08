import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";

const VerifyLogic = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [allBillers, SetAllBillers] = useState([]);
  const [billerName, setBillerName] = useState("");

  useEffect(() => {
    AsyncStorage.getItem("credentials")
      .then(() => {})
      .catch((error) => console.log(error));
  });
  const onPickerChange = (itemValue) => {
    setSelectedValue(itemValue);
  };

  return {
    selectedValue,
    onPickerChange,
    allBillers,
    billerName,
  };
};

export default VerifyLogic;
