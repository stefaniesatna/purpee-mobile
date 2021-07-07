import React, { useState, useEffect } from "react";
import * as Notifications from "expo-notifications";
import { StatusBar } from "expo-status-bar";
import AppLoading from 'expo-app-loading';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { ModalScreen } from "./components/screens/ModalScreen";
import { MainStackScreen } from "./components/navigation/MainStackScreen";
import { LevelProvider } from "./LevelContext";
import { NotificationProvider } from "./NotificationContext";
import { NotificationWrapper } from "./NotificationWrapper";

import {
  useFonts,
  Montserrat_100Thin,
  Montserrat_100Thin_Italic,
  Montserrat_200ExtraLight,
  Montserrat_200ExtraLight_Italic,
  Montserrat_300Light,
  Montserrat_300Light_Italic,
  Montserrat_400Regular,
  Montserrat_400Regular_Italic,
  Montserrat_500Medium,
  Montserrat_500Medium_Italic,
  Montserrat_600SemiBold,
  Montserrat_600SemiBold_Italic,
  Montserrat_700Bold,
  Montserrat_700Bold_Italic,
  Montserrat_800ExtraBold,
  Montserrat_800ExtraBold_Italic,
  Montserrat_900Black,
  Montserrat_900Black_Italic,
} from '@expo-google-fonts/montserrat';

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
    Montserrat_100Thin,
    Montserrat_100Thin_Italic,
    Montserrat_200ExtraLight,
    Montserrat_200ExtraLight_Italic,
    Montserrat_300Light,
    Montserrat_300Light_Italic,
    Montserrat_400Regular,
    Montserrat_400Regular_Italic,
    Montserrat_500Medium,
    Montserrat_500Medium_Italic,
    Montserrat_600SemiBold,
    Montserrat_600SemiBold_Italic,
    Montserrat_700Bold,
    Montserrat_700Bold_Italic,
    Montserrat_800ExtraBold,
    Montserrat_800ExtraBold_Italic,
    Montserrat_900Black,
    Montserrat_900Black_Italic,
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
