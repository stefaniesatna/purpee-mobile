import React from 'react';
import { View } from 'react-native';
import { CalendarList } from "react-native-calendars"

import Container from "../Container";
import WeekdaysHeader from "../WeekdaysHeader";
import ColourScale from '../../data/ColourScale'
import { contentContainer, UIColors } from '../../data/Style'
import { ketoneLevelsDates } from '../../data/SampleData'
import { acc } from 'react-native-reanimated';

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

  function today() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    today = yyyy + "-" + mm + "-" + dd
    return today;
  }

  /* Extracting dates as properties from the ketoneLevelsDates object to have an array
    that I can map over. After that, I'm mapping in order to create an object of objects
    with the dates as properties (the format required by CalendarList) to later pass into
    the markedDates attribute. Since map always returns an array, I then need to reduce the
    array of objects into an object of objects. */

  const datesArr = Object.keys(ketoneLevelsDates)
  const markedDates = datesArr.map(date => ({
    [date]: {
      customStyles: {
        container: {
          backgroundColor: ColourScale[ketoneLevelsDates[date]]
        }
      }
    }
  })).reduce((acc, currentValue) => {
    return {
      ...acc, 
      ...currentValue
    }
  }, {})
  

  return (
    <Container>
      <View style={contentContainer}>
        <WeekdaysHeader style={styleHeader} />
        <CalendarList
          firstDay={1}
          hideDayNames={true}
          calendarHeight={320}
          theme={styleCalendarTheme}
          maxDate={today()}
          disableAllTouchEventsForDisabledDays={true}
          markingType={'custom'}
          markedDates={markedDates}
        />
      </View>
    </Container>
  );
}

export default CalendarScreen