import React,{ useState } from 'react';
import { FlatList, StyleSheet,View, Platform,StatusBar } from 'react-native';

import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import ListItemSeperator from '../components/ListItemSeperator';
import colors from '../Config/colors';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

const intialMessages = [
    {
        id:1,
        title: 'Nandha Kumar',
        description: 'Hello this is the first application I try to built with this love and sinciority I really wanna to complete this application and post this on my GitHub repository',
        image: require('../assets/Bluejacket.jpg')
    },
    {
        
        id:2,
        title: 'Alluka Zoldiak',
        description: 'I am very much intrested on this Item is this still availabe for sale ',
        image: require('../assets/Bluejacket.jpg')
    },
]

function MessageScreen(props) {
    const [messages,setMessages]=useState(intialMessages);
    const [refreshing, setRefreshing]= useState(false);


    const handleDelete = (message) => {
        //Delete the messgae from the messages
            setMessages(messages.filter((m)=> m.id !== message.id));
           
    };
    return (
        <Screen >
        <FlatList
            data={messages}
            keyExtractor={messages=> messages.id.toString()}
            renderItem={({item})=>
            <ListItem 
            title ={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message Selected", item)}
            renderRightActions={()=> 
                <ListItemDeleteAction onPress={() => handleDelete(item)} /> }
            />}
            ItemSeparatorComponent={ListItemSeperator}
            refreshing={refreshing}
            onRefresh={()=> {
                setMessages([
                    {
        
                        id:2,
                        title: 'T2',
                        description: 'D2',
                        image: require('../assets/Bluejacket.jpg')
                    },
                ])
            }}
        />
        </Screen>
    );
}

const styles = StyleSheet.create({
    
})

export default MessageScreen;