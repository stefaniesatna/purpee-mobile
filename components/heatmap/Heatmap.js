import React from "react";
import { View } from "react-native";

import { generateArrayOfWeeks } from "../../modules/generateArrayOfWeeks"
import HeatmapRow from "./HeatmapRow";
import WeekdaysHeader from "../WeekdaysHeader";

function Heatmap({ setIsModalVisible, setDaySelected }) {
  const style = {
    padding: 0,
    flexDirection: "column",
    marginRight: "auto",
    marginLeft: "auto",
  };
  const levels = generateArrayOfWeeks(9);

  const heatmapRows = levels.map((levels, idx) => (
    <HeatmapRow
      key={idx}
      levels={levels}
      setIsModalVisible={setIsModalVisible}
      setDaySelected={setDaySelected}
    />
  ));

  return (
    <View>
      <WeekdaysHeader />
      <View style={style}>{heatmapRows}</View>
    </View>
  );
}

export default Heatmap;
