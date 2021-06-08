import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useContext, useState } from "react";
import { Alert } from "react-native";
import { set } from "react-native-reanimated";
import { LoginAction } from "../../actions/Action";
import { AuthContext, CredentialsContext } from "../../context/AuthContext";
import { LoginService } from "../../services/Service";

const LoginLogic = (navigation) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayAlert, setDisplayAlert] = useState(false);
  const [displaySpinner, setDisplaySpinner] = useState(false);
  const { storedCredentials, setStoredCredentials } =
    useContext(CredentialsContext);
  const [displayAlertMessage, setDisplayAlertMessage] = useState("");

  const simpleAlert = (message) => {
    return Alert.alert(
      "Oops!",
      message,
      [{ text: "Ok", onPress: () => onAlertDismiss() }],
      { cancelable: false }
    );
  };

  const onAlertDismiss = () => {
    setDisplayAlert(false);
    setDisplayAlertMessage("");
  };

  const onLoginClick = async (email, password) => {
    setDisplaySpinner(true);
    try {
      var response = await LoginService({ email, password });
      if (response.status === "failed") {
        setDisplayAlertMessage(response.message);
        setDisplaySpinner(false);
        setDisplayAlert(true);
      } else {
        setDisplaySpinner(false);
        persistLogin({ ...response });
      }
    } catch (e) {
      setDisplayAlertMessage(e);
      setDisplaySpinner(false);
      setDisplayAlert(true);
    }
  };

  const persistLogin = (credentials) => {
    AsyncStorage.setItem("credentials", JSON.stringify(credentials))
      .then(() => {
        setStoredCredentials(credentials);
      })
      .catch((error) => {
        console.log(error);
        setDisplayAlertMessage("Persis login failed!");
        setDisplayAlert(true);
      });
  };
  return {
    onLoginClick,
    email,
    setEmail,
    password,
    setPassword,
    displayAlert,
    displaySpinner,
    displayAlertMessage,
    simpleAlert,
  };
};

export default LoginLogic;
