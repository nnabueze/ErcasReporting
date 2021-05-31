import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screens/login/Login";
import TabNavigator from "./TabNavigator";
import { AuthContext, CredentialsContext } from "../context/AuthContext";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <CredentialsContext.Consumer>
      {({ storedCredentials }) => (
        <Stack.Navigator initialRouteName="Login">
          {storedCredentials ? (
            <Stack.Screen
              name="Home"
              component={TabNavigator}
              options={{
                headerShown: false,
              }}
            />
          ) : (
            <>
              <Stack.Screen
                name="Login"
                component={Login}
                options={{
                  headerShown: false,
                }}
              />
            </>
          )}
        </Stack.Navigator>
      )}
    </CredentialsContext.Consumer>
  );
};

export default StackNavigator;
