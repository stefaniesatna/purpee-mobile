import React from "react"
import { View, Text, TouchableOpacity, Dimensions } from "react-native"
import { UIColors, secondaryText, mainText } from "../../data/Style"
import { Ionicons } from "@expo/vector-icons";

export const Row = ({text, iconName, iconSize, iconColor, handlePress}) => {
    const screenWidth = Dimensions.get("window").width;

    const styleRow = {
        width: screenWidth * 0.94,
        paddingBottom: 21,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    }


    return (
        <View style={styleRow}>
            <Text style={secondaryText}>{text}</Text>
            <TouchableOpacity onPress={handlePress}>
                <Ionicons name={iconName} color={UIColors.blueFull} size={30} /> 
            </TouchableOpacity>
        </View> 
    )
}