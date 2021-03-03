import React from "react";
import { Text, View } from "react-native"
// import ReminderWidget from "../ReminderWidget"

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

  return (
    // <ReminderWidget />
    <View style={styleView}>
      <Text>Reminder Screen</Text>  
    </View>
  )
}

export default ReminderScreen;
