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
      <LinearGradient
        colors={["#190028", "#3C0146", "#610A68", "#702359", "#190028"]}
        locations={[0, 0.3177, 0.5156, 0.7552, 1]}
        style={styleGradient}
      />
      <Text>Reminder Screen</Text>  
    </View>
  )
}

export default ReminderScreen;
