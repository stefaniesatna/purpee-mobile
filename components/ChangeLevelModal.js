import React, { useState } from "react";
import { Button, Pressable, Modal, View, Text } from "react-native";
import KetoLevelButtonGroup from "./KetoLevelButtonGroup";
import { ketoneLevelsDates } from "../data/SampleData";

function ChangeLevelModal(props) {
  const [ketoLevelSelected, setKetoLevelSelected] = useState(null);

  const style = {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  };
  const styleModal = {
    backgroundColor: "white",
    margin: 20,
    alignItems: "center",
    elevation: 5,
  };
  const styleButton = {
    backgroundColor: "aqua",
    alignItems: "center",
    height: 50,
    width: 150,
    justifyContent: "center",
  };

  const styleButtonGroup = {
    width: 275,
    height: 75,
  };

  function handleKetoLevelSelect(level) {
    setKetoLevelSelected(level);
  }

  function handlePress() {
    setModalVisible(false);
    console.log(
      `Changing keto level selected on the day ${
        props.daySelected ? props.daySelected.dateString : "no day"
      } from ${
        props.daySelected
          ? ketoneLevelsDates[props.daySelected.dateString]
          : "nothing"
      } to ${ketoLevelSelected}`
    );
    //TODO: Implement function to change ketoleveldata for a new, "changed", entry
  }

  return (
    <View style={style}>
      <Modal
        transparent={true}
        visible={props.modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={style}>
          <View style={styleModal}>
            <Text>Change Ketone Level for</Text>
            <KetoLevelButtonGroup
              onKetoLevelSelect={handleKetoLevelSelect}
              styleButtonGroup={styleButtonGroup}
            />
            <Pressable onPress={props.handlePress} style={styleButton}>
              <Text>Submit</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default ChangeLevelModal;
