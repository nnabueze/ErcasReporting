import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./src/navigators/TabNavigator";
import * as Font from "expo-font";

export default function App() {
  useEffect(() => {
    (async () =>
      await Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      }))();
  }, []);

  return (
    <NavigationContainer>
      <TabNavigator></TabNavigator>
    </NavigationContainer>
  );
}
