import React from "react";
import { Text, View } from "react-native"
import { LinearGradient } from "expo-linear-gradient"

function ReminderScreen() {
  //WIP 
  const styleDailyLog = {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    paddingRight: 16,
    paddingLeft: 16,
  };

  const styleView = {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }

  const styleGradient = {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  }

  return (
    <View style={styleView}>
      <Text>Reminder Screen</Text>  
    </View>
  )
}

export default ReminderScreen;
