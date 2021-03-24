import React from "react";
import { View } from "react-native";

import { HeatmapSquare } from "./HeatmapSquare";

export const HeatmapRow = ({ levels, setIsModalVisible, setDaySelected }) => {
  const style = {
    flexDirection: "row",
    alignItems: "flex-start",
    width: "100%",
  };

  const heatmapSquares = levels.map((date, idx) => {
    return <HeatmapSquare key={idx} date={date} setIsModalVisible={setIsModalVisible} setDaySelected={setDaySelected}/>;
  });

  return <View style={style}>{heatmapSquares}</View>;
}
