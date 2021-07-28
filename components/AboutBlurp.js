import React from "react";
import { View, Text, Dimensions } from "react-native";
import * as WebBrowser from "expo-web-browser";
import { Ionicons } from "@expo/vector-icons";
import { UIColors, secondaryText } from "../data/Style";

export const AboutBlurp = () => {
  const screenWidth = Dimensions.get("window").width;

  const styleWrapper = {
    width: screenWidth * 0.94,
    marginBottom: 28,
    justifySelf: "flex-end",
    alignItems: "center",
    justifyContent: "space-between",
  };
  const styleText = {
    ...secondaryText,
    textAlign: "center",
  };

  const styleLink = {
    ...styleText,
    textDecorationLine: "underline",
  };

  return (
    <View style={styleWrapper}>
      <View style={{ marginBottom: 5 }}>
        <Ionicons name={"logo-github"} color={UIColors.blueFull} size={30} />
      </View>
      <Text style={styleText}>
        Purpee is made and maintained by
        <Text style={styleText}> </Text>
        <Text
          style={styleLink}
          onPress={() =>
            WebBrowser.openBrowserAsync("https://github.com/stefaniesatna")
          }
        >
          @stefaniesatna
        </Text>
        . See the code on
        <Text style={styleText}> </Text>
        {/* TODO: Swap for a link to Purpee code */}
        <Text
          style={styleLink}
          onPress={() =>
            WebBrowser.openBrowserAsync("https://github.com/stefaniesatna")
          }
        >
          GitHub
        </Text>
        .
      </Text>
    </View>
  );
};
