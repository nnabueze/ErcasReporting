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
  const [displaySpinner, setDisplaySpinner] = useState(false);

  useEffect(() => {
    callDashboardService(billerId);
  }, []);

  const onDashboardMenuClick = () => {
    setIsError(true);
    setErrorMessage("Not active");
  };

  const onPickerChange = (itemValue) => {
    setIsError(false);
    if (itemValue !== "") {
      setSelectedValue(itemValue);
      setBillerId(itemValue);
      callDashboardService(itemValue);
    }
  };

  const callDashboardService = (billerKey) => {
    setIsError(false);
    setDisplaySpinner(true);
    DashboardService(billerKey)
      .then((result) => {
        if (result.data.Status === "success") {
          setIsError(false);
          setRefereshing(false);
          setDisplaySpinner(false);
          setBillerName(result.data.BillerName);
          setTodayAmount(result.data.TodayAmount);
          setYesterdayAmount(result.data.YesterdayAmount);
          setMonthlyAmount(result.data.MonthlyAmount);
          setcashAtHand(result.data.MonthlyCashAtHand);
          setAllBillers([...result.data.billers]);
        } else {
          setRefereshing(false);
          setDisplaySpinner(false);
          setErrorMessage(result.data.message);
          setIsError(true);
        }
      })
      .catch((err) => {
        setRefereshing(false);
        setDisplaySpinner(false);
        setErrorMessage(err.response.data.message);
        setIsError(true);
      });
  };

  const onRefresh = () => {
    setRefereshing(true);
    setDisplaySpinner(false);
    setIsError(false);
    DashboardService(billerId)
      .then((result) => {
        if (result.data.Status === "success") {
          setIsError(false);
          setRefereshing(false);
          setBillerName(result.data.BillerName);
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
    displaySpinner,
    onDashboardMenuClick,
  };
};

export default DashboardLogic;
