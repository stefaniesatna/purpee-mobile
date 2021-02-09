import React from 'react';
import { View, StyleSheet } from 'react-native';

function Container(props){
    return (
        <View style={styles.container}>
            {props.children}
        </View>
    )
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

export default Container