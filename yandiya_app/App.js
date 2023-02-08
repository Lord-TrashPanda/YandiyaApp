import React, { useEffect, useState, TouchableOpacity, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Image,
  TextInput,
  setInput,
  Pressable,
  ImageBackground,
  AppRegistry,
  Platform,
  input,
  Checkbox,
  container,
} from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useFonts } from "expo-font";
const image = { uri: "https://i.imgur.com/A8WIsR2.png" };
const icon = { uri: "https://i.imgur.com/5QVr3RA.png" };

function welcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image} />
      <View
        style={{
          height: 30,
          width: 260,
          backgroundColor: "#e42c22",
          borderRadius: 20,
          position: "absolute",
          left: 10,
          top: 50,
        }}
      ></View>
      <View
        style={{
          height: 320,
          width: 220,
          backgroundColor: "#f8f7f7",
          border: "black",
          position: "absolute",
          left: 30,
          top: 140,
          borderRadius: 20,
          boxShadow: "0px 0px 18px #252525",
        }}
      >
        <Text
          style={{
            color: "black",
            fontSize: 20,
            position: "absolute",
            left: 15,
            top: 90,
            textAllign: "center",
            fontWeight: "bold",
          }}
        >
          Installation and commission process
        </Text>
        <View style={{ position: "absolute", left: 70, top: 250 }}>
          <Button
            color="green"
            onPress={() => navigation.navigate("Home")}
            title="Welcome"
          />
        </View>
      </View>
    </View>
  );
}

function homeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image} />
      <View
        style={{
          height: 30,
          width: 260,
          backgroundColor: "#e42c22",
          borderRadius: 20,
          position: "absolute",
          left: 10,
          top: 50,
        }}
      ></View>
      <View>
        <ImageBackground source={icon} style={styles.icon} />
      </View>
      <View
        style={{
          height: 100,
          width: 220,
          backgroundColor: "#252525",
          border: "black",
          position: "absolute",
          left: 30,
          top: 320,
          borderRadius: 20,
          boxShadow: "0px 0px 18px #252525",
        }}
      >
        <Button
          color="#212121"
          onPress={() => navigation.navigate("Sign in")}
          title="sign Up"
        />
        <View style={styles.space} />
        <Button
          style={styles.logIn}
          color="#212121"
          onPress={() => navigation.navigate("Login")}
          title="log in"
        />
      </View>
    </View>
  );
}
function mainScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image} />
      <View
        style={{
          height: 30,
          width: 280,
          backgroundColor: "#e42c22",
          borderRadius: 20,
          position: "absolute",
          left: 1,
          top: 60,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 18,
            position: "absolute",
            left: 90,
          }}
        >
          Home Screen
        </Text>
        <View
          style={{
            height: 270,
            width: 260,
            backgroundColor: "#ffffff",
            border: "black",
            position: "absolute",
            left: 10,
            top: 90,
            borderRadius: 20,
            boxShadow: "10px 10px 40px #454545",
          }}
        >
          <Text
            onClick={() => navigation.navigate("commission")}
            style={styles.box}
          >
            bo's diner: 2 celing pannels, managers office click here
          </Text>
          <Text
            onClick={() => navigation.navigate("signature")}
            style={styles.box1}
          >
            Marcus's excuse for stupidity'
          </Text>
        </View>
      </View>
      <View style={{ position: "absolute", top: 370, right: 95 }}>
        <Button
          color="#212121"
          onPress={() => navigation.navigate("Settings")}
          title="Settings"
        />
      </View>
    </View>
  );
}
function loginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image} />
      <View
        style={{
          height: 30,
          width: 280,
          backgroundColor: "#e42c22",
          borderRadius: 20,
          position: "absolute",
          left: 1,
          top: 60,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 18,
            position: "absolute",
            left: 120,
          }}
        >
          Login
        </Text>
        <View
          style={{
            height: 270,
            width: 260,
            backgroundColor: "#ffffff",
            border: "black",
            position: "absolute",
            left: 10,
            top: 90,
            borderRadius: 20,
            boxShadow: "10px 10px 40px #454545",
          }}
        >
          <Text style={{ marginVertical: 16 }}>
            {name ? `Hi ${name}!` : "Input Email"}
          </Text>
          <TextInput
            style={{ padding: 8, backgroundColor: "#f5f5f5" }}
            placeholder="enter here"
            onChangeText={(text) => setName(text)}
          />
          <Text style={{ marginVertical: 16 }}>
            {name ? `Hi ${name}!` : "Input Password"}
          </Text>
          <TextInput
            style={{ padding: 8, backgroundColor: "#f5f5f5" }}
            placeholder="enter here"
            onChangeText={(text) => setName(text)}
            secureTextEntry
          />
          <View style={{ position: "absolute", top: 210, right: 80 }}>
            <Button
              color="#212121"
              onPress={() => navigation.navigate("main")}
              title="confirm"
            />
          </View>
          <View style={{ position: "absolute", left: 220, top: 5 }}>
            <Button
              color="#212121"
              onPress={() => navigation.navigate("Home")}
              title="<--"
            />
          </View>
        </View>
      </View>
    </View>
  );
}
function signInScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image} />
      <View
        style={{
          height: 30,
          width: 280,
          backgroundColor: "#e42c22",
          borderRadius: 20,
          position: "absolute",
          left: 1,
          top: 60,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 18,
            position: "absolute",
            left: 120,
          }}
        >
          Sign up
        </Text>
        <View
          style={{
            height: 350,
            width: 260,
            backgroundColor: "#ffffff",
            border: "black",
            position: "absolute",
            left: 10,
            top: 90,
            borderRadius: 20,
            boxShadow: "10px 10px 40px #454545",
          }}
        >
          <Text style={{ marginVertical: 16 }}>
            {name ? `Hi ${name}!` : "Input Email"}
          </Text>
          <TextInput
            style={{ padding: 8, backgroundColor: "#f5f5f5" }}
            placeholder="enter here"
            onChangeText={(text) => setName(text)}
          />
          <Text style={{ marginVertical: 16 }}>
            {name ? `Hi ${name}!` : "Input Password"}
          </Text>
          <TextInput
            style={{ padding: 8, backgroundColor: "#f5f5f5" }}
            placeholder="enter here"
            onChangeText={(text) => setName(text)}
            secureTextEntry
          />
          <Text style={{ marginVertical: 16 }}>
            {name ? `Hi ${name}!` : "Re-enter Password"}
          </Text>
          <TextInput
            style={{ padding: 8, backgroundColor: "#f5f5f5" }}
            onChangeText={(text) => setName(text)}
            placeholder="enter here"
            secureTextEntry
          />

          <View style={{ position: "absolute", top: 290, right: 80 }}>
            <Button
              color="#212121"
              onPress={() => navigation.navigate("main")}
              title="confirm"
            />
          </View>
          <View style={{ position: "absolute", left: 220, top: 5 }}>
            <Button
              color="#212121"
              onPress={() => navigation.navigate("Home")}
              title="<--"
            />
          </View>
        </View>
      </View>
    </View>
  );
}
function settingsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image} />
      <View
        style={{
          height: 30,
          width: 280,
          backgroundColor: "#e42c22",
          borderRadius: 20,
          position: "absolute",
          left: 1,
          top: 60,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 18,
            position: "absolute",
            left: 115,
          }}
        >
          Settings
        </Text>
        <View style={{ position: "absolute", top: 110, right: 110 }}>
          <Button
            color="#212121"
            onPress={() => navigation.navigate("main")}
            title="Home"
          />
        </View>
        <View style={{ position: "absolute", top: 150, right: 100 }}>
          <Button
            color="#212121"
            onPress={() => navigation.navigate("logout")}
            title="Logout"
          />
          <View style={{ position: "absolute", top: 40, right: 10 }}>
            <div>
              <Check />
            </div>
          </View>
        </View>
      </View>
    </View>
  );
}
function infoScreen({ navigation }) {
  return (
        <View style={styles.container}>
      <ImageBackground source={image} style={styles.image} />
      
        <View
          style={{ height: 420,width: 240,backgroundColor: "#ffffff", border: "black", position: "absolute", top: 70,left: 20, borderRadius: 10,
           boxShadow: "10px 10px 30px #454545", }}>
        <ScrollView style={[container, {flexDirection: 'column'}]} horizontal={false}>
       <View>
          <Text>   client info:</Text>
  <br/>
         <Text>   Client Name:</Text>
    <TextInput 
     placeholder= "client"
     style={{ padding: 8, backgroundColor: "#f5f5f5" }}
     onChangeText={(text) => setClient(text)}></TextInput><br/>
    <Text>   Client Location:</Text>
    <TextInput 
     placeholder= "Location"
     style={{ padding: 8, backgroundColor: "#f5f5f5" }}
     onChangeText={(text) => setLocation(text)}></TextInput><br/>
     <Text>   Client Address:</Text>
    <TextInput 
     placeholder= "address"
     style={{ padding: 8, backgroundColor: "#f5f5f5" }}
     onChangeText={(text) => setAddress(text)}></TextInput><br/>
      <Text>   Client City:</Text>
    <TextInput 
     placeholder= "City"
     style={{ padding: 8, backgroundColor: "#f5f5f5" }}
     onChangeText={(text) => setCity(text)}></TextInput><br/>
      <Text>   Client post code:</Text>
    <TextInput 
     placeholder= "post code"
     style={{ padding: 8, backgroundColor: "#f5f5f5" }}
     onChangeText={(text) => setPostCode(text)}></TextInput><br/>
      <Text>   Client phone number:</Text>
    <TextInput 
     placeholder= "phone number"
     style={{ padding: 8, backgroundColor: "#f5f5f5" }}
     onChangeText={(text) => setPhoneNumber(text)}></TextInput><br/>
      <Text>   Client Email:</Text>
    <TextInput 
     placeholder= "Email"
     style={{ padding: 8, backgroundColor: "#f5f5f5" }}
     onChangeText={(text) => setEmail(text)}></TextInput><br/>
      <Text>   Contact:</Text>
    <TextInput 
     placeholder= "contact person"
     style={{ padding: 8, backgroundColor: "#f5f5f5" }}
     onChangeText={(text) => setContactPerson(text)}></TextInput><br/>
        </View>
            </ScrollView>
          </View>
    </View>
  );
}
function commissionScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image} />
        <View
          style={{ height: 420,width: 240,backgroundColor: "#ffffff", border: "black", position: "absolute", top: 70,left: 20, borderRadius: 10,
           boxShadow: "10px 10px 30px #454545", }}>
        <ScrollView style={[container, {flexDirection: 'column'}]} horizontal={false}>
       <View>
            <div>
              <Check />
              <Text>something will go here</Text>
              <br/>
              <Check />
              <Text>something will go here</Text>
              <br/>
                   <Check />
              <Text>something will go here</Text>
              <br/>
              <Check />
              <Text>something will go here</Text>
              <br/>     <Check />
              <Text>something will go here</Text>
              <br/>
              <Check />
              <Text>something will go here</Text>
              <br/>     <Check />
              <Text>something will go here</Text>
              <br/>
              <Check />
              <Text>something will go here</Text>
              <br/>     <Check />
              <Text>something will go here</Text>
              <br/>
              <Check />
              <Text>something will go here</Text>
              <br/>
            </div>
            <View style={{ position: "absolute", top: 470, right: 60 }}>
          <Button
            color="green"
            onPress={() => navigation.navigate("main")}
            title="confirm"
          />
        </View>
          </View>
    </ScrollView>
    </View>
    </View>
  );
}
function sigScreen({ navigation }) {
  return (
    <View style={{ backgroundColor: "whitesmoke" }}>
      <div>
        <SignatureBox />
      </div>
      <View>
        <Button
          color="#212121"
          onPress={() => navigation.navigate("main")}
          title="Get back to work"
        />
      </View>
    </View>
  );
}
function logoutScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={[styles.bannerBox]}>
        <Text
          style={[
            styles.boxFont,
            { fontSize: 24, textTransform: "uppercase", color: "white" },
          ]}
        >
          Yandiya
        </Text>
      </View>
      <View style={[styles.space]} />
      <View style={[styles.middleBox, styles.shadow]}>
        <Text style={[styles.boxFont, { fontSize: 19, color: "#212121" }]}>
          <b>Are you sure you want to log out?</b>
        </Text>
        <View style={styles.fixToText}>
          <View style={styles.shadow}>
            <Button
              color="#32aa46"
              onPress={() => navigation.navigate("Home")}
              title="Yes"
            />
          </View>
          <View style={styles.shadow}>
            <Button
              color="#e42c22"
              onPress={() => navigation.navigate("main")}
              title="No"
            />
          </View>
        </View>
      </View>
      <View style={[styles.space]} />
    </View>
  );
}

const Drawer = createDrawerNavigator();

const SignatureBox = () => {
  const [isDrawing, setIsDrawing] = useState(false);
  const canvasRef = useRef(null);

  const startDrawing = (event) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    context.strokeStyle = "black";
    setIsDrawing(true);
    context.moveTo(event.clientX, event.clientY);
  };

  const continueDrawing = (event) => {
    if (!isDrawing) {
      return;
    }

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

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
      <button
        onClick={() =>
          canvasRef.current
            .getContext("2d")
            .clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
        }
      >
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
        style={{ height: 20, width: 20 }}
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
      <Drawer.Navigator initialRouteName="info">
        <Drawer.Screen name="Home" component={homeScreen} />
        <Drawer.Screen name="main" component={mainScreen} />
        <Drawer.Screen name="Sign in" component={signInScreen} />
        <Drawer.Screen name="Login" component={loginScreen} />
        <Drawer.Screen name="signature" component={sigScreen} />
        <Drawer.Screen name="commission" component={commissionScreen} />
        <Drawer.Screen name="Settings" component={settingsScreen} />
        <Drawer.Screen name="logout" component={logoutScreen} />
        <Drawer.Screen name="welcome" component={welcomeScreen} />
        <Drawer.Screen name="info" component={infoScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
