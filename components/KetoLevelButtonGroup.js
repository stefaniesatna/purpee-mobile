import React, { useState } from "react";
import { View } from "react-native";
import KetoLevelButton from "./buttons/KetoLevelButton";
import ColourScale from "../data/ColourScale";

function KetoLevelButtonGroup(props) {
  const ketoLevels = [1, 2, 3, 4, 5, 6];

  const [selectedKetoLevel, setSelectedKetoLevel] = useState(null);

  const styleView = {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    height: 125,
    width: 350,
    margin: 31,
    borderRadius: 8,

    backgroundColor: "white",
  };

  const handlePress = (level) => {
    setSelectedKetoLevel(level);
    props.onKetoLevelSelect(level);
  };

  const ketoLevelButtons = ketoLevels.map((ketoLevel) => {
    return (
      <KetoLevelButton
        styleButton={{ backgroundColor: ColourScale[ketoLevel] }}
        onPress={() => {
          handlePress(ketoLevel);
        }}
        key={ketoLevel + 1}
        isChecked={selectedKetoLevel === ketoLevel ? true : false}
      >
        {ketoLevel}
      </KetoLevelButton>
    );
  });

  return <View style={styleView}>{ketoLevelButtons}</View>;
}

export default KetoLevelButtonGroup;
