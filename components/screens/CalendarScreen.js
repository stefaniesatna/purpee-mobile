import React from 'react';
import { View } from 'react-native';
import Container from "../Container";
import WeekdaysHeader from "../WeekdaysHeader";
import { contentContainer, UIColors } from '../../data/Style'
import CalendarMonth from "../calendar/CalendarMonth"
import {monthsData} from "../../data/SampleData"

import {CalendarList} from "react-native-calendars"

function CalendarScreen() {

  const headerStyle = {
    paddingBottom: 2,
    borderBottomStyle: "solid", 
    borderBottomWidth: 1, 
    borderBottomColor: UIColors.blueMedium,
    justifyContent: "space-evenly",
  }
    return (
      <Container>
        <View style={contentContainer}>
            <WeekdaysHeader style={headerStyle}/>
            <CalendarList 
              firstDay={1} 
              hideDayNames={true} 
              calendarHeight={320}
              theme={{
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

                todayTextColor: UIColors.darkPurple,
                dayTextColor: UIColors.blueFull,
              }} 
            />
        </View>
      </Container>
    );
  }

  export default CalendarScreen