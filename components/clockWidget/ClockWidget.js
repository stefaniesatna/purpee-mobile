import React from "react";
import { View } from "react-native";
import { UIColors } from "../../data/Style";
import { SetTimeSlider } from "./slider/SetTimeSlider";
import { ClockFace } from "./clock/ClockFace";

export const ClockWidget = ({ screenWidth, handleAngleChange, notificationAngle }) => {

  // Set dimensions & style slider and clock
  const customiseSlider = {
    btnRadius: 0.056 * screenWidth,
    dialRadius: 0.34 * screenWidth,
    dialWidth: 0,
    meterColor: UIColors.blueFull,
    textColor: "none",
    fillColor: "none",
    strokeColor: "#fff",
    strokeWidth: 0,
    textSize: 10,
    value: notificationAngle,
    onValueChange: handleAngleChange,
  };

  const clockPadding = 0.021 * screenWidth;
  const clockWidth =
    2 * (customiseSlider.dialRadius + customiseSlider.btnRadius) +
    2 * clockPadding;
  const clockFaceWidth =
    2 * (customiseSlider.dialRadius - customiseSlider.btnRadius - clockPadding);

  const styleClock = {
    width: clockWidth,
    height: clockWidth,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",

    borderWidth: 2 * customiseSlider.btnRadius + 2 * clockPadding,
    borderRadius: clockWidth / 2,
    borderColor: "rgba(45, 0, 57, 0.4)",
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={styleClock}>
        <ClockFace notificationAngle={notificationAngle} width={clockFaceWidth} />
        <SetTimeSlider customiseSlider={customiseSlider} />
      </View>
    </View>
  );
};
