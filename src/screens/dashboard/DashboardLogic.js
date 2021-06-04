import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { set } from "react-native-reanimated";
import { Logout } from "../../actions/Action";
import { DATA } from "../../Contants";
import { CredentialsContext } from "../../context/AuthContext";
import { DashboardService } from "../../services/Service";

const DashboardLogic = () => {
  const { storedCredentials, setStoredCredentials } =
    useContext(CredentialsContext);
  const [billerName, setBillerName] = useState(storedCredentials.billerName);
  const [billerId, setBillerId] = useState(storedCredentials.billerID);
  const [role, setRole] = useState(storedCredentials.role);
  const [userName, setUserName] = useState(storedCredentials.userName);
  const [todayAmount, setTodayAmount] = useState(0);
  const [yesterdayAmount, setYesterdayAmount] = useState(0);
  const [monthlyAmount, setMonthlyAmount] = useState(0);
  const [cashAtHand, setcashAtHand] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [refereshing, setRefereshing] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [allBillers, setAllBillers] = useState([]);

  const onPickerChange = (itemValue) => {
    setSelectedValue(itemValue);
    callDashboardService(itemValue);
  };

  useEffect(() => {
    callDashboardService(billerId);
  }, []);

  const callDashboardService = (billerKey) => {
    console.log(billerKey);
    DashboardService(billerKey)
      .then((result) => {
        if (result.data.Status === "success") {
          setIsError(false);
          setRefereshing(false);
          setTodayAmount(result.data.TodayAmount);
          setYesterdayAmount(result.data.YesterdayAmount);
          setMonthlyAmount(result.data.MonthlyAmount);
          setcashAtHand(result.data.MonthlyCashAtHand);
          setAllBillers([...result.data.billers]);
        } else {
          setIsError(true);
          setRefereshing(false);
          setErrorMessage(result.data.Message);
        }
      })
      .catch((err) => {
        setIsError(true);
        setRefereshing(false);
        setErrorMessage(err.response.data.Message);
      });
  };

  const onRefresh = () => {
    setRefereshing(true);
    callDashboardService(billerId);
  };

  const capitalize = (str) => {
    var nameLetter = str.toLowerCase();
    return nameLetter.charAt(0).toUpperCase() + nameLetter.slice(1);
  };

  const onLogout = () => {
    AsyncStorage.removeItem("credentials")
      .then(() => {
        setStoredCredentials("");
      })
      .catch((error) => console.log(error));
  };

  return {
    onLogout,
    billerName,
    role,
    userName,
    capitalize,
    todayAmount,
    yesterdayAmount,
    monthlyAmount,
    cashAtHand,
    isError,
    errorMessage,
    onRefresh,
    refereshing,
    selectedValue,
    onPickerChange,
    allBillers,
  };
};

export default DashboardLogic;
