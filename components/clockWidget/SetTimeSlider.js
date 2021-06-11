import React from "react";
import { View } from "react-native";
import CircleSlider from "./CircleSlider"

export const SetTimeSlider = ({ customiseSlider }) => { 

    const styleSliderWrapper = {
        position: "absolute",
        alignSelf: "center",
    }

    return (
        <View style={styleSliderWrapper}>
            <CircleSlider
                btnRadius={customiseSlider.btnRadius}
                dialRadius={customiseSlider.dialRadius}
                dialWidth={customiseSlider.dialWidth}
                meterColor={customiseSlider.meterColor}
                textColor={customiseSlider.textColor}
                fillColor={customiseSlider.fillColor}
                onValueChange={customiseSlider.onValueChange}
                strokeColor={customiseSlider.strokeColor}
                strokeWidth={customiseSlider.strokeWidth}
                textSize={customiseSlider.textSize}
                value={customiseSlider.value}
            />
        </View>
    )
}