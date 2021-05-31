import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import { useContext } from "react";
import { Logout } from "../../actions/Action";
import { DATA } from "../../Contants";
import { CredentialsContext } from "../../context/AuthContext";

const DashboardLogic = () => {
  const { storedCredentials, setStoredCredentials } =
    useContext(CredentialsContext);

  const onLogout = () => {
    AsyncStorage.removeItem("credentials")
      .then(() => {
        setStoredCredentials("");
      })
      .catch((error) => console.log(error));
  };
  return { onLogout };
};

export default DashboardLogic;
