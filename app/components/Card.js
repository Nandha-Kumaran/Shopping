import React from 'react';
import { View,Image, StyleSheet, Touchable, TouchableOpacity } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import colors from '../Config/colors';
import AppText from './AppText';

function Card({title, subTitle, image, onPress}) {
    return (
        <TouchableOpacity onPress = {onPress} >
        <View style={styles.card} >
            
            <Image style={styles.image} source={image}/>
            <View style={styles.detailsContainer} >
            <AppText style={styles.title} >{title}</AppText>
            <AppText style={styles.subTitle} >{subTitle}</AppText>
            </View>
        </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card:{
        borderRadius:15,
        backgroundColor:colors.white,
        marginBottom:20,
        overflow:'hidden',
    },
    detailsContainer:{
        padding:20,
    },
    image:{
        width:'100%',
        height:200,

    },
    title:{
        marginBottom:7,
        fontWeight:'bold'
    },
    subTitle:{
        color:colors.secondary,
        fontWeight:'bold',
    }
})
export default Card;