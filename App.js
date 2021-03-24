import React from "react";
import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { ModalScreen } from "./components/screens/ModalScreen";
import { MainStackScreen } from "./components/navigation/MainStackScreen";
import { LevelProvider } from "./LevelContext";

const Root = createStackNavigator();

export default function App() {
  return (
    <LevelProvider>
      <NavigationContainer>
        <StatusBar style="light" />
        <Root.Navigator mode="modal" headerMode="none">
          <Root.Screen name="Main" component={MainStackScreen} />
          <Root.Screen name="Modal" component={ModalScreen} />
        </Root.Navigator>
      </NavigationContainer>
    </LevelProvider>
  );
}
