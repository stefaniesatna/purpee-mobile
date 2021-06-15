import React from "react";
import Svg from "react-native-svg";
import { View } from "react-native";
import { Time } from "../Time";
import { ClockMarkings } from "./ClockMarkings";

export const ClockFace = ({ time, width }) => {
  const diameter = width;
  const center = width / 2;
  const radius = diameter / 2;
  const hourMarkCount = 24;
  const minuteMarkCount = hourStickCount * 5;

  const style = {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  };

  const styleTimeWrapper = {
    position: "absolute",
    alignSelf: "center",
  };

  return (
    <View style={style}>
      <View style={styleTimeWrapper}>
        <Time time={time} />
      </View>
      <Svg height={width} width={width}>
        <ClockMarkings
          radius={radius}
          center={center}
          minutes={minuteMarkCount}
          hours={hourMarkCount}
        />
      </Svg>
    </View>
  );
};
