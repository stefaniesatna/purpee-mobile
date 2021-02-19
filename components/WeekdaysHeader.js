import React from "react";
import { Text, View } from "react-native";

import { UIColors } from "../data/Style";

function WeekdaysHeader(props) {
  const style = {
    marginTop: 3,
    marginBottom: 3,
    flexDirection: "row",
    justifyContent: "space-evenly",
    ...props.style,
  };

  const styleText = {
    color: UIColors.blueFull,
    width: 50,
    textAlign: "center",
  };

  return (
    <View style={style}>
      <Text style={styleText}>M</Text>
      <Text style={styleText}>T</Text>
      <Text style={styleText}>W</Text>
      <Text style={styleText}>T</Text>
      <Text style={styleText}>F</Text>
      <Text style={styleText}>S</Text>
      <Text style={styleText}>S</Text>
    </View>
  );
}

export default WeekdaysHeader;
