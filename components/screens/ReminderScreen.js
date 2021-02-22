import React from "react";
import { Text, View, Switch } from "react-native";

import Container from "../Container";
import ClockWidget from "../ClockWidget"
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
    <ClockWidget />
  )
}

// return (
//   <ClockWidget />
//   // <Container>
//     {/* <View style={contentContainer}>
//       <View style={styleDailyLog}>
//         <Text style={mainText}>Daily log reminder</Text>
//         <Switch />
//       </View>
//       <View>
//         <Text>It's best to log your ketone levels first thing in the morning.</Text>
//       </View>
//       <ClockWidget></ClockWidget>
//     </View>
//   </Container> */}
// );

export default ReminderScreen;
