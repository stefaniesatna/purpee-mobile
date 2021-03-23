import React, { useContext, useState } from "react";
import { Modal, View, Text } from "react-native";
import { BlurView } from "expo-blur";

import { LevelContext } from "../LevelContext"
import KetoLevelButtonGroup from "./KetoLevelButtonGroup";
import LightFatButton from "./buttons/LightFatButton";
import { UIColors } from "../data/Style";

function ChangeLevelModal({ isModalVisible, setIsModalVisible, daySelected }) {
  const [levelDates, setLevelDates] = useContext(LevelContext)
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
    setIsModalVisible(false);
    if (changedLevel){
      setLevelDates({ ...levelDates, [daySelected]: changedLevel });
    }
  };

  const handleLevelChangeSkip = () => {
    setIsModalVisible(false);
  };

  const handleLevelChangeSelect = (level) => {
    setChangedLevel(level);
  };

  return (
      <Modal
        style = {style}
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <BlurView tint="dark" intensity={60} style={{ flex: 1 }}>
          <View style={style}>
            <View style={styleModal}>
              {/* <Text style={{...h1, color:"#A12680"}}>{props.daySelected}</Text> */}
              <KetoLevelButtonGroup
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
                handlePress={handleLevelChangeSkip}
                style={{ backgroundColor: "transparent" }}
                styleText={{ color: "#A12680", fontSize: 16 }}
              >
                <Text>Nevermind</Text>
              </LightFatButton>
            </View>
          </View>
        </BlurView>
      </Modal>
  );
}

export default ChangeLevelModal;
