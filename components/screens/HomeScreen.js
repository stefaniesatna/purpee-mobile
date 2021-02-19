import React from "react";
import { View, Text } from "react-native";

import Container from "../Container";
import Heatmap from "../heatmap/Heatmap";
import { ketoneLevels, daysInKetosis } from "../../data/SampleData";
import { mainText, contentContainer } from "../../data/Style";

function HomeScreen() {
  const styleBottomView = {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <Container>
      <View style={contentContainer}>
        <Heatmap ketoneLevels={ketoneLevels} />
      </View>
      <View style={styleBottomView}>
        <Text style={mainText}>
          {daysInKetosis} straight days in ketosis 💜
        </Text>
      </View>
    </Container>
  );
}

export default HomeScreen;
