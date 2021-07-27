import React from "react";
import { View } from "react-native";
import { Row } from "./Row"
import { exportKetoneLevelsCSV } from "../../modules/userFacingFunctionality/exportKetoneLevelsCSV";
import { emailSupport } from "../../modules/userFacingFunctionality/emailSupport"
import { showPrivacyPolicy } from "../../modules/userFacingFunctionality/showPrivacyPolicy"

export const Settings = () => {
  const styleList = {
    marginTop: 21,
  }

  return (
    <View style={styleList}>
      <Row text={"My ketosis level data"} iconName={"download"} handlePress={exportKetoneLevelsCSV}/>
      <Row text={"Contact"} iconName={"mail"} handlePress={emailSupport}/>
      <Row text={"Privacy Policy"} iconName={"document"} handlePress={showPrivacyPolicy}/>
    </View> 
  );
};
