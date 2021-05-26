import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as Font from "expo-font";

import Dashboard from "../screens/dashboard/Dashboard";
import Remittance from "../screens/remittance/Remittance";
import ScreenStyle from "../components/styles/ScreenStyle";
import {
  PRIMARYCOLORLIGHT,
  SECONDARYCOLOR,
  TARBARICONBACKGROUND,
  TARBARTINITCOLOR,
  WHITE,
} from "../Contants";

const Tab = createBottomTabNavigator();

const CustomTabBarButtom = ({ children, onPress }) => (
  <TouchableOpacity style={styles.customOpacityButtom} onPress={onPress}>
    <View style={styles.customButtom}>{children}</View>
  </TouchableOpacity>
);

const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: styles.tarbarOptions,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Dashboard}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tarbarIcon}>
              <Image
                source={require(`../../assets/img/home.png`)}
                resizeMode="contain"
                style={styles.tarbarButtom}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Remit"
        component={Remittance}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require(`../../assets/img/play.png`)}
              resizeMode="contain"
              style={styles.customButtomImage}
            />
          ),
          tabBarButton: (props) => <CustomTabBarButtom {...props} />,
        }}
      />
      <Tab.Screen
        name="Collect"
        component={Remittance}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tarbarIcon}>
              <Image
                source={require(`../../assets/img/payment.png`)}
                resizeMode="contain"
                style={styles.tarbarButtom}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  customButtom: {
    width: 55,
    height: 55,
    borderRadius: 27,
    backgroundColor: PRIMARYCOLORLIGHT,
    ...ScreenStyle.buttomShadow,
  },
  customOpacityButtom: {
    top: -25,
    alignContent: "center",
    justifyContent: "center",
  },
  customButtomImage: {
    width: 45,
    height: 45,
    tintColor: WHITE,
  },
  tarbarButtom: {
    width: 25,
    height: 25,
    tintColor: TARBARTINITCOLOR,
  },
  tarbarIcon: {
    alignContent: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    paddingLeft: 8,
    borderRadius: 20,
    backgroundColor: TARBARICONBACKGROUND,
  },
  tarbarOptions: {
    height: 50,
    borderTopColor: WHITE,
    elevation: 0,
  },
});

export default TabNavigator;
