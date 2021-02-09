import React from "react"
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import CheckCircleFillIcon from "react-native-bootstrap-icons/icons/check-circle-fill";


function Navbar(){

    const style = {
        width: "100%",
        height: 83,

        borderTopStyle: "solid",
        borderTopWidth: 2,

        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"


    }

    return(
        <View style={style}>
            <CheckCircleFillIcon width="50" height="50" fill="rgb(189, 189, 189)" />
            <Text>Hello</Text>
            <Text>World</Text>
            <Text>Space</Text>
        </View>
    )
}

export default Navbar