import React from "react";
import { View } from "react-native";

import HeatmapRow from "./HeatmapRow";
import WeekdaysHeader from "../WeekdaysHeader";

function Heatmap(props) {
  const style = {
    flexDirection: "column",
    marginRight: "auto",
    marginLeft: "auto",
  };

  const heatmapRows = props.ketoneLevels.map((ketoneLevels, idx) => (
    <HeatmapRow key={idx} ketoneLevels={ketoneLevels} />
  ));

  return (
    <View style={style}>
      <WeekdaysHeader />
      {heatmapRows}
    </View>
  );
}

export default Heatmap;
