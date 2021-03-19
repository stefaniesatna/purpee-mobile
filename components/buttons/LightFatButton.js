import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

function LightFatButton(props) {

  const styleView = {
    justifyContent: "center",
    alignItems: "center",

    width: 200, 
    height: 52,
    borderRadius: 30,

    backgroundColor: "white",
    ...props.style
  }

  const styleText = {
    alignItems: "center",
    
    fontFamily: "Helvetica",
    fontSize: 18,
    fontWeight: "400",
    color: "#A12680",
    ...props.styleText
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
