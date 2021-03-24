import React, { useState } from "react";
import { View, Text } from "react-native";
import CircleSlider from "react-native-circle-slider";
import { UIColors } from "../data/Style";

function ClockWidget() {
  const [degrees, setDegrees] = useState();

  let time = {
    hours: degreesToTime(degrees).hours,
    mins: degreesToTime(degrees).mins,
  };

  const handleChange = (e) => {
    setDegrees(e);
    time = degreesToTime(degrees);
  };

  function degreesToTime(deg) {
    let fiveMins = Math.floor(deg / 2.5);
    let mins = fiveMins * 5;
    let hours = Math.floor(mins / 60);
    mins -= hours * 60;
    return {
      hours: hours,
      mins: mins,
    };
  }

  const style = {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  };

  const styleOuterCircle = {
    width: 320,
    height: 320,
    backgroundColor: UIColors.blueFull,
    position: "absolute",
    borderRadius: 160,
  };

  const styleInnerCircle = {
    width: 220,
    height: 220,
    backgroundColor: UIColors.white,
    position: "absolute",
    borderRadius: 110,
  };

  const styleTime = {
    position: "absolute",
  };

  return (
    <View style={style}>
      <View style={styleOuterCircle} />
      <CircleSlider
        value={90}
        fillColor={UIColors.blueFull}
        strokeWidth={0}
        meterColor={UIColors.white}
        dialWidth={0}
        dialRadius={135}
        btnRadius={20}
        onValueChange={handleChange}
      />
      <View style={styleInnerCircle} />
      <View style={styleTime}>
        <Text>
          {time.hours} : {time.mins}
        </Text>
      </View>
    </View>
  );
}

export default ClockWidget;
