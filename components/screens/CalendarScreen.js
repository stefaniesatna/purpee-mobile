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

  return (
    <LinearGradient
      colors={["#190028", "#25013D", "#2D0039"]}
      locations={[0, 0.7627, 1]}
      style={{ width: "100%", height: "100%", position: "absolute" }}
    >
      <Container>
        <ChangeLevelModal
          daySelected={daySelected ? daySelected.dateString : ""}
          setModalVisible={setModalVisible}
          isModalVisible={isModalVisible}
        />
        <View style={contentContainer}>
          <WeekdaysHeader style={styleHeader} />
          <Calendar
            setDaySelected={setDaySelected}
            setModalVisible={setModalVisible}
          />
        </View>
      </Container>
    </LinearGradient>
  );
};
