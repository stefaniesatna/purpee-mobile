import React from "react";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient"

function Container(props) {
  const style = {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
  };

  return <View style={style}>{props.children}</View>;
}

export default Container;
