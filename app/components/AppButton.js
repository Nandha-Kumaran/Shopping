import React from 'react';
import { View , Text,StyleSheet, TouchableOpacity} from 'react-native';

import colors from '../Config/colors';


function AppButton({title, onPress,color="primary"}) {
    return (
        <TouchableOpacity 
         style={[styles.button,{backgroundColor:colors[color]}]} onPress={onPress} >
            <Text style={styles.text} >{title}</Text>
        
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    button:{
        backgroundColor:colors.primary,
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center',
        padding:20,
        width:'100%',
        marginVertical:7,
    },
    text:{
        color:colors.white,
        fontSize:18,
        textTransform:'uppercase',
        fontWeight:'bold',
    },
})

export default AppButton;