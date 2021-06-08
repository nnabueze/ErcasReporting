import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useContext, useEffect, useState } from "react";
import Logout from "../../components/Logout";

const VerifyLogic = () => {
  const { onLogout } = Logout();
  const [selectedValue, setSelectedValue] = useState("");
  const [allBillers, SetAllBillers] = useState([]);
  const [billerName, setBillerName] = useState("");

  useEffect(() => {
    AsyncStorage.getItem("dashbaord")
      .then((result) => {
        var resultObject = JSON.parse(result);
        SetAllBillers([...resultObject.billers]);
        setBillerName(resultObject.billerName);
      })
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
    onLogout,
  };
};

export default VerifyLogic;
