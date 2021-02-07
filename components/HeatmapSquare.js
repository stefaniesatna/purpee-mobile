import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import ColourScale from '../data/ColourScale'

function HeatmapSquare(props){

    let style = {
        width: 50,
        height: 50,
        margin: 1.5,
        borderRadius: 3,
        backgroundColor: ColourScale[props.ketoneLevel],
    }

    const todayStyle = {
        borderStyle: "solid",
        borderColor: "red",
        borderWidth: 2
    }

    if (props.today) {
        style = {
            ...style,
            ...todayStyle
        }
    }

    return (
        <View style={style}>
        </View>
    )
}

export default HeatmapSquare