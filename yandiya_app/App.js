import React, { useEffect, useState, TouchableOpacity, useRef} from "react";
import {View,Text,StyleSheet,Button,ScrollView,SafeAreaView,StatusBar,Image,TextInput,setInput,Pressable,ImageBackground, AppRegistry,Platform,input,Checkbox} from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useFonts } from "expo-font";
const image = {uri: "https://i.imgur.com/A8WIsR2.png"};
const icon = {uri: 'https://i.imgur.com/5QVr3RA.png'};


function homeScreen({ navigation }) {
  return (

    <View style ={styles.container}>
        <ImageBackground source={image} style={styles.image}/>
     <View style ={{height: 30, width: 260, backgroundColor: '#e42c22', borderRadius: 20, position: "absolute", left:10, top: 50}}>
    </View>
    <View>
    <ImageBackground source={icon} style={styles.icon}/>
    </View>
 <View style={{height: 100, width: 220, backgroundColor:  "#252525", border: "black", position: "absolute", left: 30, top: 320, borderRadius: 20, boxShadow: '0px 0px 18px #252525',}}>
              <Button color = "#212121" onPress={() => navigation.navigate("Sign in")}title ="sign Up"/>
              <View style = {styles.space}/>
              <Button style ={styles.logIn} color = "#212121" onPress={() => navigation.navigate("Login")}title ="log in"/>
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
      <Text onClick ={() => navigation.navigate("commission")} style ={styles.box}>bo's diner: 2 celing pannels, managers office click here</Text>
      <Text onClick ={() => navigation.navigate("commission2")} style ={styles.box1}>Marcus's excuse for stupidity'</Text>
       </View>
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
          placeholder = "enter here"
        onChangeText={text => setName(text)}
      />
       <Text style={{ marginVertical: 16 }}>
        {name ? `Hi ${name}!` : 'Input Password'}
      </Text>
      <TextInput
        style={{ padding: 8, backgroundColor: '#f5f5f5' }}
          placeholder = "enter here"
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
function signInScreen({ navigation }) {
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
          placeholder = "enter here"
        onChangeText={text => setName(text)}
      />
       <Text style={{ marginVertical: 16 }}>
        {name ? `Hi ${name}!` : 'Input Password'}
      </Text>
      <TextInput
        style={{ padding: 8, backgroundColor: '#f5f5f5' }}
        placeholder = "enter here"
        onChangeText={text => setName(text)}
        secureTextEntry
      />
       <Text style={{ marginVertical: 16 }}>
        {name ? `Hi ${name}!` : 'Re-enter Password'}
      </Text>
      <TextInput
        style={{ padding: 8, backgroundColor: '#f5f5f5' }}
        onChangeText={text => setName(text)}
          placeholder = "enter here"
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
    <ImageBackground source={image} style={styles.image}/>
    <View style ={{height: 30, width: 280, backgroundColor: '#e42c22', borderRadius: 20, position: "absolute", left:1, top: 60}}>
    <Text style = {{color: "white", fontSize: 18, position: "absolute", left: 115,}}>Settings</Text>
     <View style ={{position: "absolute", top: 110, right: 110}}>
        <Button color = "#212121" onPress={() => navigation.navigate("main")}title ="Home"/>
        </View>
        <View style ={{position: "absolute", top: 150, right:100}}>
        <Button color = "#212121" onPress={() => navigation.navigate("logout")}title ="Logout"/>
         <View style ={{position: "absolute", top: 40, right:10}}>
          <div>
      <Check/>
    </div>
    </View>
      </View>
    </View>
    </View>
  )
};
function commissionScreen({ navigation }) {
  return (
    <View style ={styles.container}>
      <ImageBackground source={image} style={styles.image}/>
    <View style ={{height: 30, width: 280, backgroundColor: '#e42c22', borderRadius: 20, position: "absolute", left:1, top: 60}}>
    <Text style = {{color: "white", fontSize: 18, position: "absolute", left: 90,}}>Bo's Commission</Text>
     <View style={{height: 270, width: 260, backgroundColor: "#ffffff", border: "black", position: "absolute", left: 10, top: 90, borderRadius: 20, boxShadow: '10px 10px 40px #454545',}}>
       </View>
    </View>
        <View style = {{position: "absolute", left: 220, top: 155,}}> 
          <Button color = "#212121" onPress={() => navigation.navigate("main")}title ="<--"/>
         <View style = {{position: "absolute", left: -200, top: 40,}}> 
        </View>
        </View>
  </View>
)
  };
  function commissionScreen2({ navigation }) {
  return (
 <View style = {{backgroundColor: "whitesmoke"}}>
   <div>
  <SignatureBox/> 
   </div>
   <View>
    <Button color = "#212121" onPress={() => navigation.navigate("main")}title ="Get back to work"/>
    </View>
  </View>
)
  };
  function logoutScreen({ navigation }) {
    return (
    <View style ={styles.container}>
    <View style={[styles.bannerBox]}>
    <Text style={[styles.boxFont,{fontSize:24,textTransform:"uppercase",color:"white"},]}>Yandiya</Text>
    </View>
    <View style={[styles.space]}/>
    <View style={[styles.middleBox,styles.shadow]}>
    <Text style={[styles.boxFont,{fontSize:19,color:"#212121"}]}>
    <b>Are you sure you want to log out?</b>
    </Text>
    <View style={styles.fixToText}>
    <View style={styles.shadow}>
    <Button color="#32aa46"  onPress={() => navigation.navigate("Home")}title ="Yes"/>
    </View>
    <View style={styles.shadow}>
    <Button color="#e42c22" onPress={() => navigation.navigate("main")}title ="No"/>
    </View>
    </View>
    </View>
    <View style={[styles.space]}/>
    </View>
  
  )
    };
  
const Drawer = createDrawerNavigator();

const SignatureBox = () => {
  const [isDrawing, setIsDrawing] = useState(false);
  const canvasRef = useRef(null);

  const startDrawing = (event) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    context.strokeStyle = 'black';
    setIsDrawing(true);
    context.moveTo(event.clientX, event.clientY);
  };

  const continueDrawing = (event) => {
    if (!isDrawing) {
      return;
    }

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    context.lineTo(event.clientX, event.clientY);
    context.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={250}
        height={441}
        onMouseDown={startDrawing}
        onMouseMove={continueDrawing}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
      />
        <button onClick={() => canvasRef.current.getContext('2d').clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)}>
      Clear
    </button>
    </div>
  );
};

const Check = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      <input
       style = {{height: 20, width: 20}}
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
    </div>
  );
};


const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={homeScreen} />
        <Drawer.Screen name="main" component={mainScreen} />
        <Drawer.Screen name="Sign in" component={signInScreen} />
        <Drawer.Screen name="Login" component={loginScreen} />
        <Drawer.Screen name="commission2" component={commissionScreen2} />
        <Drawer.Screen name="commission" component={commissionScreen} />
        <Drawer.Screen name="Settings" component={settingsScreen} />
        <Drawer.Screen name="logout" component={logoutScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
