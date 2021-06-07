import React from "react";
import { View } from "react-native";
import CircleSlider from "./CircleSlider"
import { Clock } from "./Clock"

export const ClockWidget = () => {

    const style = {
        position: "relative"
    }
    
    const styleClock = {
        position: "absolute",
        top: 0,
        left: 0
    }

    return (
        <View>
            <CircleSlider />
            <Clock style={styleClock}/>
        </View>
    )
}