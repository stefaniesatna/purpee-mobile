import React from "react";
import { View, Dimensions } from "react-native";

import { generateArrayOfWeeks } from "../../modules/generateArrayOfWeeks";
import { HeatmapRow } from "./HeatmapRow";
import { WeekdaysHeader } from "../WeekdaysHeader";

export const Heatmap = ({ handleSquarePress }) => {

  const style = {
    padding: 0,
    flexDirection: "column",
    marginRight: "auto",
    marginLeft: "auto",
  };

  const screenWidth = Dimensions.get('window').width
  const screenHeight = Dimensions.get('window').height
  const screenRatio = screenWidth / screenHeight

  /* To make heatmap adjust number of rows according to the device, the following variables represent 4
  different categories of devices: 
    iPhoneBig    represents iPhones 11, 11 Pro, 11 Pro Max, 12 mini, 12, 12 Pro, 12 Pro Max
    iPhoneSmall  represents iPhones 8, 8+, SE (2nd gen)
    iPadSmall    represents iPads 9.7" Pro, 10.2" Pro
    iPadBig      represents iPads 10.5" Air, 11" Pro, 12.9" Pro 
  
  These are the available devices in iOS simulator. 
  
  For differentiating between an iPhone and an iPad, and between iPhoneBig and iPhoneSmall, calculating
  width / height screen ratio and taking it's upper threshold was sufficient. However, the ratio was
  the same for iPadSmall and iPadBig, therefore I also look at the screen height to determine the number
  of rows needed. */ 

  const iPhoneBig = { ratioThreshold: 0.5, numOfRows: 12 }
  const iPhoneSmall = { ratioThreshold: 0.6, numOfRows: 8 }
  const iPadSmall = { heightThreshold: 1100, ratioThreshold: 0.8, numOfRows: 7 }
  const iPadBig = { heightThreshold: 1400, ratioThreshold: 0.8, numOfRows: 8}

  const getNumOfRows = screenRatio => {
    if (screenRatio < iPhoneBig.ratioThreshold) return iPhoneBig.numOfRows
    if (screenRatio < iPhoneSmall.ratioThreshold) return iPhoneSmall.numOfRows
    if (screenRatio < iPadSmall.ratioThreshold && screenHeight < iPadSmall.heightThreshold) return iPadSmall.numOfRows
    if (screenRatio < iPadBig.ratioThreshold && screenHeight < iPadBig.heightThreshold) return iPadBig.numOfRows
    else return 8
  }

  const numOfRows = getNumOfRows(screenRatio)
  const levels = generateArrayOfWeeks(numOfRows);

  const heatmapRows = levels.map((levels, idx) => (
    <HeatmapRow
      key={idx}
      levels={levels}
      handleSquarePress={handleSquarePress}
    />
  ));

  return (
    <View>
      <WeekdaysHeader />
      <View style={style}>{heatmapRows}</View>
    </View>
  );
};
