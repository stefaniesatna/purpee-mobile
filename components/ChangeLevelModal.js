import React from "react";
import { Pressable, Modal, View, Text } from "react-native";
import KetoLevelButtonGroup from "./KetoLevelButtonGroup";

function ChangeLevelModal(props) {

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

  return (
    <View style={style}>
      <Modal
        transparent={true}
        visible={props.isModalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={style}>
          <View style={styleModal}>
            <Text>Change Ketone Level for</Text>
            <KetoLevelButtonGroup
              styleButtonGroup={styleButtonGroup}
              handleLevelSelect={props.handleLevelChangeSelect}
            />
            <Pressable onPress={props.handleLevelChangeSubmit} style={styleButton}>
              <Text>Submit</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default ChangeLevelModal;
