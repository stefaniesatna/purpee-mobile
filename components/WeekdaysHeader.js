import React from "react";
import { Text, View } from "react-native";
import { dayHeaderText } from "../data/Style";

export const WeekdaysHeader = (props) => {
  const style = {
    marginTop: 3,
    marginBottom: 3,
    flexDirection: "row",
    justifyContent: "space-around",
    ...props.style,
  };

  return (
    <View style={style}>
      <Text style={dayHeaderText}>M</Text>
      <Text style={dayHeaderText}>T</Text>
      <Text style={dayHeaderText}>W</Text>
      <Text style={dayHeaderText}>T</Text>
      <Text style={dayHeaderText}>F</Text>
      <Text style={dayHeaderText}>S</Text>
      <Text style={dayHeaderText}>S</Text>
    </View>
  );
};
