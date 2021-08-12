//TODO: Generalise? This is not the most reusable

import React from "react";
import { G, Line, Text } from "react-native-svg";
import { polarToCartesian } from "../../../modules/polarToCartesian";
import { UIColors } from "../../../data/Style";
import { Dimensions } from "react-native";

export const ClockMarkings = ({ radius, center, minutes, hours }) => {
  const minutesArray = new Array(minutes).fill(1);
  const hoursArray = new Array(hours).fill(1);

  /* polarToCartesian accepts angle in degrees as the last argument. 
    The arch above this angle represents the distance between two minute marks. Our minute count is 120 (24 * 5),
    which is 1/3 of the whole circle (360). Therefore, if we take the index of a given minute as 
    the starting unit, we only need to multiply it by 3 in order to get the degree spacing between 
    two minute marks. We apply the same logic for hour spacing */
  const minuteSpacingMultiplier = 360 / minutes;
  const hourSpacingMultiplier = 360 / hours;

  const minuteMarks = minutesArray.map((minute, index) => {
    // same properties for both start and end, because we are styling minute marks as dots
    const start = polarToCartesian(
      center,
      center,
      radius,
      index * minuteSpacingMultiplier
    );
    const end = polarToCartesian(
      center,
      center,
      radius,
      index * minuteSpacingMultiplier
    );

    return (
      <Line
        stroke={UIColors.blueMedium}
        strokeWidth={1}
        strokeLinecap="round"
        key={index}
        x1={start.x}
        x2={end.x}
        y1={start.y}
        y2={end.y}
      />
    );
  });

  const hourTextSize = toString(
    Math.floor(Dimensions.get("window").width * 0.026)
  );

  // -5 and -20 are arbitrary values to "move" the coordinate point towards the centre of the circle
  const hourMarks = hoursArray.map((hour, index) => {
    const start = polarToCartesian(
      center,
      center,
      radius - 5,
      index * hourSpacingMultiplier
    );
    const end = polarToCartesian(
      center,
      center,
      radius,
      index * hourSpacingMultiplier
    );
    const time = polarToCartesian(
      center,
      center,
      radius - 20,
      index * hourSpacingMultiplier
    );

    return (
      <G key={index}>
        <Line
          stroke={UIColors.blueFull}
          strokeWidth={1}
          strokeLinecap="round"
          x1={start.x}
          x2={end.x}
          y1={start.y}
          y2={end.y}
        />
        {/* not to clutter the appearance of the clockface, we will only display every other hour */}
        {index % 2 === 0 && (
          <Text
            textAnchor="middle"
            fontSize="10"
            fill={UIColors.blueFull}
            alignmentBaseline="central"
            x={time.x}
            y={time.y}
          >
            {index}
          </Text>
        )}
      </G>
    );
  });

  return (
    <G>
      {minuteMarks}
      {hourMarks}
    </G>
  );
};
