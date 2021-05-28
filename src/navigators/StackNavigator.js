import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screens/login/Login";
import TabNavigator from "./TabNavigator";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Home" component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
