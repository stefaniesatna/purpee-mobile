import React from "react";
import { Text, View } from "react-native"

function ReminderScreen() {
  const styleView = {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
  return (
    <View style={styleView}>
      <Text>Reminder Screen</Text>  
    </View>
  )
}

export default ReminderScreen;
