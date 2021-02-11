import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import HeatmapRow from "./HeatmapRow";
import HeatmapSquare from './HeatmapSquare';
import WeekdaysHeader from "../WeekdaysHeader";

function Heatmap(props){

    const style = {
        flexDirection: "column",
    }

    const heatmapRows = props.ketoneLevels.map((ketoneLevels, idx) => <HeatmapRow key={idx} ketoneLevels={ketoneLevels} />)

    return (
        <View style={style}>
            <WeekdaysHeader />
            {heatmapRows}
        </View>
    )
}

export default Heatmap