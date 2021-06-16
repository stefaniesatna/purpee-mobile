import React from "react";
import { View, Text } from "react-native";
import { UIColors } from "../../../data/Style";
import { formatNumberdd } from "../../../modules/formatNumberdd";

export const TimeDisplay = ({ time }) => {
  time.hours = formatNumberdd(time.hours);
  time.mins = formatNumberdd(time.mins);

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
