import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { defaultFont } from "../../data/Style"

export const LightFatButton = (props) => {
  const styleView = {
    justifyContent: "center",
    alignItems: "center",

    width: 200,
    height: 52,
    borderRadius: 30,

    backgroundColor: "white",
    ...props.style,
  };

  const styleText = { 
    alignItems: "center",
    fontSize: 18,
    color: "#A12680",
    ...props.styleText,
  };

  return (
    <TouchableOpacity onPress={props.handlePress}>
      <View style={styleView}>
        <Text style={styleText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};
