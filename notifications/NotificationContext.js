import React, { useState, createContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getStorageValue, setStorageValue } from "../modules/asyncStorageAPI";

export const NotificationContext = createContext();

const STORAGE_KEY = `NOTIFICATION`;
const CLEAR_IN_DEV = false;

export function NotificationProvider(props) {
  const [notification, setNotification] = useState();

  const updateState = (data) => {
    setNotification((prev) => ({ ...prev, ...data }));
  };

  useEffect(() => {
    setStorageValue(STORAGE_KEY, notification);
  }, [notification]);

  useEffect(() => {
    async function hydrateState() {
      if (process.env.NODE_ENV === "development" && CLEAR_IN_DEV) {
        await AsyncStorage.clear();
      }
      getStorageValue(STORAGE_KEY).then((value) => {
        if (value) {
          setNotification(value);
        } else {
          setNotification({ angle: 0, isOn: false });
        }
      });
    }
    hydrateState();
  }, []);

  return (
    <NotificationContext.Provider value={[notification, updateState]}>
      {props.children}
    </NotificationContext.Provider>
  );
}
