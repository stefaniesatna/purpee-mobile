import React, { useState } from "react";
import { Button, Pressable, Modal, View, Text } from "react-native";
import KetoLevelButtonGroup from "./KetoLevelButtonGroup";
import { ketoneLevelsDates } from "../data/SampleData";

function ChangeLevelModal(props) {
  const [modalVisible, setModalVisible] = useState(props.modalVisible);
  console.log("Is modal visible? ", modalVisible)
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
      justifyContent: "center"
  }

  const [ketoLevelSelected, setKetoLevelSelected] = useState(null);
  const handleKetoLevelSelect = (level) => {
    setKetoLevelSelected(level);
  };

  const handlePress = () => {
    setModalVisible(!modalVisible);
    console.log(
      `Changing keto level selected on the day ${
        props.daySelected ? props.daySelected.dateString : "no day"
      } from ${ props.daySelected ? 
        ketoneLevelsDates[props.daySelected.dateString] : "nothing"
      } to ${ketoLevelSelected}`
    );
    //TODO: Implement function to change ketoleveldata for a new, "changed", entry
  };

  const styleButtonGroup = {
    width: 275,
    height: 75,
  };

  return (
    <View style={style}>
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={style}>
          <View style={styleModal}>
            <Text>
              Change Ketone Level for {props.daySelected ? props.daySelected.dateString : "nothing"}
            </Text>
            <KetoLevelButtonGroup
              onKetoLevelSelect={handleKetoLevelSelect}
              styleButtonGroup={styleButtonGroup}
            />
            <Pressable 
            onPress={handlePress} 
            style={styleButton}
            >
                <Text>Submit</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default ChangeLevelModal;
