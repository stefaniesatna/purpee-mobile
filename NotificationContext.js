import React, { useState, createContext, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const NotificationContext = createContext();

const STORAGE_KEY = `NOTIFICATION`
const CLEAR_IN_DEV = false

export function NotificationProvider(props) {
  const [notification, setNotification] = useState()

  const updateState = (data) => {
    setNotification((prev) => ({...prev, ...data}))
  }

  useEffect(() => {
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(notification))
  }, [notification])

  useEffect(() => {
    async function hydrateState(){
      if(process.env.NODE_ENV === "development" && CLEAR_IN_DEV){
        await AsyncStorage.clear()
      }
      AsyncStorage.getItem(STORAGE_KEY).then((value) => {
        if (value){
          setNotification(JSON.parse(value))
        } else {
          setNotification({angle: 0, isNotificationOn: false})
        }
      })
    }
    hydrateState()
  }, [])

  return (
    <NotificationContext.Provider value={[notification, updateState]}>
      {props.children}
    </NotificationContext.Provider>
  );
};