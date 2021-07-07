import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { defaultFont } from "../../data/Style"

export const LevelButton = (props) => {
  const styleButtonInactive = {
    width: 50,
    height: 50,
    margin: 2.5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 3,
  };

  const styleButtonActive = {
    ...styleButtonInactive,

    borderWidth: 1.5,
    borderStyle: "solid",
    borderColor: "#00BFEB",
  };

  return (
    <TouchableOpacity onPress={props.onPress}>
      <View
        style={
          props.isChecked
            ? { ...styleButtonActive, ...props.styleButton }
            : { ...styleButtonInactive, ...props.styleButton }
        }
      >
        <Text style={defaultFont}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};
