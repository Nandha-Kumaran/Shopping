import React from 'react';
import { View,FlatList, StyleSheet } from 'react-native';


import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import colors from '../Config/colors';
import Icon from '../components/Icon';
import ListItemSeperatorComponent from '../components/ListItemSeperator';


const menuItems=[
    {
        title:'My Listings',
        icon:{
            name: "email",
            backgroundColor:colors.primary
        },
    },
    {
        title:'My Message',
        icon:{
            name: "email",
            backgroundColor:colors.secondary
        },
        targetScreen: "Messages"
    },
]

function AccountScreen({ navigation }) {
    return (
       <Screen style={styles.screen} > 
           <View style={styles.container}>

           <ListItem
           title="Alluka Zholiak"
           subTitle= "nandha0007surya@gmail.com"
           image={require("../assets/Bluejacket.jpg")} />
           </View>
           <View style={styles.container}>
               <FlatList 
               data={menuItems}
               keyExtractor={menuItems => menuItems.title}
               ItemSeparatorComponent={ListItemSeperatorComponent}
               renderItem={({item}) =>
                    <ListItem
                    title ={item.title}
                    IconComponent={
                        <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />
                    }
                    onPress={ ()=>navigation.navigate(item.targetScreen)}
                    /> }
               />
           </View>
           <ListItem
           title="Log Out"
           IconComponent={
               <Icon name ="logout" backgroundColor='#ffe66d' />
           } />
       </Screen>
    );
}

const styles = StyleSheet.create({
    container:{
        marginVertical:20,
    },
    screen:{
        backgroundColor:colors.light
    }
})
export default AccountScreen;