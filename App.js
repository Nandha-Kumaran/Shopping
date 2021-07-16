
import React ,{useEffect, useState} from 'react';
import { StyleSheet,Dimensions,Switch,TextInput, Text, View ,Alert,Platform,Button,Image ,StatusBar,SafeAreaView} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import {MaterialCommunityIcons} from '@expo/vector-icons';


import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import colors from './app/Config/colors';
import AppButton from './app/components/AppButton';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessageScreen from './app/screens/MessageScreen';
import Icon from './app/components/Icon';
import Screen from './app/components/Screen';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';
import PickerItem from './app/components/PickerItem';
import LoginScreen from './app/screens/LoginScreen';
import LisitingEditScreen from './app/screens/ListingEditScreen';
import ImageInput from './app/components/ImageInput';
import ImageInputList from './app/components/ImageInputList';
import FormImagePicker from './app/components/forms/FormImagePicker';
import RegisterScreen from './app/screens/RegisterScreen';
import AuthNavigator from './app/navigation/AuthNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';

const Link =() => {
  const navigation = useNavigation();

  return (
  <Button
    title="Click"
    onPress={() => navigation.navigate("TweetDetails") }  />
);
};

const Tweets =({navigation}) => (
  <Screen>
    <Text>Tweets</Text>
    <Button 
      title="Click"
      onPress={() => navigation.navigate("TweetDetails", {id:1})} />
  </Screen>
);

const TweetDetails =({ route }) =>(
  <Screen>
    <Text>Tweet Details {route.params.id}</Text>
  </Screen>
);

const Stack = createStackNavigator();
const StackNavigator = () =>(
  <Stack.Navigator
  screenOptions={{
    headerStyle:{backgroundColor:colors.secondary},
    headerTintColor:"#fff",
  }}>
    <Stack.Screen 
    name ="Tweets" 
    component={Tweets}
    options={{
      headerStyle:{backgroundColor:colors.secondary},
      headerTintColor:"#fff",
    }} />
    
    <Stack.Screen               
    name ="TweetDetails" 
    component={TweetDetails}
    options ={{
      headerStyle:{ backgroundColor:"tomato"}
    }} />
  </Stack.Navigator>
);

const Account =() => <Screen><Text>Account</Text></Screen>

const Tab= createBottomTabNavigator();
const TabNavigator =() =>(
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor:"tomato",
      activeTintColor:"#fff",
      inactiveBackgroundColor:"#eee",
      inactiveTintColor:'black'
    }}>
    <Tab.Screen 
    name="Feed"
    component={StackNavigator}
    options={{
      tabBarIcon:({ size,color }) => <MaterialCommunityIcons name="home" size={size} color={color} />
    }} />
    <Tab.Screen name="Account"  component={Account}/>
  </Tab.Navigator>
)

export default function App() {
  return(
     <NavigationContainer theme={navigationTheme} >
      <AppNavigator />
    </NavigationContainer>
    
  );
  }

