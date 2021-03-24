import React, { useState, useEffect } from "react";
import {
  BottomTabBar,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

import { HomeScreen } from "../screens/HomeScreen";
import { CalendarScreen } from "../screens/CalendarScreen";
import { ReminderScreen } from "../screens/ReminderScreen";
import { styleNavigator, UIColors } from "../../data/Style";

const Tab = createBottomTabNavigator();

export const MainStackScreen = ({ navigation }) => {
  let [isModalVisible, setIsModalVisible] = useState(false);
  const styleBottomTabBar = {
    flex: 1,
    backgroundColor: "transparent",
    borderStyle: "none",
    borderTopWidth: 1.5,
    borderTopColor: UIColors.blueFull,
  };

  useEffect(() => {
    if (!isModalVisible) {
      navigation.navigate("Modal");
      setIsModalVisible(true);
    }
  });

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
