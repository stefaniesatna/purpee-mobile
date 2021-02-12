import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { UIColors } from '../data/Style';

function WeekdaysHeader(props){

    const style = {
        ...props.style,
        marginTop: 3,
        marginBottom: 3,
        flexDirection: "row",
        justifyContent: "space-evenly",
    }

    const textStyle = {
        color: UIColors.blueFull,
        width: 50,
        textAlign: "center"
    }

    return (
        <View style={style}>
            <Text style={textStyle} >M</Text>
            <Text style={textStyle} >T</Text>
            <Text style={textStyle} >W</Text>
            <Text style={textStyle} >T</Text>
            <Text style={textStyle} >F</Text>
            <Text style={textStyle} >S</Text>
            <Text style={textStyle} >S</Text>
        </View>
    )
}

export default WeekdaysHeader