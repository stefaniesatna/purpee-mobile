import React, { useRef, useEffect, useContext } from "react";
import { NotificationContext } from "./NotificationContext";
import Constants from "expo-constants";
import * as Notifications from "expo-notifications";
import { degreesToTime } from "./modules/degreesToTime";

export const NotificationsWrapper = ({ children }) => {
  const notificationListener = useRef();
  const responseListener = useRef();
  const [ notification ] = useContext(NotificationContext);

  const notificationTime = {
    hour: degreesToTime(notification.angle).hours,
    minute: degreesToTime(notification.angle).mins,
  };
  const notificationOn = notification.isNotificationOn;

  useEffect(() => {
    registerForPushNotificationsAsync();

    notificationListener.current =
      Notifications.addNotificationReceivedListener((n) => {
        console.log(n);
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

  return <>{children}</>;
};

async function cancelNotifications() {
  await Notifications.cancelAllScheduledNotificationsAsync();
}

async function schedulePushNotification(time) {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Purpee time 💜",
      body: "Don't forget to log your ketone levels!",
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
