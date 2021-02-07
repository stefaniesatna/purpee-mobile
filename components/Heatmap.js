import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import HeatmapRow from "./HeatmapRow";
import HeatmapSquare from './HeatmapSquare';
import HeatmapHeader from "./HeatmapHeader";

function Heatmap(props){

    const style = {
        flexDirection: "column"
    }

    const heatmapRows = props.ketoneLevels.map((ketoneLevels, idx) => <HeatmapRow key={idx} ketoneLevels={ketoneLevels} />)

    return (
        <View style={style}>
            <HeatmapHeader />
            {heatmapRows}
        </View>
    )
}

export default Heatmap