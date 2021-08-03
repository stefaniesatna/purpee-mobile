import React from "react"
import { View, Text } from "react-native"
import { secondaryText, UIColors } from "../data/Style"
import { ColourScale } from "../data/ColourScale"
import { Ionicons } from "@expo/vector-icons";

export const InfoTip = ({ screenWidth }) => {
    const iconWidth = screenWidth * 0.056
    const padding = iconWidth * 0.75
    const styleWrapper = {
        width: screenWidth * 0.94,
        padding: padding,
        flexDirection: "row",
        alignItems: "center",

        borderStyle: "solid",
        borderWidth: 1,
        borderColor: UIColors.blueFull,
        borderRadius: 3,
        backgroundColor: ColourScale[0]
    }

    return (
        <View style={styleWrapper}>
            <View style={{marginRight: padding}}>
                <Ionicons name="bulb" color={UIColors.blueFull} size={iconWidth} />
            </View>
            <Text style={{...secondaryText, flex: 1}}>It's best to log your ketone levels first thing in the morning.</Text>

        </View>
    )
}