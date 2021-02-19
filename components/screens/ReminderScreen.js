import React from "react";
import { Text, View, Switch } from "react-native";

import Container from "../Container";
import { contentContainer, mainText } from "../../data/Style";

function ReminderScreen() {
  const styleDailyLog = {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    paddingRight: 16,
    paddingLeft: 16,
  };

  return (
    <Container>
      <View style={contentContainer}>
        <View style={styleDailyLog}>
          <Text style={mainText}>Daily log reminder</Text>
          <Switch />
        </View>
      </View>
    </Container>
  );
}

export default ReminderScreen;
