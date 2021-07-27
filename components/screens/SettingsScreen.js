import React from "react";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Settings } from "../settingsList/Settings"
import { Container } from "../Container";
import { contentContainer } from "../../data/Style"

export const SettingsScreen = () => {
  return (
    <LinearGradient
      colors={["#190028", "#25013D", "#2D0039"]}
      locations={[0, 0.7627, 1]}
      style={{ width: "100%", height: "100%", position: "absolute" }}
    >
        <Container style={contentContainer}>
            <Settings />
        </Container>
    </LinearGradient>
  );
};
