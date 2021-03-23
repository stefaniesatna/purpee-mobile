import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import Container from "../Container";
import Heatmap from "../heatmap/Heatmap";
import ChangeLevelModal from "../ChangeLevelModal"
import { levels, daysInKetosis } from "../../data/SampleData";
import { contentContainer, UIColors, mainText } from "../../data/Style";

function HomeScreen({ navigation }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [daySelected, setDaySelected] = useState(null);

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
          <Heatmap levels={levels} setIsModalVisible={setIsModalVisible} setDaySelected={setDaySelected} />
        </View>
        <View style={styleBottomView}>
          <Text style={mainText}>{cheering}</Text>
        </View>
      </Container>
    </LinearGradient> 
  );
}

export default HomeScreen;
