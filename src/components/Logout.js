import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useContext } from "react";
import { CredentialsContext } from "../context/AuthContext";

const Logout = () => {
  const { setStoredCredentials } = useContext(CredentialsContext);

  const onLogout = () => {
    AsyncStorage.clear()
      .then(() => {
        setStoredCredentials("");
      })
      .catch((error) => console.log(error));
  };

  return { onLogout };
};

export default Logout;
