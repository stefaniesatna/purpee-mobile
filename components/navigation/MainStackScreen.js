import React, { useEffect } from "react";
import {
  BottomTabBar,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import {
  getStorageValue,
  setStorageValue,
} from "../../modules/asyncStorageAPI";

import { HomeScreen } from "../screens/HomeScreen";
import { CalendarScreen } from "../screens/CalendarScreen";
import { ReminderScreen } from "../screens/ReminderScreen";
import { SettingsScreen } from "../screens/SettingsScreen";
import { styleNavigator, UIColors } from "../../data/Style";
import { formatDateYYYYMMDD } from "../../modules/formatDateYYYYMMDD";

const Tab = createBottomTabNavigator();

const STORAGE_KEY = "MODAL_SHOWN";

export const MainStackScreen = ({ navigation }) => {
  const styleBottomTabBar = {
    flex: 1,
    backgroundColor: "transparent",
    borderStyle: "none",
    borderTopWidth: 1,
    borderTopColor: UIColors.blueFull,
  };

  useEffect(() => {
    getStorageValue(STORAGE_KEY).then((data) => {
      const today = formatDateYYYYMMDD(new Date());
      if (!data || !data[today]) {
        navigation.navigate("Modal");

        const newData = { ...data, [today]: true };
        setStorageValue(STORAGE_KEY, newData);
      }
    });
  }, []);

  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      tabBarOptions={{
        activeTintColor: UIColors.blueFull,
        inactiveTintColor: UIColors.blueMedium,
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
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-home" color={color} size={size} />
          ),
        }}
      />
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
        name="ReminderScreen"
        component={ReminderScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-alarm" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
