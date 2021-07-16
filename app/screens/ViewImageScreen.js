import React from 'react';
import { Image,View,StyleSheet } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import colors from '../Config/colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';


function viewImageScreen(props) {
    return (
        <View style ={styles.container}>
            <View style= { styles.closeIcon}>
                <MaterialCommunityIcons name="close" color="#fff" size={35} />
            </View>
            <View style= { styles.deleteIcon}>
                <MaterialCommunityIcons name="trash-can-outline" color="#fff" size={35} />

            </View>
       <Image resizeMode="contain"
       style={styles.image}
       source={require('../assets/screen.jpg')} />
     </View>
    );
}
const styles = StyleSheet.create({
    closeIcon:{
        
        position:'absolute',
        top:40,
        left:30,
        
    },
    container:{
        backgroundColor:colors.black,
    },
    deleteIcon:{
        position:'absolute',
        top:40,
        right:30,
    },
    image:{
        height:"100%",
        width:'100%',
    }
})
export default viewImageScreen;