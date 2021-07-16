import React from "react";
import { View, Text } from "react-native";
import { UIColors } from "../../../data/Style";
import { formatNumberdd } from "../../../modules/formatNumberdd";
import { degreesToTime } from "../../../modules/degreesToTime";

export const TimeDisplay = ({ angle }) => {
  let time = {
    hours: formatNumberdd(degreesToTime(angle).hours),
    mins: formatNumberdd(degreesToTime(angle).mins)
  }

  const styleTime = {
    fontSize: 36,
    color: UIColors.blueFull,
  };

  const styleTimeWrapper = {
    flexDirection: "row",
    width: 90,
    justifyContent: "space-between",
  };

  return (
    <View style={styleTimeWrapper}>
      <View style={{ flex: 2, alignItems: "center" }}>
        <Text style={styleTime}>{time.hours}</Text>
      </View>
      <View style={{ flex: 0.5, alignItems: "center" }}>
        <Text style={styleTime}>:</Text>
      </View>
      <View style={{ flex: 2, alignItems: "center" }}>
        <Text style={styleTime}>{time.mins}</Text>
      </View>
    </View>
  );
};
