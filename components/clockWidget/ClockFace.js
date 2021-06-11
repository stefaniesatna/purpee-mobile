import React from "react";
import { View } from "react-native";
import { Time } from "./Time"

export const ClockFace = props => {
    return (
        <View> 
            <Time time={props.time} />
        </View>
    )
}