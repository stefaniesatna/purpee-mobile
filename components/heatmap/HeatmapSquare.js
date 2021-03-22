import React from "react";
import { TouchableOpacity } from "react-native";

import ColourScale from "../../data/ColourScale";

function HeatmapSquare(props) {
  let style = {
    width: 50,
    height: 50,
    margin: 1.5,
    borderRadius: 3,

    backgroundColor: ColourScale[props.level],
  };

  const todayStyle = {
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "red",
  };

  if (props.today) {
    style = {
      ...style,
      ...todayStyle,
    };
  }

  return <TouchableOpacity style={style}></TouchableOpacity>;
}

export default HeatmapSquare;
