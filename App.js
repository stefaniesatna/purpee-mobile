import React from "react";
import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import { BottomTabBar, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import ModalScreen from "./components/screens/ModalScreen";
import HomeScreen from "./components/screens/HomeScreen";
import CalendarScreen from "./components/screens/CalendarScreen";
import ReminderScreen from "./components/screens/ReminderScreen";

import { styleNavigator, UIColors, styleGradient } from "./data/Style";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { Line } from "react-native-svg";

const Tab = createBottomTabNavigator();
const Root = createStackNavigator();

function MainStackScreen({ navigation }) {
  let [modalShown, setModalShown] = useState(false);

  useEffect(() => {
    if (!modalShown) {
      navigation.navigate("Modal");
      setModalShown(true);
    }
  });

  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      tabBarOptions={{
        // style: styleNavigator,
        activeTintColor: UIColors.darkPurple,
        inactiveTintColor: UIColors.blueFull,
        showLabel: false,
      }}
      sceneContainerStyle={{
        backgroundColor: "purple",
      }}
      tabBar={(props) => {
        return (
          <LinearGradient
            colors={["#190028", "#2D0039"]}
            locations={[1, 0.3]}
            style={styleNavigator}
          >
            <BottomTabBar
              {...props}
              style={{ backgroundColor: "transparent", justifyContent: "center"}}
            />
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
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Root.Navigator mode="modal" headerMode="none">
        <Root.Screen name="Main" component={MainStackScreen} />
        <Root.Screen name="Modal" component={ModalScreen} />
      </Root.Navigator>
    </NavigationContainer>
  );
}
