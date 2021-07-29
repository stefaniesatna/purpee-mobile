import React from "react"
import { View, Text, TouchableOpacity, Dimensions } from "react-native"
import { UIColors, secondaryText, mainText } from "../../data/Style"
import { Ionicons } from "@expo/vector-icons";

export const Row = ({text, iconName, iconSize, iconColor, handlePress}) => {
    const screenWidth = Dimensions.get("window").width;

    const styleRow = {
        width: screenWidth * 0.94,
        paddingBottom: 10.5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    }

    const styleDivider = {
        height: 1,
        width: screenWidth * 0.94,
        backgroundColor: UIColors.blueFull,
        marginBottom: 10.5,
    }

    return (
        <View>
            <TouchableOpacity onPress={handlePress}>
                <View style={styleRow}>
                    <Text style={{...secondaryText, color: UIColors.blueMedium}}>{text}</Text>
                    <Ionicons name={iconName} color={UIColors.blueMedium} size={30} /> 
                </View> 
            </TouchableOpacity>
            <View style={styleDivider}/>
        </View>
    )
}