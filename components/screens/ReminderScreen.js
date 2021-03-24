import React from "react";
import { Text, View } from "react-native";

export const ReminderScreen = () => {
  const styleView = {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <View style={styleView}>
      <Text>Reminder Screen</Text>
    </View>
  );
};
