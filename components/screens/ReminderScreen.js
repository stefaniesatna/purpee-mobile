import React from "react";
import { View } from "react-native";
import CircleSlider from "../../components/CircleSlider"

export const ReminderScreen = () => {
  const styleView = {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <View style={styleView}>
      <CircleSlider />
    </View>
  );
};
