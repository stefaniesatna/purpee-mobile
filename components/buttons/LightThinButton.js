import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { defaultFont } from "../../data/Style"

export const LightThinButton = (props) => {

  const styleText = {
    alignItems: "center",
    fontSize: 18,
    color: "white",
    ...props.styleText,
  };

  return (
    <TouchableOpacity onPress={props.handlePress}>
        <Text style={styleText}>{props.children}</Text>
    </TouchableOpacity>
  );
};
