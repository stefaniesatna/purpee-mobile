import React, { useState, createContext, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const LevelContext = createContext();

const STORAGE_KEY = `LEVEL_DATES`
const CLEAR_IN_DEV = false

export function LevelProvider(props) {
  const [levelDates, setLevelDates] = useState({})

  const updateState = (data) => {
    setLevelDates(data)
  }

  useEffect(() => {
    if (Object.keys(levelDates) != 0){
      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(levelDates))
    }
  }, [levelDates])

  useEffect(() => {
    async function hydrateState(){
      if(process.env.NODE_ENV === "development" && CLEAR_IN_DEV){
        console.log("Clearing async storage")
        await AsyncStorage.clear()
      }
      AsyncStorage.getItem(STORAGE_KEY).then((value) => {
        if (value){
          setLevelDates(JSON.parse(value))
        }
      })
    }
    hydrateState()
  }, [])

  return (
    <LevelContext.Provider value={[levelDates, updateState]}>
      {props.children}
    </LevelContext.Provider>
  );
};
