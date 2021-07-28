import React from "react"
import { View, Text, Dimensions, TouchableOpacity } from "react-native"
import * as Linking from 'expo-linking';
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
    const styleText = {
        ...secondaryText,
        textAlign: "center"
    }

    const styleLink = {
        ...styleText,
        textDecorationLine: "underline"
    }

    const styleSecondWrapper = {
        flexDirection: "row"
    }

    return (
        <View style={styleWrapper}>
            <View style={{marginBottom: 5}}>
                <Ionicons name={"logo-github"} color={UIColors.blueFull} size={30} />
            </View>
            <Text style={styleText}>
                Purpee is made and maintained by
                <Text style={styleText}> </Text>
                <Text style={styleLink} onPress={() => Linking.openURL("https://www.google.com/")}>@stefaniesatna</Text>
                . See the code on
                <Text style={styleText}> </Text>
                <Text style={styleLink} onPress={() => Linking.openURL("https://www.google.com/")}>GitHub</Text>
                .
            </Text>
        </View>
    )
}