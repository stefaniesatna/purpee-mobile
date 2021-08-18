import React, { useRef, useEffect, useContext } from "react";
import { NotificationContext } from "./NotificationContext";
import { LevelContext } from "../LevelContext";
import Constants from "expo-constants";
import * as Notifications from "expo-notifications";
import { degreesToTime } from "../modules/degreesToTime";
import { formatDateYYYYMMDD } from "../modules/formatDateYYYYMMDD";

export const NotificationWrapper = ({ children }) => {
  const notificationListener = useRef();
  const responseListener = useRef();
  const [notification] = useContext(NotificationContext);
  const [levelDates] = useContext(LevelContext);

  const time = {
    hour: notification ? degreesToTime(notification.angle).hours : 0,
    minute: notification ? degreesToTime(notification.angle).mins : 0,
  };

  const isOn = notification ? notification.isOn : false;
  const numberOfNotifications = 30
  const intervalSecs = 20
  const today = new Date()
    console.log("==================\n\n\n\n")
    console.log("Today is ", today)
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
    console.log("Today still is ", today)
    console.log("Tomorrow is now ", tomorrow)
  const startDate = levelDates && levelDates[formatDateYYYYMMDD(today)] > 0 ? tomorrow : today
    console.log("Start date", startDate)

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
      alert("Permission for push notifications could not be granted. Reminder notifications will not be sent");
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert("Must use physical device for Push Notifications");
  }

  return token;
}
