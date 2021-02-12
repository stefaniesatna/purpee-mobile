import React from 'react';
import { View } from 'react-native';
import Container from "../Container";
import WeekdaysHeader from "../WeekdaysHeader";
import { contentContainer, UIColors } from '../../data/Style'
import CalendarMonth from "../calendar/CalendarMonth"
import {monthsData} from "../../data/SampleData"

function CalendarScreen() {

  const headerStyle = {
    paddingBottom: 2,
    borderBottomStyle: "solid", 
    borderBottomWidth: 1, 
    borderBottomColor: UIColors.blueMedium
  }

  const months = monthsData.map(element => <CalendarMonth key={element+1} month={element} />)

    return (
      <Container>
        <View style={contentContainer}>
            <WeekdaysHeader style={headerStyle}/>
            {months}
        </View>
      </Container>
    );
  }

  export default CalendarScreen