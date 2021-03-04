import React from "react";
import { View, Text, Button } from "react-native";

import Container from "../Container";
import Heatmap from "../heatmap/Heatmap";
import { ketoneLevels, daysInKetosis } from "../../data/SampleData";
import { mainText, contentContainer } from "../../data/Style";

function HomeScreen({ navigation }) {
  const styleBottomView = {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  };

  let cheering;
  if (daysInKetosis === 0) {
    cheering = `Today is the day to start! 🎯`;
  } else if (daysInKetosis === 1) {
    cheering = `First day in! Purple pee FTW 💜`;
  } else if (daysInKetosis === 5) {
    cheering = `It's what's on the stick that counts 💪`;
  } else if (daysInKetosis === 10) {
    cheering = `Let the stick do the talking 😎`;
  } else if (daysInKetosis === 15) {
    cheering = `If bread was allowed, everyone could do it. Keep it up 🎉`;
  } else if (daysInKetosis === 20) {
    cheering = `To reach inner peace, you shall purple piss 💦`;
  } else if (daysInKetosis > 20 && daysInKetosis < 30) {
    cheering = `Day ${daysInKetosis}. Respect!🎖️`;
  } else if (daysInKetosis > 30) {
    cheering = `Day ${daysInKetosis}. You are the real keto lord 🔥`;
  } else {
    cheering = `${daysInKetosis} straight days in ketosis 💜`;
  }

  return (
    <Container>
      <View style={contentContainer}>
        <Heatmap ketoneLevels={ketoneLevels} />
      </View>
      <View style={styleBottomView}>
        <Text style={mainText}>{cheering}</Text>
        <Button
          onPress={() => navigation.navigate("Modal")}
          title="Open Modal"
        />
      </View>
    </Container>
  );
}

export default HomeScreen;
