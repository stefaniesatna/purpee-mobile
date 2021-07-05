import React, { useState, useEffect, useRef } from "react";
import Constants from "expo-constants";
import * as Notifications from "expo-notifications";
import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { ModalScreen } from "./components/screens/ModalScreen";
import { MainStackScreen } from "./components/navigation/MainStackScreen";
import { LevelProvider } from "./LevelContext";
import { NotificationProvider } from "./NotificationContext";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

// TODO wire data from NotificationContext
const notificationTime = {
  hour: 10,
  minute: 30,
};
const notificationOn = false;

const Root = createStackNavigator();

export default function App() {
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    console.log("\n\n\nNew build");
  }, []);

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  useEffect(() => {
    if (!notificationOn) {
      cancelNotifications();
    }
    if (notificationOn) {
      cancelNotifications();
      schedulePushNotification(notificationTime);
    }
  }, [notificationTime, notificationOn]);

  return (
    <NavigationContainer>
      <LevelProvider>
        <NotificationProvider>
          <StatusBar style="light" />
          <Root.Navigator mode="modal" headerMode="none">
            <Root.Screen name="Main" component={MainStackScreen} />
            <Root.Screen name="Modal" component={ModalScreen} />
          </Root.Navigator>
        </NotificationProvider>
      </LevelProvider>
    </NavigationContainer>
  );
}

async function cancelNotifications() {
  console.log("Cancelling all notifications");
  await Notifications.cancelAllScheduledNotificationsAsync();
}

async function schedulePushNotification(time) {
  console.log("scheduling new notification");
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Purpee time 💜",
      body: "Don't forget to log your ketone levels this morning!",
    },
    trigger: {
      hour: time.hour,
      minute: time.minute,
      repeats: true,
    },
  });
  console.log("finished scheduling new notifications");
}

async function registerForPushNotificationsAsync() {
  let token;
  if (Constants.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert("Must use physical device for Push Notifications");
  }

  return token;
}
