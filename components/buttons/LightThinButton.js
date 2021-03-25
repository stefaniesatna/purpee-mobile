import React from "react";
import { Text, TouchableOpacity } from "react-native";

export const LightThinButton = (props) => {

  const styleText = {
    alignItems: "center",

    fontFamily: "Helvetica",
    fontSize: 18,
    fontWeight: "400",
    color: "white",
    ...props.styleText,
  };

  return (
    <TouchableOpacity onPress={props.handlePress}>
        <Text style={styleText}>{props.children}</Text>
    </TouchableOpacity>
  );
};
