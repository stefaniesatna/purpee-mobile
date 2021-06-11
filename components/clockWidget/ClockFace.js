import React from "react";
import { View, Text } from "react-native";


export const ClockFace = props => {

  const { time } = props

  return (
    <Text>{time.hours} : {time.mins}</Text>
  )

}