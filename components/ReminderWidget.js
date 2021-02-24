import CircularSlider from 'react-native-circular-slider';
import React, {useState} from "react";
import { View } from "react-native";

function ReminderWidget(){


    const [startAngle, setStartAngle] = useState(0)
    const [angleLength, setAngleLength] = useState(0)

    const style = {
    }

    return (
        <View style={style}>
            <CircularSlider 
                startAngle={startAngle}
                angleLength={angleLength}
                onUpdate={({ startAngle, angleLength }) => {
                    setStartAngle(startAngle)
                    setAngleLength(angleLength)
                }}
                segments={5}
                strokeWidth={40}
                radius={145}
                gradientColorFrom="#ff9800"
                gradientColorTo="#ffcf00"
                showClockFace
                clockFaceColor="#9d9d9d"
                bgCircleColor="#171717"
            />
        </View>
    )
}

export default ReminderWidget