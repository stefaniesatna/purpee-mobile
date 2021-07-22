import React from "react";
import * as Notifications from "expo-notifications";
import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { setCustomText } from "react-native-global-props";

import { ModalScreen } from "./components/screens/ModalScreen";
import { MainStackScreen } from "./components/navigation/MainStackScreen";
import { LevelProvider } from "./LevelContext";
import { NotificationProvider } from "./notifications/NotificationContext";
import { NotificationWrapper } from "./notifications/NotificationWrapper";

import { useFonts, Montserrat_400Regular } from "@expo-google-fonts/montserrat";

const customTextProps = {
  style: {
    fontFamily: "Montserrat_400Regular",
  },
};

setCustomText(customTextProps);

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

const Root = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
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
}
