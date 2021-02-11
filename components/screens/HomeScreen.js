import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Container from '../Container';
import Heatmap from "../heatmap/Heatmap"
import { ketoneLevels, daysInKetosis } from '../../data/SampleData'
import { mainText, contentContainer } from '../../data/Style'
import { shouldUseActivityState } from 'react-native-screens';

function HomeScreen(){
    return (
        <Container>
            <View style={contentContainer}>
                <Heatmap ketoneLevels={ketoneLevels} />
            </View>
            <View style={styles.bottom}>
                <Text style={mainText}>{daysInKetosis} straight days in ketosis 💜</Text>
            </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    bottom: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }
});

export default HomeScreen