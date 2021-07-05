import React, { useState } from "react";
import { Switch, Text, View } from "react-native";
import { UIColors, biggerSecondaryText } from "../../data/Style";

export const NotificationSwitch = ({ screenWidth }) => {
    // TODO: Add to persistent storage 
  const [isEnabled, setEnabled] = useState(false);
  const toggleSwitch = () => {
    setEnabled((prevState) => !prevState);
  };

  const styleWrapper = {
      width: screenWidth * 0.94,
      height: screenWidth * 0.117,
      marginBottom: 21,
      marginTop: 21,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
  };

  return (
    <View style={styleWrapper}>
      <Text style={biggerSecondaryText}>Daily log reminder</Text>
      <Switch
        trackColor={{ true: UIColors.blueFull }}
        thumbColor={"white"}
        ios_backgroundColor={UIColors.blueFull}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};
