import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import HeatmapSquare from "./HeatmapSquare";

function HeatmapRow(props){

    const style = {
        flexDirection: "row"
    }

    const heatmapSquares = props.ketoneLevels.map((ketoneLevel, idx) => {
        return (
            <HeatmapSquare key={idx} ketoneLevel={ketoneLevel}/>
        )
    })

    return (
        <View style={style}>
            {heatmapSquares}
        </View>
    )
}

export default HeatmapRow