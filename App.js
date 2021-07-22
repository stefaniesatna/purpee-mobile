import React from "react";
import * as Notifications from "expo-notifications";
import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { ModalScreen } from "./components/screens/ModalScreen";
import { MainStackScreen } from "./components/navigation/MainStackScreen";
import { LevelProvider } from "./LevelContext";
import { NotificationProvider } from "./notifications/NotificationContext";
import { NotificationWrapper } from "./notifications/NotificationWrapper";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

const Root = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <LevelProvider>
        <NotificationProvider>
          {/* Notifications need to receive context from NotificationProvider, but also need to wrap the rest of the app. 
          That's why most of code related to notifications is in NotificationsWrapper */}
          <NotificationWrapper>
            <StatusBar style="light" />
            <Root.Navigator mode="modal" headerMode="none">
              <Root.Screen name="Main" component={MainStackScreen} />
              <Root.Screen name="Modal" component={ModalScreen} />
            </Root.Navigator>
          </NotificationWrapper>
        </NotificationProvider>
      </LevelProvider>
    </NavigationContainer>
  );
}
