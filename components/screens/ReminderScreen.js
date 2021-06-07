import React from "react";
import { View } from "react-native";
import { ClockWidget } from "../clockWidget/ClockWidget"

export const ReminderScreen = () => {
  const styleView = {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <View style={styleView}>
      <ClockWidget />
    </View>
  );
};
