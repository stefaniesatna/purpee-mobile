import React, { useState } from "react";
import { View, Text } from "react-native";
import { UIColors } from "../../data/Style";
import { degreesToTime } from "../../modules/degreesToTime";
import { SetTimeSlider } from "./SetTimeSlider";
import { ClockFace } from "./ClockFace";

export const ClockWidget = () => {
  // State to keep track of the time selected for notification
  const [degrees, setDegrees] = useState();

  let time = {
    hours: degreesToTime(degrees).hours,
    mins: degreesToTime(degrees).mins,
  };

  // Circle slider returns deg value and passes it to this function
  const handleValueChange = (e) => {
    setDegrees(e);
    time = degreesToTime(degrees);
  };

  // Set dimensions & style slider and clock
  const customiseSlider = {
    btnRadius: 21,
    dialRadius: 130,
    dialWidth: 0,
    meterColor: UIColors.blueFull,
    textColor: "none",
    fillColor: "none",
    strokeColor: "#fff",
    strokeWidth: 0,
    textSize: 10,
    value: 0,
    onValueChange: handleValueChange,
  };

  const clockPadding = 8;
  const clockWidth =
    2 * (customiseSlider.dialRadius + customiseSlider.btnRadius) +
    2 * clockPadding;

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
        <ClockFace time={time} />
        <SetTimeSlider customiseSlider={customiseSlider} />
      </View>
    </View>
  );
};
