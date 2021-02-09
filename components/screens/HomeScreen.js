import React from 'react';
import { View, StyleSheet } from 'react-native';
import Container from '../Container';
import Heatmap from "../heatmap/Heatmap"
import { ketoneLevels } from '../../data/SampleData'

function HomeScreen(){
    return (
        <Container>
            <View style={styles.contentContainer}>
                <Heatmap ketoneLevels={ketoneLevels} />
            </View>
            <View style={styles.bottom}>
            </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    contentContainer: {
      margin: 36
    },
  
    bottom: {
      flex: 1,
      justifyContent: "flex-end",
      width: "100%",
    }
});

export default HomeScreen