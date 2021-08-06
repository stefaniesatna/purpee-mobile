import React from "react";
import { View, Dimensions } from "react-native";

import { generateArrayOfWeeks } from "../../modules/generateArrayOfWeeks";
import { HeatmapRow } from "./HeatmapRow";
import { WeekdaysHeader } from "../WeekdaysHeader";

export const Heatmap = ({ handleSquarePress }) => {
  const style = {
    padding: 0,
    flexDirection: "column",
    marginRight: "auto",
    marginLeft: "auto",
  };
  const screenWidth = Dimensions.get('window').width
  const screenHeight = Dimensions.get('window').height
  const screenRatio = screenWidth / screenHeight

  // everything below ratio 0.6 is an iphone, everything above is an iPad
  const numberOfRows = screenRatio > 0.6 ? 8 : screenRatio < 0.5 ? 12 : screenRatio === 0.75 ? 7 : 9
  const levels = generateArrayOfWeeks(numberOfRows);

  const heatmapRows = levels.map((levels, idx) => (
    <HeatmapRow
      key={idx}
      levels={levels}
      handleSquarePress={handleSquarePress}
    />
  ));

  return (
    <View>
      <WeekdaysHeader />
      <View style={style}>{heatmapRows}</View>
    </View>
  );
};
