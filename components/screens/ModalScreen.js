import React, { useState, useContext } from "react";
import { View, Text } from "react-native";
import { LightFatButton } from "../buttons/LightFatButton";
import { LightThinButton } from "../buttons/LightThinButton";
import { LevelButtonGroup } from "../LevelButtonGroup";
import { h1 } from "../../data/Style";
import { LinearGradient } from "expo-linear-gradient";
import { LevelContext } from "../../LevelContext";
import { formatDateYYYYMMDD } from "../../modules/formatDateYYYYMMDD"
import { Arrow } from "../Arrow"

export const ModalScreen = ({ navigation }) => {
  //TODO: Implement initial state (currently none, but you can still submit)
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [levelDates, setLevelDates] = useContext(LevelContext);
  const today = formatDateYYYYMMDD(new Date())

  const styleButtonGroup = {
    height: 125,
    width: 350,
    margin: 31,
  };

  const styleView = {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  };

  
  const handleLevelSelect = (level) => {
    setSelectedLevel(level);
  };
  
  const handleLevelSubmit = () => {
    navigation.navigate("Main");
    setLevelDates({...levelDates, [today]: selectedLevel})
  };

  const handleSkip = () => {
    navigation.navigate("Main")
    setLevelDates({...levelDates, [today]: 0})
  }

  return (
    <View style={styleView}>
      <LinearGradient
        colors={[
          "#190028",
          "#25013D",
          "#3C0146",
          "#702359",
          "#2D0039",
          "#190028",
        ]}
        locations={[0.1364, 0.363, 0.4745, 0.7111, 0.8983, 1]}
        style={{ width: "100%", height: "100%", position: "absolute" }}
      />
      <Text style={h1}>{"How was your \n pee today?"}</Text>
      <LevelButtonGroup
        handleLevelSelect={handleLevelSelect}
        styleButtonGroup={styleButtonGroup}
      />
      <LightFatButton handlePress={handleLevelSubmit} style={{ margin: 13 }}>
        Log today
      </LightFatButton>
      <LightThinButton handlePress={handleSkip}>
        Skip
      </LightThinButton>
      <Arrow />
    </View>
  );
};
