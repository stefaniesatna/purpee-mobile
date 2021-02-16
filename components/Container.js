import React from 'react';
import { View } from 'react-native';

function Container(props){

    const style = {
      flex: 1,
      flexDirection: "column",
      alignItems: 'center',

      height: "100%",
      
      backgroundColor: '#fff',
    }

    return (
        <View style={style}>
            {props.children}
        </View>
    )
}

export default Container