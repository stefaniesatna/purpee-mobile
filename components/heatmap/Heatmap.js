import React from "react";
import { View } from "react-native";

import HeatmapRow from "./HeatmapRow";
import WeekdaysHeader from "../WeekdaysHeader";

function Heatmap({ levels, setIsModalVisible, setDaySelected }) {
  const style = {
    flexDirection: "column",
    marginRight: "auto",
    marginLeft: "auto",
  };

  const heatmapRows = levels.map((levels, idx) => (
    <HeatmapRow key={idx} levels={levels} setIsModalVisible={setIsModalVisible} setDaySelected={setDaySelected}/>
  ));

  return (
    <View style={style}>
      <WeekdaysHeader />
      {heatmapRows}
    </View>
  );
}

export default Heatmap;
