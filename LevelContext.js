import React, { useState, createContext, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const LevelContext = createContext();

const defaultData = {
  "2020-12-27": Math.floor(Math.random() * 7),
  "2020-12-28": Math.floor(Math.random() * 7),
  "2020-12-29": Math.floor(Math.random() * 7),
  "2020-12-30": Math.floor(Math.random() * 7),
  "2020-12-31": Math.floor(Math.random() * 7),
  "2021-01-01": Math.floor(Math.random() * 7),
  "2021-01-02": Math.floor(Math.random() * 7),
  "2021-01-03": Math.floor(Math.random() * 7),
  "2021-01-04": Math.floor(Math.random() * 7),
  "2021-01-05": Math.floor(Math.random() * 7),
  "2021-01-06": Math.floor(Math.random() * 7),
  "2021-01-07": Math.floor(Math.random() * 7),
  "2021-01-08": Math.floor(Math.random() * 7),
  "2021-01-09": Math.floor(Math.random() * 7),
  "2021-01-10": Math.floor(Math.random() * 7),
  "2021-01-11": Math.floor(Math.random() * 7),
  "2021-01-12": Math.floor(Math.random() * 7),
  "2021-01-13": Math.floor(Math.random() * 7),
  "2021-01-14": Math.floor(Math.random() * 7),
  "2021-01-15": Math.floor(Math.random() * 7),
  "2021-01-16": Math.floor(Math.random() * 7),
  "2021-01-17": Math.floor(Math.random() * 7),
  "2021-01-18": Math.floor(Math.random() * 7),
  "2021-01-19": Math.floor(Math.random() * 7),
  "2021-01-20": Math.floor(Math.random() * 7),
  "2021-01-21": Math.floor(Math.random() * 7),
  "2021-01-22": Math.floor(Math.random() * 7),
  "2021-01-23": Math.floor(Math.random() * 7),
  "2021-01-24": Math.floor(Math.random() * 7),
  "2021-01-25": Math.floor(Math.random() * 7),
  "2021-01-26": Math.floor(Math.random() * 7),
  "2021-01-27": Math.floor(Math.random() * 7),
  "2021-01-28": Math.floor(Math.random() * 7),
  "2021-01-29": Math.floor(Math.random() * 7),
  "2021-01-30": Math.floor(Math.random() * 7),
  "2021-01-31": Math.floor(Math.random() * 7),
  "2021-02-01": Math.floor(Math.random() * 7),
  "2021-02-02": Math.floor(Math.random() * 7),
  "2021-02-03": Math.floor(Math.random() * 7),
  "2021-02-04": Math.floor(Math.random() * 7),
  "2021-02-05": Math.floor(Math.random() * 7),
  "2021-02-06": Math.floor(Math.random() * 7),
  "2021-02-07": Math.floor(Math.random() * 7),
  "2021-02-08": Math.floor(Math.random() * 7),
  "2021-02-09": Math.floor(Math.random() * 7),
  "2021-02-10": Math.floor(Math.random() * 7),
  "2021-02-11": Math.floor(Math.random() * 7),
  "2021-02-12": Math.floor(Math.random() * 7),
  "2021-02-13": Math.floor(Math.random() * 7),
  "2021-02-14": Math.floor(Math.random() * 7),
  "2021-02-15": Math.floor(Math.random() * 7),
  "2021-02-16": Math.floor(Math.random() * 7),
  "2021-02-17": Math.floor(Math.random() * 7),
  "2021-02-18": Math.floor(Math.random() * 7),
  "2021-02-19": Math.floor(Math.random() * 7),
  "2021-02-20": Math.floor(Math.random() * 7),
  "2021-02-21": Math.floor(Math.random() * 7),
  "2021-02-22": Math.floor(Math.random() * 7),
  "2021-02-23": Math.floor(Math.random() * 7),
  "2021-02-24": Math.floor(Math.random() * 7),
  "2021-02-25": Math.floor(Math.random() * 7),
  "2021-02-26": Math.floor(Math.random() * 7),
  "2021-02-27": Math.floor(Math.random() * 7),
  "2021-02-28": Math.floor(Math.random() * 7),
  "2021-03-01": Math.floor(Math.random() * 7),
  "2021-03-02": Math.floor(Math.random() * 7),
  "2021-03-03": Math.floor(Math.random() * 7),
  "2021-03-04": Math.floor(Math.random() * 7),
  "2021-03-05": Math.floor(Math.random() * 7),
  "2021-03-06": Math.floor(Math.random() * 7),
  "2021-03-07": Math.floor(Math.random() * 7),
  "2021-03-08": Math.floor(Math.random() * 7),
  "2021-03-09": Math.floor(Math.random() * 7),
  "2021-03-10": Math.floor(Math.random() * 7),
  "2021-03-11": Math.floor(Math.random() * 7),
  "2021-03-12": Math.floor(Math.random() * 7),
  "2021-03-13": Math.floor(Math.random() * 7),
  "2021-03-14": Math.floor(Math.random() * 7),
  "2021-03-15": Math.floor(Math.random() * 7),
  "2021-03-16": Math.floor(Math.random() * 7),
  "2021-03-17": Math.floor(Math.random() * 7),
  "2021-03-18": Math.floor(Math.random() * 7),
  "2021-03-19": Math.floor(Math.random() * 7),
  "2021-03-20": Math.floor(Math.random() * 7),
  "2021-03-21": Math.floor(Math.random() * 7),
  "2021-03-22": Math.floor(Math.random() * 7),
  "2021-03-23": Math.floor(Math.random() * 7),
}

const STORAGE_KEY = `LEVEL_DATES`
const CLEAR_IN_DEV = true

export function LevelProvider(props) {
  const [levelDates, setLevelDates] = useState({})

  const updateState = (data) => {
    console.log("Updating levelDates with new state", data)
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
