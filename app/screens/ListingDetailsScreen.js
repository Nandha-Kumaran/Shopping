import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import AppText from '../components/AppText';
import colors from '../Config/colors';
import ListItem from '../components/ListItem';

function ListingDetailsScreen({ route}) {
    const listing = route.params;
    return (
        <View>
            <Image style={styles.image} source={listing.image} />
            <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{listing.title}</AppText>
            <AppText style={styles.price}>${listing.price}</AppText>
            <View style={styles.userContainer} >

                <ListItem 
                    image={require("../assets/Bluejacket.jpg")}
                    title="Alluka Zholdiak"
                    subTitle="5 Listings"
                />
            </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    detailsContainer:{
        padding:20,
    },
    image:{
        width:'100%',
        height:300,
    },
    title:{
        fontSize:22,  
        fontWeight:'900',
    },
    userContainer:{
        marginVertical:40,
    },

    price:{
        fontWeight:'bold',
        fontSize:19,
        color:colors.secondary,
        marginVertical:10,
    }
})
export default ListingDetailsScreen;