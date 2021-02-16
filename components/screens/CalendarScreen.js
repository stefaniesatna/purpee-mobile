import React from 'react';
import { View } from 'react-native';
import { CalendarList } from "react-native-calendars"

import Container from "../Container";
import WeekdaysHeader from "../WeekdaysHeader";
import ColourScale from '../../data/ColourScale'
import { contentContainer, UIColors } from '../../data/Style'
import { ketoneLevelsDates } from '../../data/SampleData'

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

  function today(){
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    
    today = yyyy + "-" + mm + "-" + dd 
    return today;
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
              maxDate={today()}
              disableAllTouchEventsForDisabledDays={true}
              markingType={'custom'}
              markedDates={{
                '2021-02-10': {
                  customStyles: {
                    container: {
                      backgroundColor: ColourScale[2]
                    },
                  }
                },
                '2021-02-11': {
                  customStyles: {
                    container: {
                      backgroundColor: ColourScale[4],
                    },
                  }
                }
              }}
            />
        </View>
      </Container>
    );
  }

  export default CalendarScreen