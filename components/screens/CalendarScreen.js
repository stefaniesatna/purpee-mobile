import React from 'react';
import { View } from 'react-native';
import Container from "../Container";
import WeekdaysHeader from "../WeekdaysHeader";
import { contentContainer } from '../../data/Style'
import CalendarMonth from "../calendar/CalendarMonth"

function CalendarScreen() {
    return (
      <Container>
        <View style={contentContainer}>
            <WeekdaysHeader />
            <CalendarMonth />
        </View>
      </Container>
    );
  }

  export default CalendarScreen