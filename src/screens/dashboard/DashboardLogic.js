import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
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
  const [error, setError] = useState("");

  useEffect(() => {
    DashboardService(billerId)
      .then((result) => {
        if (result.data.Status === "success") {
          setTodayAmount(result.data.TodayAmount);
          setYesterdayAmount(result.data.YesterdayAmount);
          setMonthlyAmount(result.data.MonthlyAmount);
          setcashAtHand(result.data.MonthlyCashAtHand);
        } else {
          setError(result.data.Message);
        }
      })
      .catch((err) => console.log(err));
  }, []);

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
  };
};

export default DashboardLogic;
