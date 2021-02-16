import React from 'react';
import { View } from 'react-native';

import HeatmapSquare from "./HeatmapSquare";

function HeatmapRow(props){

    const style = {
        flexDirection: "row",
        justifyContent: "center"
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