import React from "react"
import { Text } from 'react-native';
import * as Linking from 'expo-linking';


export const Anchor = (props) => {
    handlePress = () => {
      Linking.openURL(props.href);
    };

    return (
        <Text {...props} onPress={handlePress}>
          {props.children}
        </Text>
    );
  }