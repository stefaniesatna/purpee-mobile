import React from 'react';
import { View } from 'react-native';
import { CalendarList } from "react-native-calendars"

import Container from "../Container";
import WeekdaysHeader from "../WeekdaysHeader";
import { contentContainer, UIColors } from '../../data/Style'

function CalendarScreen() {

  const styleHeader = {
    justifyContent: "space-evenly",

    paddingBottom: 2,
    borderBottomWidth: 1, 
    borderBottomStyle: "solid", 
    borderBottomColor: UIColors.blueMedium,
  }
  
  const styleCalendarTheme = {
    "stylesheet.calendar-list.main": {
      calendar: {
        paddingLeft: 0,
        paddingRight: 0,
      }
    },
    'stylesheet.calendar.main': {
      monthView: {
        margin: 0,
        padding: 0,
      }
    },
    'stylesheet.calendar.header': {
      header: {
        alignItems: "center"
      }
    },
    textDayFontFamily: 'Helvetica',
    textMonthFontFamily: 'Helvetica',
    textDayHeaderFontFamily: 'Helvetica',

    monthTextColor: UIColors.blueFull,
    todayTextColor: UIColors.darkPurple,
    dayTextColor: UIColors.blueFull,
  }

    return (
      <Container>
        <View style={contentContainer}>
            <WeekdaysHeader style={styleHeader}/>
            <CalendarList 
              firstDay={1} 
              hideDayNames={true} 
              calendarHeight={320}
              theme={styleCalendarTheme} 
            />
        </View>
      </Container>
    );
  }

  export default CalendarScreen