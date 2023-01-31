import React, { useEffect, useState, TouchableOpacity} from "react";

import {View,Text,StyleSheet,Button,ScrollView,SafeAreaView,StatusBar,Image,TextInput,setInput,Pressable,ImageBackground, AppRegistry,Platform,input} from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useFonts } from "expo-font";

import { styles } from "./Style";

import { createDrawerNavigator } from '@react-navigation/drawer';
import { useFonts } from "expo-font";

const image = {uri: 'https://i.imgur.com/icVp9VE.png'};
const icon = {uri: 'https://i.imgur.com/A8EJ0pd.png'};

const badge = {uri: ''};
const home= {uri: ''};
const file = {uri: ''};
const client = {uri: ''};
const settigns = {uri: ''};

function homeScreen({ navigation }) {
  return (
    <View style ={styles.container}>
      <ImageBackground source={image} style={styles.image}/>
             <View style = {styles.box5}>
               <Text style ={styles.text}>Yandiya Commisions</Text>
               <Text style = {styles.inc}>   Installation and {"\n"}commision process</Text>
              <View style={styles.continue}> 
              <Button onPress={() => navigation.navigate("login")}title ="continue"/>
              </View>
             </View>
    </View>
  );
}
function mainScreen({ navigation }) {
  return (
    <View style ={styles.container}>
      <ImageBackground source={image} style={styles.image}>
           <Text style={styles.text}>Yandiya commisions</Text>
      </ImageBackground>
      <ImageBackground source={icon} style={styles.image2}>
      </ImageBackground>
       <View style = {styles.box2}/>
       <View style = {styles.box3}>
         <Text style={styles.text1}>  You dont appear to have any work, you're fired for being unproductive</Text>
         </View>
       <View style = {styles.box4}/>
        <View style={styles.Home}> 
          <Button source={icon} onPress={() => navigation.navigate("Home")}title ="Home"/>
        </View>
    </View>
);
}

function loginScreen({ navigation }) {
  return (
    <View style ={styles.container}>
      <ImageBackground source={image} style={styles.image}>
           <Text style={styles.text}>Yandiya sign in</Text>
      </ImageBackground>
      <ImageBackground source={icon} style={styles.image2}>
      </ImageBackground>
          <Text style={{ marginVertical: 16 }}>
        {name ? `Hi ${name}!` : 'Input Email'}
      </Text>
      <TextInput
        style={{ padding: 8, backgroundColor: '#f5f5f5' }}
        onChangeText={text => setName(text)}
        secureTextEntry
      />
      </View>
  );
}
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={homeScreen} />
         <Drawer.Screen name="main" component={mainScreen} />
         <Drawer.Screen name="login" component={loginScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}