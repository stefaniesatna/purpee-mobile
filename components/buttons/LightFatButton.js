import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

function LightFatButton(props) {

  const styleView = {
    justifyContent: "center",
    alignItems: "center",

    width: 200, 
    height: 52,
    margin: 13,
    borderRadius: 30,

    backgroundColor: "white",
  }

  const styleText = {
    alignItems: "center",
    
    fontSize: 18,
    fontWeight: "600",
    color: "#A12680"
  }

  return (
    <TouchableOpacity onPress={props.handlePress}>
      <View style={styleView}>
        <Text style={styleText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default LightFatButton;
