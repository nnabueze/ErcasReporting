import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useEffect, useReducer } from "react";

export const CredentialsContext = createContext({
  storedCredentials: {},
  setStoredCredentials: () => {},
});
