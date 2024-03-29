import React, { useState } from "react";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { Container } from "../Container";
import { Heatmap } from "../heatmap/Heatmap";
import { ChangeLevelModal } from "../ChangeLevelModal";
import { contentContainer } from "../../data/Style";
import { MotivatingMessage } from "../MotivatingMessage";

export const HomeScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [daySelected, setDaySelected] = useState(null);

  const styleBottomView = {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  };

  const handleSquarePress = (date) => {
    setModalVisible(true);
    setDaySelected(date);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  const checkModal = () => {
    return isModalVisible;
  };

  return (
    <LinearGradient
      colors={["#190028", "#25013D", "#2D0039"]}
      locations={[0, 0.7627, 1]}
      style={{ width: "100%", height: "100%", position: "absolute" }}
    >
      <Container>
        <ChangeLevelModal
          daySelected={daySelected || ""}
          hide={hideModal}
          check={checkModal}
        />
        <View style={contentContainer}>
          <Heatmap handleSquarePress={handleSquarePress} />
        </View>
        <View style={styleBottomView}>
          <MotivatingMessage />
        </View>
      </Container>
    </LinearGradient>
  );
};
