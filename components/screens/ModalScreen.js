import React, { useState } from "react"
import { View, Text } from "react-native"
import LightFatButton from "../buttons/LightFatButton"
import KetoLevelButtonGroup from "../KetoLevelButtonGroup"
import { h1, mainText } from "../../data/Style"
import { LinearGradient } from "expo-linear-gradient"
import { styleGradient } from "../../data/Style"

function ModalScreen({ navigation }) {
  //TODO: Implement initial state (currently none, but you can still submit)
  const [ selectedKetoLevel, setSelectedKetoLevel ] = useState(null)
  const styleView = {
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
      <LinearGradient
        colors={["#190028", "#25013D", "#3C0146", "#702359", "#2D0039", "#190028"]}
        locations={[0.1364, 0.363, 0.4745, 0.7111, 0.8983, 1]}
        style={styleGradient}
      />
      <Text style={h1}>How was your pee today?</Text>
      <KetoLevelButtonGroup onKetoLevelSelect={handleKetoLevelSelect} />
      <Text style={mainText}>Selected Keto Level: {selectedKetoLevel}</Text>
      <LightFatButton handlePress={handlePress}>Log today</LightFatButton>
    </View>
  );
}

export default ModalScreen
