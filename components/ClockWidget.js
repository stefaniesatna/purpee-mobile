import React from "react";
import { View } from "react-native";
import CircleSlider from "react-native-circle-slider";
import { UIColors } from "../data/Style";

function ClockWidget() {

    const style = {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }

    const styleOuterCircle = {
        width: 300,
        height: 300,
        backgroundColor: "green",
        position: "absolute",
        borderRadius: 150,
    }

    return (
        <View style={style}>
            <View style={styleOuterCircle}/>
            <CircleSlider 
                value={360}
                fillColor={UIColors.white}
                strokeColor={UIColors.blueFull}
                meterColor={UIColors.blueFull}
                dialWidth={0}
                dialRadius={100}

            />
        </View>
    )
}

export default ClockWidget