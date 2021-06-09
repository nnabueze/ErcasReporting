import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useContext, useEffect, useState } from "react";
import Logout from "../../components/Logout";
import {
  ClearRemittanceService,
  VerifyRemittanceService,
} from "../../services/Service";

const VerifyLogic = () => {
  const { onLogout } = Logout();
  const [selectedValue, setSelectedValue] = useState("");
  const [allBillers, SetAllBillers] = useState([]);
  const [billerName, setBillerName] = useState("");
  const [selectedBillerId, setSelectedBillerId] = useState("");
  const [isAmin, setIsAdmin] = useState(false);
  const [role, setRole] = useState("");
  const [isContent, setIsContent] = useState(false);
  const [isPending, setIsPending] = useState(true);
  const [remittanceKey, setRemittanceKey] = useState("");
  const [displaySpinner, setDisplaySpinner] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(
    "No record found on the system"
  );

  const [amount, setAmount] = useState("");
  const [dateApproved, setDateApproved] = useState("");
  const [dateGenerated, setDateGenerated] = useState("");
  const [handlerName, setHandlerName] = useState("");
  const [remittanceId, setRemittanceId] = useState("");

  useEffect(() => {
    AsyncStorage.getItem("dashbaord")
      .then((result) => {
        var resultObject = JSON.parse(result);
        SetAllBillers([...resultObject.billers]);
        setBillerName(resultObject.billerName);
        setRole(resultObject.role);
        if (resultObject.role !== "" && resultObject.role === "SuperAdmin") {
          setIsAdmin(true);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  const verifyRemittance = (billerId) => {
    setIsError(false);
    setDisplaySpinner(true);
    setIsContent(false);
    setIsPending(true);
    VerifyRemittanceService(billerId, remittanceKey)
      .then((result) => {
        if (result.data.Status === "Success") {
          setIsError(false);
          setDisplaySpinner(false);
          setIsContent(true);
          if (result.data.IsPending === true) {
            setIsPending(false);
          }
          setAmount(result.data.Amount);
          setDateApproved(result.data.DateApproved);
          setDateGenerated(result.data.DateGenerated);
          setHandlerName(result.data.HandlerName);
          setRemittanceId(result.data.RemittanceKey);
        } else {
          setErrorMessage(result.data.Message);
          setDisplaySpinner(false);
          setIsError(true);
          setIsContent(false);
        }
      })
      .catch((err) => {
        setErrorMessage(err.response.data.message);
        setDisplaySpinner(false);
        setIsError(true);
        setIsContent(false);
      });
  };

  const onBackClick = () => {
    setIsContent(false);
    setErrorMessage("No record found on the system");
    setIsError(false);
  };

  const onClearClick = () => {
    clearRemittance();
  };

  const onPickerChange = (itemValue) => {
    setIsError(false);
    setIsContent(false);
    setIsPending(true);
    if (itemValue !== "") {
      setSelectedBillerId(itemValue);
      setSelectedValue(itemValue);
      verifyRemittance(itemValue);
    }
  };

  const clearRemittance = () => {
    setDisplaySpinner(true);
    ClearRemittanceService(selectedBillerId, remittanceKey)
      .then((result) => {
        setIsContent(false);
        setDisplaySpinner(false);
        setErrorMessage(result.data.Message);
        setIsError(true);
        console.log(result.data.Message);
      })
      .catch((err) => {
        setIsContent(false);
        setDisplaySpinner(false);
        setErrorMessage(err.response.data.message);
        setIsError(true);
      });
  };

  return {
    selectedValue,
    onPickerChange,
    allBillers,
    billerName,
    onLogout,
    isAmin,
    isContent,
    isPending,
    setRemittanceKey,
    isError,
    displaySpinner,
    errorMessage,
    amount,
    dateApproved,
    dateGenerated,
    remittanceId,
    handlerName,
    onBackClick,
    onClearClick,
  };
};

export default VerifyLogic;
