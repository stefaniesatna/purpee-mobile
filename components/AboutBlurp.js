import React from "react"
import { View, Text, Dimensions } from "react-native"
import { Ionicons } from "@expo/vector-icons";
import { UIColors, secondaryText } from "../data/Style"
import { Anchor } from "./Anchor"

export const AboutBlurp = () => {
    const screenWidth = Dimensions.get("window").width;
    const styleWrapper = {
        width: screenWidth * 0.94,
        marginBottom: 28,
        justifySelf: "flex-end",
        alignItems: "center",
        justifyContent: "space-between"
    }

    return (
        <View style={styleWrapper}>
            <View style={{marginBottom: 5}}>
                <Ionicons name={"logo-github"} color={UIColors.blueFull} size={30} />
            </View>
            <Anchor href={"www.google.com"} style={{...secondaryText, textAlign: "center"}}>Purpee is made and maintained by @stefaniesatna. See the code on GitHub.</Anchor>
        </View>
    )
}