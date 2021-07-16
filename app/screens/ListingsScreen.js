import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';

import Screen from '../components/Screen';
import Card from '../components/Card';
import colors from '../Config/colors';
import routes from '../navigation/routes';

const listings =[
    {
        id:1,
        title:'Red Jacket for Sale',
        price:100,
        image:require('../assets/Redjacket.png'),
    },
    {
        id:2,
        title:'Couch in Great Condition',
        price:1000,
        image:require('../assets/background.jpg'),
    },
    {
        id:3,
        title:'bedsheet ',
        price:1000,
        image:require('../assets/screen.jpg'),
    },
    {
        id:4,
        title:'BlueJacket',
        price:1000,
        image:require('../assets/Bluejacket.jpg'),
    },
    {
        id:5,
        title:'Bikes',
        price:1000,
        image:require('../assets/ns.jpg'),
    },
    {
        id:6,
        title:'Portraits',
        price:1000,
        image:require('../assets/portrait.jpg'),
    },
    {
        id:7,
        title:'Couch in Great Condition',
        price:1000,
        image:require('../assets/background.jpg'),
    },
    {
        id:8,
        title:'Couch in Great Condition',
        price:1000,
        image:require('../assets/background.jpg'),
    },
    {
        id:9,
        title:'Couch in Great Condition',
        price:1000,
        image:require('../assets/background.jpg'),
    },
    {
        id:10,
        title:'Couch in Great Condition',
        price:1000,
        image:require('../assets/background.jpg'),
    },
    
]

function ListingsScreen({ navigation }) {
    return (
       <Screen style={styles.screen}>
           <FlatList
           data={listings}
           keyExtractor={listings => listings.id.toString()}
           renderItem={({item}) =>
            <Card
             title={item.title}
             subTitle={"$"+ item.price}
             image={item.image} 
             onPress={() => navigation.navigate(routes.LISTING_DETAILS, item) }  /> }
           />
       </Screen>
    );
}

const styles = StyleSheet.create({
    screen:{
        padding:20,
        backgroundColor:colors.light
    }
})

export default ListingsScreen;