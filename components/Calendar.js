import React, { useContext } from "react";
import { CalendarList } from "react-native-calendars";

import { formatDateYYYYMMDD } from "../modules/formatDateYYYYMMDD";
import { LevelContext } from "../LevelContext";
import { ColourScale } from "../data/ColourScale";
import { UIColors } from "../data/Style";

export const Calendar = ({ changeDaySelected, showModal }) => {
  const [levelDates] = useContext(LevelContext);

  const styleCalendarTheme = {
    "stylesheet.calendar-list.main": {
      calendar: {
        paddingLeft: 0,
        paddingRight: 0,
      },
    },
    "stylesheet.calendar.main": {
      monthView: {
        margin: 0,
        padding: 0,
      },
    },
    "stylesheet.calendar.header": {
      header: {
        alignItems: "center",
      },
    },
    textDayFontFamily: "Montserrat_400Regular",
    textMonthFontFamily: "Montserrat_400Regular",
    textDayHeaderFontFamily: "Montserrat_400Regular",

    monthTextColor: UIColors.blueFull,
    todayTextColor: UIColors.emptyStatePurple,
    dayTextColor: UIColors.blueFull,
    textDisabledColor: UIColors.blueFull,
    backgroundColor: "transparent",
    calendarBackground: "transparent",
  };

  /*
CalendarList requires a markedDates prop which is an object of objects with the dates as properties.

markedDates={{
    '2018-03-28': {
      customStyles: {
        container: {
          backgroundColor: 'green'
        },
      }
    },
    '2018-03-29': {
      customStyles: {
        container: {
          backgroundColor: 'white',
        },
      }
    }
}}

To produce this I'm extracting dates as properties from the levelsDates object to have an array that I can map over. 
After that, I'm mapping in order to create the object of objects. 
Since map always returns an array, I then need to reduce the array of objects into an object of objects.

*/

  const datesArr = Object.keys(levelDates);
  const markedDates = datesArr
    .map((date) => ({
      [date]: {
        customStyles: {
          container: {
            backgroundColor:
              levelDates[date] === 0
                ? "transparent"
                : ColourScale[levelDates[date]],
          },
        },
      },
    }))
    .reduce((acc, currentValue) => {
      return {
        ...acc,
        ...currentValue,
      };
    }, {});

  const handleDayPress = (day) => {
    changeDaySelected(day);
    showModal();
  };

  return (
    <CalendarList
      firstDay={1}
      hideDayNames={true}
      calendarHeight={320}
      theme={styleCalendarTheme}
      maxDate={formatDateYYYYMMDD(new Date())}
      disableAllTouchEventsForDisabledDays={true}
      markingType={"custom"}
      markedDates={markedDates}
      onDayPress={handleDayPress}
    />
  );
};
