import React, { useContext } from "react";
import { TouchableOpacity, Dimensions } from "react-native";

import { LevelContext } from "../../LevelContext";
import { ColourScale } from "../../data/ColourScale";
import { formatDateYYYYMMDD } from "../../modules/formatDateYYYYMMDD";
import { UIColors } from "../../data/Style";

export const HeatmapSquare = ({ date, handlePress }) => {
  const [levelDates] = useContext(LevelContext);
  const widthPercentOfScreen = 50/375
  const gapWidthPercentOfScreen = 1.5/375
  const screenWidth = Dimensions.get('window').width

  let style = {
    width: widthPercentOfScreen * screenWidth,
    height: widthPercentOfScreen * screenWidth,
    margin: gapWidthPercentOfScreen * screenWidth,
    borderRadius: 3,

    backgroundColor: levelDates[date] ? ColourScale[levelDates[date]] : ColourScale[0],
  };

  const todayStyle = {
    borderWidth: 1.5,
    borderStyle: "solid",
    borderColor: UIColors.blueFull,
  };

  if (formatDateYYYYMMDD(new Date()) === date) {
    style = {
      ...style,
      ...todayStyle,
    };
  }

  return (
    <TouchableOpacity style={style} onPress={() => handlePress(date)}></TouchableOpacity>
  );
};
