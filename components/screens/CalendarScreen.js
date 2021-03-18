import React, { useState } from "react";
import { View } from "react-native";
import { CalendarList } from "react-native-calendars";
import { LinearGradient } from "expo-linear-gradient";

import Container from "../Container";
import WeekdaysHeader from "../WeekdaysHeader";
import ColourScale from "../../data/ColourScale";
import { contentContainer, UIColors } from "../../data/Style";
import { shortenDate } from "../../data/SampleData";
import ChangeLevelModal from "../ChangeLevelModal"

function CalendarScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [daySelected, setDaySelected] = useState(null);
  console.log("DaySelected: ", daySelected)
  const [ketoneLevelsDates, setKetoneLevelsDates] = useState({
  "2020-12-27": Math.floor(Math.random() * 7),
  "2020-12-28": Math.floor(Math.random() * 7),
  "2020-12-29": Math.floor(Math.random() * 7),
  "2020-12-30": Math.floor(Math.random() * 7),
  "2020-12-31": Math.floor(Math.random() * 7),
  "2021-01-01": Math.floor(Math.random() * 7),
  "2021-01-02": Math.floor(Math.random() * 7),
  "2021-01-03": Math.floor(Math.random() * 7),
  "2021-01-04": Math.floor(Math.random() * 7),
  "2021-01-05": Math.floor(Math.random() * 7),
  "2021-01-06": Math.floor(Math.random() * 7),
  "2021-01-07": Math.floor(Math.random() * 7),
  "2021-01-08": Math.floor(Math.random() * 7),
  "2021-01-09": Math.floor(Math.random() * 7),
  "2021-01-10": Math.floor(Math.random() * 7),
  "2021-01-11": Math.floor(Math.random() * 7),
  "2021-01-12": Math.floor(Math.random() * 7),
  "2021-01-13": Math.floor(Math.random() * 7),
  "2021-01-14": Math.floor(Math.random() * 7),
  "2021-01-15": Math.floor(Math.random() * 7),
  "2021-01-16": Math.floor(Math.random() * 7),
  "2021-01-17": Math.floor(Math.random() * 7),
  "2021-01-18": Math.floor(Math.random() * 7),
  "2021-01-19": Math.floor(Math.random() * 7),
  "2021-01-20": Math.floor(Math.random() * 7),
  "2021-01-21": Math.floor(Math.random() * 7),
  "2021-01-22": Math.floor(Math.random() * 7),
  "2021-01-23": Math.floor(Math.random() * 7),
  "2021-01-24": Math.floor(Math.random() * 7),
  "2021-01-25": Math.floor(Math.random() * 7),
  "2021-01-26": Math.floor(Math.random() * 7),
  "2021-01-27": Math.floor(Math.random() * 7),
  "2021-01-28": Math.floor(Math.random() * 7),
  "2021-01-29": Math.floor(Math.random() * 7),
  "2021-01-30": Math.floor(Math.random() * 7),
  "2021-01-31": Math.floor(Math.random() * 7),
  "2021-02-01": Math.floor(Math.random() * 7),
  "2021-02-02": Math.floor(Math.random() * 7),
  "2021-02-03": Math.floor(Math.random() * 7),
  "2021-02-04": Math.floor(Math.random() * 7),
  "2021-02-05": Math.floor(Math.random() * 7),
  "2021-02-06": Math.floor(Math.random() * 7),
  "2021-02-07": Math.floor(Math.random() * 7),
  "2021-02-08": Math.floor(Math.random() * 7),
  "2021-02-09": Math.floor(Math.random() * 7),
  "2021-02-10": Math.floor(Math.random() * 7),
  "2021-02-11": Math.floor(Math.random() * 7),
  "2021-02-12": Math.floor(Math.random() * 7),
  "2021-02-13": Math.floor(Math.random() * 7),
  "2021-02-14": Math.floor(Math.random() * 7),
  "2021-02-15": Math.floor(Math.random() * 7),
  "2021-02-16": Math.floor(Math.random() * 7),
  "2021-02-17": Math.floor(Math.random() * 7),
  "2021-02-18": Math.floor(Math.random() * 7),
  "2021-02-19": Math.floor(Math.random() * 7),
  "2021-02-20": Math.floor(Math.random() * 7),
  "2021-02-21": Math.floor(Math.random() * 7),
  "2021-02-22": Math.floor(Math.random() * 7),
  "2021-02-23": Math.floor(Math.random() * 7),
  "2021-02-24": Math.floor(Math.random() * 7),
  "2021-02-25": Math.floor(Math.random() * 7),
  "2021-02-26": Math.floor(Math.random() * 7),
  "2021-02-27": Math.floor(Math.random() * 7),
  "2021-02-28": Math.floor(Math.random() * 7),
  "2021-03-01": Math.floor(Math.random() * 7),
  "2021-03-02": Math.floor(Math.random() * 7),
  "2021-03-03": Math.floor(Math.random() * 7),
  "2021-03-04": Math.floor(Math.random() * 7),
  "2021-03-05": Math.floor(Math.random() * 7),
  "2021-03-06": Math.floor(Math.random() * 7),
  "2021-03-07": Math.floor(Math.random() * 7),
  "2021-03-08": Math.floor(Math.random() * 7),
  "2021-03-09": Math.floor(Math.random() * 7),
  "2021-03-10": Math.floor(Math.random() * 7),
  "2021-03-11": Math.floor(Math.random() * 7),
  "2021-03-12": Math.floor(Math.random() * 7),
  "2021-03-13": Math.floor(Math.random() * 7),
  "2021-03-14": Math.floor(Math.random() * 7),
  "2021-03-15": Math.floor(Math.random() * 7),
  "2021-03-16": Math.floor(Math.random() * 7),
  "2021-03-17": Math.floor(Math.random() * 7),
  })

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
    console.log(day)
    setDaySelected(day);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false)
    setKetoneLevelsDates({...ketoneLevelsDates, [daySelected.dateString]: 6})
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
