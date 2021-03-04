import React, { useState } from "react"
import { View, Text, Button } from "react-native"
import LightFatButton from "../buttons/LightFatButton"
import KetoLevelButtonGroup from "../KetoLevelButtonGroup"
import { styleModalScreenBackground, h1, mainText } from "../../data/Style"

function ModalScreen({ navigation }) {
  //TODO: Implement initial state (currently none, but you can still submit)
  const [ selectedKetoLevel, setSelectedKetoLevel ] = useState(null)
  const styleView = {
    ...styleModalScreenBackground,

    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  };

  const handlePress = () => {
    navigation.navigate("Main")
  }

  const handleKetoLevelSelect = level => {
    setSelectedKetoLevel(level)
  }

  return (
    <View style={styleView}>
      <Text style={h1}>How was your pee today?</Text>
      <KetoLevelButtonGroup onKetoLevelSelect={handleKetoLevelSelect} />
      <Text style={mainText}>Selected Keto Level: {selectedKetoLevel}</Text>
      <LightFatButton handlePress={handlePress}>Log today</LightFatButton>
    </View>
  );
}

export default ModalScreen
