import React, { useContext } from "react";
import { Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ClockWidget } from "../clockWidget/ClockWidget";
import { NotificationSwitch } from "../buttons/NotificationSwitch";
import { InfoTip } from "../InfoTip";
import { Container } from "../Container";
import { contentContainer } from "../../data/Style";
import { NotificationContext } from "../../notifications/NotificationContext";

export const ReminderScreen = () => {
  const [notification, setNotification] = useContext(NotificationContext);

  const handleAngleChange = (angle) => {
    setNotification({ angle: angle });
  };

  const handleToggleSwitch = (value) => {
    setNotification({ isOn: value });
  };

  const screenWidth = Dimensions.get("window").width;
  return (
    <LinearGradient
      colors={["#190028", "#25013D", "#3C0146", "#702359", "#2D0139"]}
      locations={[0.2258, 0.387, 0.5781, 0.7938, 1]}
      style={{ width: "100%", height: "100%", position: "absolute" }}
    >
      <Container style={{ ...contentContainer }}>
        <NotificationSwitch
          screenWidth={screenWidth}
          onChange={handleToggleSwitch}
          value={notification.isOn}
        />
        <InfoTip screenWidth={screenWidth} />
        <ClockWidget
          screenWidth={screenWidth}
          handleAngleChange={handleAngleChange}
          angle={notification.angle}
        />
      </Container>
    </LinearGradient>
  );
};
