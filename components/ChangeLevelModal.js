import React, { useContext, useState } from "react";
import { Modal, View, Text, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { BlurView } from "expo-blur";

import { LevelContext } from "../LevelContext";
import { LevelButtonGroup } from "./LevelButtonGroup";
import { LightFatButton } from "./buttons/LightFatButton";
import { UIColors, defaultFont } from "../data/Style";

export const ChangeLevelModal = ({
  check,
  daySelected,
  hide,
}) => {
  const [levelDates, setLevelDates] = useContext(LevelContext);
  const [changedLevel, setChangedLevel] = useState(null);

  const style = {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  };
  const styleModal = {
    backgroundColor: "#25013D",
    alignItems: "center",
    borderRadius: 8,
    padding: 5,
    borderColor: UIColors.blueFull,
    borderStyle: "solid",
    borderWidth: 1.5,
  };
  const styleButton = {
    backgroundColor: "white",
    width: 150,
  };
  const styleButtonText = {
    color: "#A12680",
  };

  const styleButtonGroup = {
    paddingVertical: 10,
    paddingHorizontal: 7.5,
    borderRadius: 3,
    marginVertical: 10,
    marginHorizontal: 5,
  };

  const handleLevelChangeSubmit = () => {
    hide();
    if (changedLevel) {
      setLevelDates({ ...levelDates, [daySelected]: changedLevel });
    }
  };

  const handleLevelChangeSelect = (level) => {
    setChangedLevel(level);
  };

  return (
    <Modal
      style={style}
      transparent={true}
      visible={check()}
      onRequestClose={() => {
        hide();
      }}
    >
      <TouchableWithoutFeedback onPress={hide}>
      <BlurView tint="dark" intensity={60} style={{ flex: 1 }}>
        <View style={style}>
          {/* Chose TouchableOpacity with 100% opacity over TouchableWithoutFeedback because 
          TouchableWithoutFeedback doesn't take style as props and therefore messes up the layout
          even when wrapping child components in another View */}
          <TouchableOpacity style={styleModal} onPress={() => {}} activeOpacity={1}>
            <LevelButtonGroup
              handleLevelSelect={handleLevelChangeSelect}
              highlightButton={daySelected ? levelDates[daySelected] : ""}
              styleButtonGroup={styleButtonGroup}
            />
            <LightFatButton
              handlePress={handleLevelChangeSubmit}
              style={styleButton}
              styleText={styleButtonText}
            >
              <Text>Change</Text>
            </LightFatButton>
            <LightFatButton
              handlePress={hide}
              style={{ backgroundColor: "transparent" }}
              styleText={{ color: "white", fontSize: 16 }}
            >
              <Text>Nevermind</Text>
            </LightFatButton>
          </TouchableOpacity>
        </View>
      </BlurView>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
