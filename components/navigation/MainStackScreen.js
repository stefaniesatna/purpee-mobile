import React, { useState, useEffect } from "react";
import {
  BottomTabBar,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { HomeScreen } from "../screens/HomeScreen";
import { CalendarScreen } from "../screens/CalendarScreen";
import { ReminderScreen } from "../screens/ReminderScreen";
import { styleNavigator, UIColors } from "../../data/Style";
import { formatDateYYYYMMDD } from "../../modules/formatDateYYYYMMDD";

const Tab = createBottomTabNavigator();

const STORAGE_KEY = "MODAL_SHOWN";

// const fakeData = {
//   "2021-03-30":true,
//   "2021-03-29":true,
//   "2021-03-31": true,
// }

// const CLEAR = false; 

export const MainStackScreen = ({ navigation }) => {
  const styleBottomTabBar = {
    flex: 1,
    backgroundColor: "transparent",
    borderStyle: "none",
    borderTopWidth: 1.5,
    borderTopColor: UIColors.blueFull,
  };

  useEffect(() => {
    // if (CLEAR) {
    // AsyncStorage.clear()
    // }
    AsyncStorage.getItem(STORAGE_KEY).then((value) => {
      console.log(value)
      const data = JSON.parse(value)
      const today = formatDateYYYYMMDD(new Date());
      if (!data || !data[today]) {
        navigation.navigate("Modal");

        const newData = JSON.stringify({ ...data, [today]: true });
        AsyncStorage.setItem(STORAGE_KEY, newData);
      }
    });
  }, []);

  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      tabBarOptions={{
        activeTintColor: UIColors.darkPurple,
        inactiveTintColor: UIColors.blueFull,
        showLabel: false,
      }}
      tabBar={(props) => {
        return (
          <LinearGradient
            colors={["#2D0039", "#190028"]}
            locations={[0, 1]}
            style={styleNavigator}
          >
            <BottomTabBar {...props} style={styleBottomTabBar} />
          </LinearGradient>
        );
      }}
    >
      <Tab.Screen
        name="CalendarScreen"
        component={CalendarScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-calendar-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ReminderScreen"
        component={ReminderScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-alarm" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
