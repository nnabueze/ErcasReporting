import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dashboard from "./screens/dashboard/Dashboard";
import Remittance from "./screens/remittance/Remittance";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Dashboard" component={Dashboard} />
        <Tab.Screen name="Remittance" component={Remittance} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
