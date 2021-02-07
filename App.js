import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import Heatmap from './components/Heatmap'
import { ketoneLevels } from './data/SampleData'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Heatmap ketoneLevels={ketoneLevels} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
