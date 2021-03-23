import React, { useContext } from "react";
import { Text } from "react-native";
import { LevelContext } from "../LevelContext";
import { mainText } from "../data/Style";
import { calculateStreak } from "../modules/calculateStreak";

const MotivatingMessage = () => {
  const [levelDates, setLevelDates] = useContext(LevelContext);
  const daysInKetosis = calculateStreak(levelDates);

  let message;
  if (daysInKetosis === 0) {
    message = `Today is the day to start! 🎯`;
  } else if (daysInKetosis === 1) {
    message = `First day in! Purple pee FTW 💜`;
  } else if (daysInKetosis === 5) {
    message = `It's what's on the stick that counts 💪`;
  } else if (daysInKetosis === 10) {
    message = `Let the stick do the talking 😎`;
  } else if (daysInKetosis === 15) {
    message = `If bread was allowed, everyone could do it. Keep it up 🎉`;
  } else if (daysInKetosis === 20) {
    message = `To reach inner peace, you shall purple piss 💦`;
  } else if (daysInKetosis > 20 && daysInKetosis < 30) {
    message = `Day ${daysInKetosis}. Respect!🎖️`;
  } else if (daysInKetosis > 30) {
    message = `Day ${daysInKetosis}. You are the real keto lord 🔥`;
  } else {
    message = `${daysInKetosis} straight days in ketosis 💜`;
  }

  return <Text style={mainText}>{message}</Text>;
};

export default MotivatingMessage;
