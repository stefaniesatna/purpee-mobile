import React from "react";
import { View, Text } from "react-native";
import { UIColors, defaultFont } from "../../../data/Style";
import { formatNumberdd } from "../../../modules/formatNumberdd";
import { degreesToTime } from "../../../modules/degreesToTime";

export const TimeDisplay = ({ notificationAngle }) => {
  let time = {
    hours: formatNumberdd(degreesToTime(notificationAngle).hours),
    mins: formatNumberdd(degreesToTime(notificationAngle).mins)
  }

  const styleTime = {
    ...defaultFont,
    fontSize: 34,
    color: UIColors.blueFull,
  };

  const styleTimeWrapper = {
    flexDirection: "row",
    width: 90,
    justifyContent: "space-between",
  };

  return (
    <View style={styleTimeWrapper}>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={styleTime}>{time.hours}</Text>
      </View>
      <View style={{ flex: 0.25, alignItems: "center" }}>
        <Text style={styleTime}>:</Text>
      </View>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={styleTime}>{time.mins}</Text>
      </View>
    </View>
  );
};
