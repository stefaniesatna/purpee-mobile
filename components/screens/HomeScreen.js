import React, { useState, useContext } from "react";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { LevelContext } from "../../LevelContext"
import Container from "../Container";
import Heatmap from "../heatmap/Heatmap";
import ChangeLevelModal from "../ChangeLevelModal"
import { contentContainer } from "../../data/Style";
import MotivatingMessage from "../MotivatingMessage";
import { calculateStreak } from "../../modules/calculateStreak";

function HomeScreen({ navigation }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [daySelected, setDaySelected] = useState(null);

  const styleBottomView = {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <LinearGradient
      colors={["#190028", "#25013D", "#2D0039"]}
      locations={[0, 0.7627, 1]}
      style={{ width: "100%", height: "100%", position: "absolute" }}
    >
      <Container>
        <ChangeLevelModal 
          daySelected={daySelected ? daySelected : ""}
          setIsModalVisible={setIsModalVisible}
          isModalVisible={isModalVisible}
        />
        <View style={contentContainer}>
          <Heatmap setIsModalVisible={setIsModalVisible} setDaySelected={setDaySelected} />
        </View>
        <View style={styleBottomView}>
          <MotivatingMessage />
        </View>
      </Container>
    </LinearGradient> 
  );
}

export default HomeScreen;
