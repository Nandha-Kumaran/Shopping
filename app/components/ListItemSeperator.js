import React from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../Config/colors';


function ListItemSeperator() {
    return (
        <View style={styles.separator} />
    );
}

const styles = StyleSheet.create({
    separator:{
        width:'100%',
        height:1,
        color:colors.light      }
})

export default ListItemSeperator;