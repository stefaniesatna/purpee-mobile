import React, { useContext } from "react"
import { TouchableOpacity } from "react-native";

import { LevelContext } from "../../LevelContext"
import { ColourScale } from "../../data/ColourScale";
import { formatDateYYYYMMDD } from "../../modules/formatDateYYYYMMDD"
import { UIColors } from "../../data/Style"

export const HeatmapSquare = ({ date, setIsModalVisible, setDaySelected }) => {
  const [ levelDates ] = useContext(LevelContext);

  let style = {
    width: 50,
    height: 50,
    margin: 1.5,
    borderRadius: 3,

    backgroundColor:ColourScale[levelDates[date]],
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

  const handlePress = () => {
    setIsModalVisible(true)
    setDaySelected(date)
  }


  return <TouchableOpacity style={style} onPress={handlePress}></TouchableOpacity>;
}
