import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useContext, useState } from "react";
import { LoginAction } from "../../actions/Action";
import { AuthContext, CredentialsContext } from "../../context/AuthContext";
import { LoginService } from "../../services/Service";

const LoginLogic = (navigation) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { storedCredentials, setStoredCredentials } =
    useContext(CredentialsContext);

  const onLoginClick = async (email, password) => {
    //navigation.navigate("Home");
    try {
      var response = await LoginService({ email, password });
      //console.log(response);
      persistLogin({ ...response });
      //navigation.navigate("Home");
    } catch (e) {
      console.log(e);
    }
  };

  const persistLogin = (credentials) => {
    AsyncStorage.setItem("credentials", JSON.stringify(credentials))
      .then(() => {
        //display success message to user
        setStoredCredentials(credentials);
      })
      .catch((error) => {
        console.log(error);
        //display error to user
      });
  };
  return { onLoginClick, email, setEmail, password, setPassword };
};

export default LoginLogic;
