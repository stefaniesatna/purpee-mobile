import React from "react";
import { View } from "react-native";

import HeatmapSquare from "./HeatmapSquare";

function HeatmapRow(props) {
  const style = {
    flexDirection: "row",
    alignItems: "flex-start",
    width: "100%",
  };

  const heatmapSquares = props.ketoneLevels.map((ketoneLevel, idx) => {
    return <HeatmapSquare key={idx} ketoneLevel={ketoneLevel} />;
  });

  return <View style={style}>{heatmapSquares}</View>;
}

export default HeatmapRow;
