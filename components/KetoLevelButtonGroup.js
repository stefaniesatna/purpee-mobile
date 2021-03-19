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

    borderRadius: 8,

    backgroundColor: "white",
    ...props.styleButtonGroup
  };

  const ketoLevelButtons = ketoLevels.map((ketoLevel) => {
    return (
      <KetoLevelButton
        styleButton={{ backgroundColor: ColourScale[ketoLevel] }}
        key={ketoLevel + 1}
        isChecked={selectedKetoLevel ? (selectedKetoLevel === ketoLevel ? true : false) : props.highlightButton === ketoLevel ? true : false}
        onPress={() => {
            props.handleLevelSelect(ketoLevel)
            setSelectedKetoLevel(ketoLevel)
          }
        }
      >
      </KetoLevelButton>
    );
  });

  return <View style={styleView}>{ketoLevelButtons}</View>;
}

export default KetoLevelButtonGroup;
