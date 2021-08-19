import React, { useState } from "react";
import { View } from "react-native";
import { LevelButton } from "./buttons/LevelButton";
import { ColourScale } from "../data/ColourScale";
import { UIColors } from "../data/Style";

export const LevelButtonGroup = (props) => {
  const styleView = {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    borderRadius: 8,

    backgroundColor: UIColors.white,
    ...props.styleButtonGroup,
  };

  const levels = [1, 2, 3, 4, 5, 6];
  const [selectedLevel, setSelectedLevel] = useState(null);

  const levelButtons = levels.map((level) => {
    return (
      <LevelButton
        styleButton={{ backgroundColor: ColourScale[level] }}
        key={level + 1}
        isChecked={
          selectedLevel
            ? selectedLevel === level
            : props.highlightButton === level
        }
        onPress={() => {
          setSelectedLevel(level);
          props.handleLevelSelect(level);
        }}
      ></LevelButton>
    );
  });

  return <View style={styleView}>{levelButtons}</View>;
};
