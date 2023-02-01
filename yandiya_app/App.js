import React, { useEffect, useState, TouchableOpacity} from "react";
import {View,Text,StyleSheet,Button,ScrollView,SafeAreaView,StatusBar,Image,TextInput,setInput,Pressable,ImageBackground, AppRegistry,Platform,input,Checkbox} from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useFonts } from "expo-font";
const image = {uri: "https://i.imgur.com/A8WIsR2.png"};
const icon = {uri: ''};


function homeScreen({ navigation }) {
  return (

    <View style ={styles.container}>
        <ImageBackground source={image} style={styles.image}/>
     <View style ={{height: 30, width: 260, backgroundColor: '#e42c22', borderRadius: 20, position: "absolute", left:10, top: 50}}>
    </View>
 <View style={{height: 100, width: 220, backgroundColor:  "#252525", border: "black", position: "absolute", left: 30, top: 320, borderRadius: 20, boxShadow: '0px 0px 18px #252525'}}>
              <Button color = "#212121" onPress={() => navigation.navigate("Sign in")}title ="sign Up"/>
              <View style = {styles.space}/>
              <Button style ={styles.logIn} color = "#212121" onPress={() => navigation.navigate("login")}title ="log in"/>
             </View>
    </View>
  );
}
function mainScreen({ navigation }) {
  return (
<View style ={styles.container}>
      <ImageBackground source={image} style={styles.image}/>
    <View style ={{height: 30, width: 280, backgroundColor: '#e42c22', borderRadius: 20, position: "absolute", left:1, top: 60}}>
    <Text style = {{color: "white", fontSize: 18, position: "absolute", left: 90,}}>Home Screen</Text>
     <View style={{height: 270, width: 260, backgroundColor: "#ffffff", border: "black", position: "absolute", left: 10, top: 90, borderRadius: 20, boxShadow: '10px 10px 40px #454545',}}>
      <Text style ={styles.box}>hello there</Text>
      <Text style ={styles.box1}>hello there</Text>
       </View>
    </View>
          <View style ={{position: "absolute", top: 330, right: 80}}>
          <Button color = "#212121" onPress={() => navigation.navigate("commisions")}title ="commisions"/>
        </View>
        <View style ={{position: "absolute", top: 370, right: 95}}>
          <Button color = "#212121" onPress={() => navigation.navigate("Settings")}title ="Settings"/>
        </View>
  </View>
);
}
function loginScreen({ navigation }) {
  return (
    <View style ={styles.container}>
      <ImageBackground source={image} style={styles.image}/>
    <View style ={{height: 30, width: 280, backgroundColor: '#e42c22', borderRadius: 20, position: "absolute", left:1, top: 60}}>
    <Text style = {{color: "white", fontSize: 18, position: "absolute", left: 120,}}>Login</Text>
     <View style={{height: 270, width: 260, backgroundColor: "#ffffff", border: "black", position: "absolute", left: 10, top: 90, borderRadius: 20, boxShadow: '10px 10px 40px #454545',}}>
      <Text style={{ marginVertical: 16 }}>
        {name ? `Hi ${name}!` : 'Input Email'}
      </Text>
      <TextInput
        style={{ padding: 8, backgroundColor: '#f5f5f5' }}
        onChangeText={text => setName(text)}
      />
       <Text style={{ marginVertical: 16 }}>
        {name ? `Hi ${name}!` : 'Input Password'}
      </Text>
      <TextInput
        style={{ padding: 8, backgroundColor: '#f5f5f5' }}
        onChangeText={text => setName(text)}
        secureTextEntry
      />
      <View style ={{position: "absolute", top: 210, right: 80}}>
          <Button color = "#212121" onPress={() => navigation.navigate("main")}title ="confirm"/>
        </View>
     <View style = {{position: "absolute", left: 220, top: 5,}}> 
          <Button color = "#212121" onPress={() => navigation.navigate("Home")}title ="<--"/>
        </View>
      </View>
    </View>
  </View>
  );
}
function SignInScreen({ navigation }) {
  return (
        <View style ={styles.container}>
      <ImageBackground source={image} style={styles.image}/>
    <View style ={{height: 30, width: 280, backgroundColor: '#e42c22', borderRadius: 20, position: "absolute", left:1, top: 60}}>
    <Text style = {{color: "white", fontSize: 18, position: "absolute", left: 120,}}>Sign up</Text>
     <View style={{height: 350, width: 260, backgroundColor: "#ffffff", border: "black", position: "absolute", left: 10, top: 90, borderRadius: 20, boxShadow: '10px 10px 40px #454545',}}>
      <Text style={{ marginVertical: 16 }}>
        {name ? `Hi ${name}!` : 'Input Email'}
      </Text>
      <TextInput
        style={{ padding: 8, backgroundColor: '#f5f5f5' }}
        onChangeText={text => setName(text)}
      />
       <Text style={{ marginVertical: 16 }}>
        {name ? `Hi ${name}!` : 'Input Password'}
      </Text>
      <TextInput
        style={{ padding: 8, backgroundColor: '#f5f5f5' }}
        onChangeText={text => setName(text)}
        secureTextEntry
      />
       <Text style={{ marginVertical: 16 }}>
        {name ? `Hi ${name}!` : 'Re-enter Password'}
      </Text>
      <TextInput
        style={{ padding: 8, backgroundColor: '#f5f5f5' }}
        onChangeText={text => setName(text)}
        secureTextEntry
      />
      
      <View style ={{position: "absolute", top: 290, right: 80}}>
          <Button color = "#212121" onPress={() => navigation.navigate("main")}title ="confirm"/>
        </View>
     <View style = {{position: "absolute", left: 220, top: 5,}}> 
          <Button color = "#212121" onPress={() => navigation.navigate("Home")}title ="<--"/>
        </View>
      </View>
    </View>
  </View>
  );
}
function settingsScreen({ navigation }) {
  return (

    <View style ={styles.container}>
           <Text style={styles.text}>Settings</Text>
        <View style ={{position: "absolute", top: 20, right: 20}}>
          <Button color = "#212121" onPress={() => navigation.navigate("main")}title ="Home"/>
        </View>
        <Text style={{position: "absolute", top: 120, right:40, color: "white"}}> are you sure you want to logout</Text>
          <View style ={{position: "absolute", top: 150, right:100}}>
          <Button color = "#212121" onPress={() => navigation.navigate("Home")}title ="Logout"/>
        </View>
      </View>
);
function commisionScreen({ navigation }) {
  return (

    <View style ={styles.container}>
           <Text style={styles.text}>Commisions</Text>
        <View style={styles.settings}> 
          <Button color = "#212121" onPress={() => navigation.navigate("main")}title ="Home"/>
        </View>
    </View>
);
