import React from 'react';
import { Text, View, Switch } from 'react-native';
import Container from "../Container";
import { contentContainer, UIColors, mainText } from '../../data/Style'

function ReminderScreen() {

    const dailyLogStyle = {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingRight: 16,
      paddingLeft: 16,
    }

    return (
      <Container>
        <View style={contentContainer}>
          <View style={dailyLogStyle}>
            <Text style={mainText}>Daily log reminder</Text>
            <Switch/>
          </View>
        </View>
      </Container>
    );
  }

  export default ReminderScreen