import React from "react";
import { View } from "react-native";

import HeatmapSquare from "./HeatmapSquare";

function HeatmapRow(props) {
  const style = {
    flexDirection: "row",
    alignItems: "flex-start",
    width: "100%",
  };

  const heatmapSquares = props.levels.map((level, idx) => {
    return <HeatmapSquare key={idx} level={level} />;
  });

  return <View style={style}>{heatmapSquares}</View>;
}

export default HeatmapRow;
