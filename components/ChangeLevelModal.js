import React from "react";
import { ImageBackground, Modal, View, Text } from "react-native";
import KetoLevelButtonGroup from "./KetoLevelButtonGroup";
import LightFatButton from "./buttons/LightFatButton";
import { PickerIOSComponent } from "react-native";
import { UIColors, h1, mainText } from "../data/Style"
import { BlurView } from 'expo-blur';

function ChangeLevelModal(props) {

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
      color: "#A12680"
  }

  const styleButtonGroup = {
    paddingVertical: 10,
    paddingHorizontal: 7.5,
    borderRadius: 3,
    marginVertical: 10,
    marginHorizontal: 5

  }

  return (
    <View style={style}>
      <Modal
        transparent={true}
        visible={props.isModalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <BlurView tint="dark" intensity={60} style={{flex: 1}}>
            <View style={style}>
            <View style={styleModal}>
                {/* <Text style={{...h1, color:"#A12680"}}>{props.daySelected}</Text> */}
                <KetoLevelButtonGroup
                handleLevelSelect={props.handleLevelChangeSelect}
                highlightButton={props.previousLevel}
                styleButtonGroup={styleButtonGroup}
                />
                <LightFatButton handlePress={props.handleLevelChangeSubmit} style={styleButton} styleText={styleButtonText}>
                <Text>Change</Text>
                </LightFatButton>
                <LightFatButton handlePress={props.handleLevelChangeSkip} style={{backgroundColor: "transparent"}} styleText={{color: "#A12680", fontSize: 16}}>
                    <Text>Nevermind</Text>
                </LightFatButton>
            </View>
            </View>
        </BlurView>
      </Modal>
    </View>
  );
}

export default ChangeLevelModal;
