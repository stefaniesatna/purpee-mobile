import React, { useState, useContext } from "react";
import { View } from "react-native";
import { CalendarList } from "react-native-calendars";
import { LinearGradient } from "expo-linear-gradient";

import Container from "../Container";
import WeekdaysHeader from "../WeekdaysHeader";
import ColourScale from "../../data/ColourScale";
import { contentContainer, UIColors } from "../../data/Style";
import { shortenDate } from "../../data/SampleData";
import ChangeLevelModal from "../ChangeLevelModal"
import { LevelContext } from "../../LevelContext"
import Calendar from "../Calendar"

function CalendarScreen() {
  // const [levelDates, setLevelDates] = useContext(LevelContext)
  // const [isModalVisible, setIsModalVisible] = useState(false);
  // const [daySelected, setDaySelected] = useState(null);
  const [changedLevel, setChangedLevel] = useState(null);


  const styleHeader = {
    justifyContent: "space-evenly",

    paddingBottom: 2,
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    borderBottomColor: UIColors.blueMedium,
  };

  // const styleCalendarTheme = {
  //   "stylesheet.calendar-list.main": {
  //     calendar: {
  //       paddingLeft: 0,
  //       paddingRight: 0,
  //     },
  //   },
  //   "stylesheet.calendar.main": {
  //     monthView: {
  //       margin: 0,
  //       padding: 0,
  //     },
  //   },
  //   "stylesheet.calendar.header": {
  //     header: {
  //       alignItems: "center",
  //     },
  //   },
  //   textDayFontFamily: "Helvetica",
  //   textMonthFontFamily: "Helvetica",
  //   textDayHeaderFontFamily: "Helvetica",

  //   monthTextColor: UIColors.blueFull,
  //   todayTextColor: "white",
  //   dayTextColor: UIColors.blueFull,
  //   textDisabledColor: UIColors.blueFull,
  //   backgroundColor: "transparent",
  //   calendarBackground: "transparent",
  // };

  // /* Extracting dates as properties from the levelsDates object to have an array
  //   that I can map over. After that, I'm mapping in order to create an object of objects
  //   with the dates as properties (the format required by CalendarList) to later pass into
  //   the markedDates attribute. Since map always returns an array, I then need to reduce the
  //   array of objects into an object of objects. */

  // const datesArr = Object.keys(levelDates);
  // const markedDates = datesArr
  //   .map((date) => ({
  //     [date]: {
  //       customStyles: {
  //         container: {
  //           backgroundColor:
  //             levelDates[date] === 0
  //               ? "transparent"
  //               : ColourScale[levelDates[date]],
  //         },
  //       },
  //     },
  //   }))
  //   .reduce((acc, currentValue) => {
  //     return {
  //       ...acc,
  //       ...currentValue,
  //     };
  //   }, {});

  // const handleDayPress = (day) => {
  //   setDaySelected(day);
  //   setIsModalVisible(true);
  // };

  // const handleLevelChangeSubmit = () => {
  //   setIsModalVisible(false)
  //   setLevelDates({...levelDates, [daySelected.dateString]: changedLevel})
  // }

  // const handleLevelChangeSkip = () => {
  //   setIsModalVisible(false)
  // }

  // const handleLevelChangeSelect = level => {
  //   setChangedLevel(level)
  // }
  
  return (
    <LinearGradient
      colors={["#190028", "#25013D", "#2D0039"]}
      locations={[0, 0.7627, 1]}
      style={{ width: "100%", height: "100%", position: "absolute" }}
    >
      <Container>
          {/* <ChangeLevelModal
            daySelected={daySelected ? daySelected.dateString : ""}
            previousLevel={daySelected ? levelDates[daySelected.dateString] : ""}
            isModalVisible={isModalVisible}
            handleLevelChangeSubmit={handleLevelChangeSubmit}
            handleLevelChangeSelect={handleLevelChangeSelect}
            handleLevelChangeSkip={handleLevelChangeSkip}
          /> */}
        <View style={contentContainer}>
          <WeekdaysHeader style={styleHeader} />
          <Calendar />
        </View>
      </Container>
    </LinearGradient>
  );
}

export default CalendarScreen;
