import React, { useState } from "react";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { Container } from "../Container";
import { WeekdaysHeader } from "../WeekdaysHeader";
import { ChangeLevelModal } from "../ChangeLevelModal";
import { Calendar } from "../Calendar";
import { contentContainer, UIColors } from "../../data/Style";

export const CalendarScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [daySelected, setDaySelected] = useState(null);

  const styleHeader = {
    paddingBottom: 2,
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    borderBottomColor: UIColors.blueMedium,
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  const showModal = () => {
    setModalVisible(true);
  };

  const checkModal = () => {
    return isModalVisible;
  };

  const changeDaySelected = (day) => {
    setDaySelected(day);
  };

  return (
    <LinearGradient
      colors={["#190028", "#25013D", "#2D0039"]}
      locations={[0, 0.7627, 1]}
      style={{ width: "100%", height: "100%", position: "absolute" }}
    >
      <Container>
        <ChangeLevelModal
          daySelected={daySelected ? daySelected.dateString : ""}
          check={checkModal}
          hide={hideModal}
        />
        <View style={contentContainer}>
          <WeekdaysHeader style={styleHeader} />
          <Calendar
            changeDaySelected={changeDaySelected}
            showModal={showModal}
          />
        </View>
      </Container>
    </LinearGradient>
  );
};
