import React from "react";
import { G, Line, Text } from "react-native-svg";
import { polarToCartesian } from "../../../modules/polarToCartesian";
import { UIColors } from "../../../data/Style";

export const ClockMarkings = ({ radius, center, minutes, hours }) => {
  const minutesArray = new Array(minutes).fill(1);
  // Because we have a clock displaying 24 hours, not 12, we need to divide the number of hours by two, to get 12 hour spots.
  const hoursArray = new Array(hours).fill(1);

  const minuteMarks = minutesArray.map((minute, index) => {
    const start = polarToCartesian(center, center, radius, index * 3);
    const end = polarToCartesian(center, center, radius, index * 3);

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

  // -10 and -20 are arbitrary values to "move" the coordinate point towards the centre of the circle,
  const hourMarks = hoursArray.map((hour, index) => {
    const start = polarToCartesian(center, center, radius - 5, index * 15);
    const end = polarToCartesian(center, center, radius, index * 15);
    const time = polarToCartesian(center, center, radius - 20, index * 15);

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
            fontWeight="normal"
            fill={UIColors.blueFull}
            alignmentBaseline="central"
            x={time.x}
            y={time.y}
          >
            {/* We have 24 hours on clock, therefore we need to move to each "usually 1-hour spot" after two hours. 
          That's why we're multiplying by two.  */}
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
