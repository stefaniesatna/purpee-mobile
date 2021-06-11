import React from "react";
import { View } from "react-native";
import { ClockWidget } from "../clockWidget/ClockWidget";
import { LinearGradient } from "expo-linear-gradient";

export const ReminderScreen = () => {
  return (
    <LinearGradient
      colors={["#190028", "#25013D", "#3C0146", "#702359", "#2D0139"]}
      locations={[0.2258, 0.387, 0.5781, 0.7938, 1]}
      style={{ width: "100%", height: "100%", position: "absolute" }}
    >
      <View style={{ height: 200 }} />
      <ClockWidget />
    </LinearGradient>
  );
};
