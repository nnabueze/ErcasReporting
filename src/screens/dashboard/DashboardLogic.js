import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import Logout from "../../components/Logout";
import { CredentialsContext } from "../../context/AuthContext";
import { DashboardService } from "../../services/Service";

const DashboardLogic = () => {
  const { storedCredentials, setStoredCredentials } =
    useContext(CredentialsContext);
  const { onLogout } = Logout();
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

  const [today, setToday] = useState(0);
  const [yesterday, setYesterday] = useState(0);
  const [day3, setDay3] = useState(0);
  const [day4, setDay4] = useState(0);
  const [day5, setDay5] = useState(0);
  const [day6, setDay6] = useState(0);

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
      var dashboard = {
        billerName: billerName,
        billers: allBillers,
      };
      persistDashboard(dashboard);
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
          setToday(result.data.Report.DayOne);
          setYesterday(result.data.Report.DayTwo);
          setDay3(result.data.Report.DayThree);
          setDay4(result.data.Report.DayFour);
          setDay5(result.data.Report.DayFive);
          setDay6(result.data.Report.DaySix);
          persistDashboard(
            [...result.data.billers],
            result.data.BillerName,
            billerKey
          );
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
          setToday(result.data.Report.DayOne);
          setYesterday(result.data.Report.DayTwo);
          setDay3(result.data.Report.DayThree);
          setDay4(result.data.Report.DayFour);
          setDay5(result.data.Report.DayFive);
          setDay6(result.data.Report.DaySix);
          persistDashboard(
            [...result.data.billers],
            result.data.BillerName,
            billerId
          );
        } else {
          setErrorMessage(result.data.message);
          setIsError(true);
          setRefereshing(false);
        }
      })
      .catch((err) => {
        setErrorMessage(err.response.data.message);
        setIsError(true);
        setRefereshing(false);
      });
  };

  const capitalize = (str) => {
    var nameLetter = str.toLowerCase();
    return nameLetter.charAt(0).toUpperCase() + nameLetter.slice(1);
  };

  const persistDashboard = (billers, billerName, billerId) => {
    const details = {
      billers: billers,
      billerName: billerName,
      billerId,
      billerId,
    };
    AsyncStorage.setItem("dashbaord", JSON.stringify(details))
      .then(() => {})
      .catch((error) => {
        setErrorMessage("Persis dashboard details failed");
        setIsError(true);
      });
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
    day3,
    day4,
    day5,
    day6,
    today,
    yesterday,
  };
};

export default DashboardLogic;
