import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, Text, TouchableOpacity, View } from "react-native";
import * as Font from "expo-font";

import Dashboard from "../screens/dashboard/Dashboard";
import Remittance from "../screens/remittance/Remittance";

const Tab = createBottomTabNavigator();

const CustomTabBarButtom = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      top: -25,
      alignContent: "center",
      justifyContent: "center",
    }}
    onPress={onPress}
  >
    <View
      style={{
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: "#e32f45",
      }}
    >
      {children}
    </View>
  </TouchableOpacity>
);

const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          elevation: 0,
          height: 60,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Dashboard}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignContent: "center",
                justifyContent: "center",
                top: 5,
              }}
            >
              <Image
                source={require(`../../assets/img/home.png`)}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: "#748c9e",
                }}
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
              style={{
                width: 30,
                height: 30,
                tintColor: "#fff",
              }}
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
            <View
              style={{
                alignContent: "center",
                justifyContent: "center",
                top: 5,
              }}
            >
              <Image
                source={require(`../../assets/img/payment.png`)}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? "#e32f45" : "#748c9e",
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
