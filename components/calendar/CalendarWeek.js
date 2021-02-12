import React from 'react';
import { View, Text, Button } from 'react-native';
import HeatmapRow from '../heatmap/HeatmapRow';

function CalendarWeek(){

    const style = {
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "100%",

        borderStyle: "solid",
        borderWidth: 2,
        borderColor: "red"
    }

    const buttonStyle = {
        width: 50,
        alignText: "center",

        borderStyle: "solid",
        borderWidth: 2,
        borderColor: "aqua"
    }

    return(
        <View style={style}>
            <Button style={buttonStyle} title={Math.floor(Math.random() * 31).toString()} />
            <Button style={buttonStyle} title={Math.floor(Math.random() * 31).toString()} />
            <Button style={buttonStyle} title={Math.floor(Math.random() * 31).toString()} />
            <Button style={buttonStyle} title={Math.floor(Math.random() * 31).toString()} />
            <Button style={buttonStyle} title={Math.floor(Math.random() * 31).toString()} />
            <Button style={buttonStyle} title={Math.floor(Math.random() * 31).toString()} />
            <Button style={buttonStyle} title={Math.floor(Math.random() * 31).toString()} />
        </View>
    )
}

export default CalendarWeek