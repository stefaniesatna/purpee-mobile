import React from "react";
import { View, Text } from "react-native";
import CircleSlider from "react-native-circle-slider";
import { UIColors } from "../data/Style";

function ClockWidget() {

    let degrees = 90;
    const handleChange = (e) => { 
        degrees = e;
        return degrees;
    }

    const style = {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }

    const styleOuterCircle = {
        width: 320,
        height: 320,
        backgroundColor: UIColors.blueFull,
        position: "absolute",
        borderRadius: 160,
    }

    const styleInnerCircle = {
        width: 220,
        height: 220,
        backgroundColor: UIColors.white,
        position: "absolute",
        borderRadius: 110,
    }

    const styleTime = {
        position: "absolute",
    }

    return (
        <View style={style}>
            <View style={styleOuterCircle}/>
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
            <View style={styleInnerCircle}/>
            <View style={styleTime}>
                <Text>{degrees}</Text>
            </View>
        </View>
    )
}

export default ClockWidget