import React, { useState } from "react";
import { View } from "react-native";
import { CalendarList } from "react-native-calendars";
import { LinearGradient } from "expo-linear-gradient";

import Container from "../Container";
import WeekdaysHeader from "../WeekdaysHeader";
import ColourScale from "../../data/ColourScale";
import { contentContainer, UIColors } from "../../data/Style";
import { ketoneLevelsDates, shortenDate } from "../../data/SampleData";
import ChangeLevelModal from "../ChangeLevelModal";

function CalendarScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [daySelected, setDaySelected] = useState(null);

  const styleHeader = {
    justifyContent: "space-evenly",

    paddingBottom: 2,
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    borderBottomColor: UIColors.blueMedium,
  };

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
    textDayFontFamily: "Helvetica",
    textMonthFontFamily: "Helvetica",
    textDayHeaderFontFamily: "Helvetica",

    monthTextColor: UIColors.blueFull,
    todayTextColor: UIColors.darkPurple,
    dayTextColor: UIColors.blueFull,
    textDisabledColor: UIColors.blueFull,
    backgroundColor: "transparent",
    calendarBackground: "transparent",
  };

  /* Extracting dates as properties from the ketoneLevelsDates object to have an array
    that I can map over. After that, I'm mapping in order to create an object of objects
    with the dates as properties (the format required by CalendarList) to later pass into
    the markedDates attribute. Since map always returns an array, I then need to reduce the
    array of objects into an object of objects. */

  const datesArr = Object.keys(ketoneLevelsDates);
  const markedDates = datesArr
    .map((date) => ({
      [date]: {
        customStyles: {
          container: {
            backgroundColor:
              ketoneLevelsDates[date] === 0
                ? "transparent"
                : ColourScale[ketoneLevelsDates[date]],
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

  const handlePress = (day) => {
    setDaySelected(day);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false)
  }

  return (
    <LinearGradient
      colors={["#190028", "#25013D", "#2D0039"]}
      locations={[0, 0.7627, 1]}
      style={{ width: "100%", height: "100%", position: "absolute" }}
    >
      <Container>
        <ChangeLevelModal
          daySelected={daySelected}
          modalVisible={modalVisible}
          handlePress={closeModal}
        />
        <View style={contentContainer}>
          <WeekdaysHeader style={styleHeader} />
          <CalendarList
            firstDay={1}
            hideDayNames={true}
            calendarHeight={320}
            theme={styleCalendarTheme}
            maxDate={shortenDate(new Date())}
            disableAllTouchEventsForDisabledDays={true}
            markingType={"custom"}
            markedDates={markedDates}
            onDayPress={handlePress}
          />
        </View>
      </Container>
    </LinearGradient>
  );
}

export default CalendarScreen;
