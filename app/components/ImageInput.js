import React, { useEffect } from 'react';
import { View, StyleSheet,Image, TouchableWithoutFeedback, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import colors from '../Config/colors';

import { MaterialCommunityIcons } from '@expo/vector-icons';

function ImageInput({imageUri, onChangeImage}) {
    
    const requestPermission =async() => {
        const {granted}= await ImagePicker.requestCameraPermissionsAsync({});
        if (!granted)
        alert('You need to Enable permission to access the Library')
        
    };
    
    useEffect(()=> {
        requestPermission();
    }, []);

    const handlePress=() =>{
        if(!imageUri) selectImage();
        else Alert.alert('Delete','Are you sure you want to delete this image?',[
            {text:'Yes', onPress:()=> onChangeImage(null)},
            {text: 'No'}
        ])
    };

    const selectImage= async()=>{
        try {
          const result= await ImagePicker.launchImageLibraryAsync({
              mediaTypes:ImagePicker.MediaTypeOptions.Images,
              quality: 0.5,
          });
          if(!result.cancelled)
            onChangeImage(result.uri);
        } catch (error) {
          alert("Error reading the Images")
        }
      };

    return (
        <TouchableWithoutFeedback onPress={handlePress} >
        <View style={styles.container} >
            {!imageUri && (<MaterialCommunityIcons color={colors.medium } name="camera" size={40} />)}
            {imageUri && <Image source={{uri:imageUri}} style={styles.image} /> }
        </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        backgroundColor:colors.light,
        borderRadius:15,
        height:100,
        justifyContent:'center',
        width:100,
        overflow:'hidden',
    },
    image:{
        width:'100%',
        height:'100%',
    }
})

export default ImageInput;