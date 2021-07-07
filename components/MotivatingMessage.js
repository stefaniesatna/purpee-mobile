import React, { useContext } from "react";
import { Text } from "react-native";
import { LevelContext } from "../LevelContext";
import { secondaryText } from "../data/Style";
import { calculateStreak } from "../modules/calculateStreak";
import { motivatingMessages, newMessage } from "../data/MotivatingMessagesDB";

export const MotivatingMessage = () => {
  const [levelDates] = useContext(LevelContext);
  const daysInKetosis = calculateStreak(levelDates);

  newMessage(`Let's start your keto streak today 🎯`, 0);
  newMessage(`First day in! Purple pee FTW 💜`, 1);
  newMessage(`It's what's on the stick that counts 💪`, 5);
  newMessage(`Let the stick do the talking 😎`, 10);
  newMessage(`If bread was allowed, everyone could do it.`, 15);
  newMessage(`To reach inner peace, you shall purple piss 💦`, 20);
  newMessage(`Day ${daysInKetosis}. Respect!🎖️`, 25, 30);
  newMessage(`Day ${daysInKetosis}. You are the real keto lord 🔥`, 30, 35);

  let message = `${daysInKetosis} straight days in ketosis 💜`;
  motivatingMessages.forEach((m) => {
    if (m.min <= daysInKetosis && daysInKetosis < m.max) {
      message = m.message;
      return;
    }
  });

  return <Text style={secondaryText}>{message}</Text>;
};
