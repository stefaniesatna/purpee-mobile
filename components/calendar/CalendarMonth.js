import React from 'react';
import { View, Text } from 'react-native';
import { UIColors, secondaryText } from '../../data/Style'
import CalendarWeek from "./CalendarWeek"

function CalendarMonth(props){
    const style = {
        paddingTop: 10,
        paddingBottom: 10,
        alignItems: "center",

        borderBottomStyle: "solid", 
        borderBottomWidth: 1, 
        borderBottomColor: UIColors.blueMedium
    }

    const weeks = [...Array(props.month.weeks)].map((element, index) => <CalendarWeek key={index}/>)
    
    return(
        <View style={style}>
            <Text style={secondaryText}>{props.month.name}</Text>
            {weeks}
        </View>
    )
}

export default CalendarMonth