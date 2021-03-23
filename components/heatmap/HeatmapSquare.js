import React, { useContext } from "react"
import { TouchableOpacity } from "react-native";

import { LevelContext } from "../../LevelContext"
import ColourScale from "../../data/ColourScale";
import { shortenDate } from "../../data/SampleData"
import { UIColors } from "../../data/Style"

function HeatmapSquare({ date, setIsModalVisible, setDaySelected }) {
  const [levelDates, setLevelDates] = useContext(LevelContext);

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
  
  if (shortenDate(new Date()) === date) {
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

export default HeatmapSquare;
