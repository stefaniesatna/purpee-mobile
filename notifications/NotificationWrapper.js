import React, { useRef, useEffect, useContext } from "react";
import { NotificationContext } from "./NotificationContext";
import Constants from "expo-constants";
import * as Notifications from "expo-notifications";
import { degreesToTime } from "../modules/degreesToTime";

export const NotificationWrapper = ({ children }) => {
  const notificationListener = useRef();
  const responseListener = useRef();
  const [notification] = useContext(NotificationContext);

  const time = {
    hour: notification ? degreesToTime(notification.angle).hours : 0,
    minute: notification ? degreesToTime(notification.angle).mins : 0,
  };

  const isOn = notification ? notification.isOn : false;

  useEffect(() => {
    registerForPushNotificationsAsync();

    notificationListener.current =
      Notifications.addNotificationReceivedListener((n) => {
        return n
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        return response
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  useEffect(() => {
    if (!isOn) {
      cancelNotifications();
    }
    if (isOn) {
      cancelNotifications();
      schedulePushNotification(time);
    }
  }, [time, isOn]);

  return <>{children}</>;
};

async function cancelNotifications() {
  await Notifications.cancelAllScheduledNotificationsAsync();
}

async function schedulePushNotification(time) {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Purpee time 💜",
      body: "Don't forget to log your ketone levels today!",
      sound:  "default"
    },
    trigger: {
      hour: time.hour,
      minute: time.minute,
      repeats: true,
    },
  });
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
      alert("Unable to set notifications");
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
  } else {
    alert("Must use physical device for Push Notifications");
  }

  return token;
}
