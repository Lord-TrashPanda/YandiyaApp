import React, { useEffect, useState, TouchableOpacity, useRef } from 'react';
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
  Dimensions,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const image = { uri: 'https://i.imgur.com/A8WIsR2.png' };
const icon = { uri: 'https://i.imgur.com/5QVr3RA.png' };
const window = Dimensions.get('window');

//(window.width) *0.000
//(window.height) *0.000

function initialScreen({ navigation: { navigate } }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image} />
      <View
        style={{
          height: window.height * 0.05,
          width: window.width * 0.95,
          backgroundColor: '#e42c22',
          borderRadius: 20,
          position: 'absolute',
          left: 10,
          top: 50,
        }}></View>
      <View>
        <ImageBackground source={icon} style={styles.icon} />
      </View>
      <View
        style={{
          height: window.height * 0.16,
          width: window.width * 0.7,
          backgroundColor: '#252525',
          border: 'black',
          position: 'absolute',
          left: 60,
          top: 400,
          borderRadius: 20,
          boxShadow: '0px 0px 18px #252525',
        }}>
        <Button
          color="white"
          onPress={() => navigate('Sign Up')}
          title="sign Up"
        />
        <View style={styles.space} />
        <Button
          style={styles.logIn}
          color="white"
          onPress={() => navigate('Login')}
          title="log in"
        />
      </View>
    </View>
  );
}
function firstScreen({ navigation: { navigate } }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image} />
      <View
        style={{
          height: 30,
          width: 370,
          backgroundColor: '#e42c22',
          borderRadius: 20,
          position: 'absolute',
          left: 10,
          top: 50,
        }}></View>
      <View
        style={{
          height: 520,
          width: 330,
          backgroundColor: '#f8f7f7',
          border: 'black',
          position: 'absolute',
          left: 30,
          top: 140,
          borderRadius: 20,
          boxShadow: '0px 0px 18px #252525',
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 17,
            position: 'absolute',
            left: 15,
            top: 90,
            textAllign: 'center',
            fontWeight: 'bold',
          }}>
          Installation and commission process
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: 12,
            position: 'absolute',
            left: 25,
            top: 160,
            textAllign: 'center',
            fontWeight: 'bold',
          }}>
          welcome to the yandiya simple commissions app
        </Text>
        <View
          style={{
            position: 'absolute',
            left: 70,
            top: 250,
            fontWeight: 'bold',
          }}>
          <Button
            color="green"
            onPress={() => navigate('main')}
            title="Welcome"
          />
        </View>
      </View>
    </View>
  );
}

function mainScreen({ navigation: { navigate } }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image} />
      <View
        style={{
          height: 30,
          width: 380,
          backgroundColor: '#e42c22',
          borderRadius: 20,
          position: 'absolute',
          left: 1,
          top: 60,
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 18,
            position: 'absolute',
            right: 130,
            textAlign: 'center',
          }}>
          Home Screen
        </Text>
        <View
          style={{
            height: 300,
            width: 330,
            backgroundColor: '#ffffff',
            border: 'black',
            position: 'absolute',
            left: 30,
            top: 90,
            borderRadius: 20,
            boxShadow: '10px 10px 40px #454545',
          }}>
          <Text onPress={() => navigate('commission')} style={styles.box}>
            bo's diner: 2 celing pannels, managers office click here
          </Text>
          <Text onPress={() => navigate('signature')} style={styles.box1}>
            Marcus's excuse for stupidity'
          </Text>
        </View>
      </View>
      <View style={{ position: 'absolute', top: 370, right: 145 }}>
        <Button
          color="#212121"
          onPress={() => navigate('Settings')}
          title="Settings"
        />
        <Button
          color="#212121"
          onPress={() => navigate('Client')}
          title="Client"
        />
      </View>
    </View>
  );
}
function loginScreen({ navigation: { navigate } }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image} />

      <View
        style={{
          height: 30,
          width: 380,
          backgroundColor: '#e42c22',
          borderRadius: 20,
          position: 'absolute',
          left: 1,
          top: 60,
        }}
      />
      <Text
        style={{
          color: 'white',
          fontSize: 18,
          position: 'absolute',
          left: 170,
        }}>
        Login
      </Text>
      <View
        style={{
          height: 250,
          width: 330,
          backgroundColor: '#ffffff',
          border: 'black',
          position: 'absolute',
          left: 30,
          top: 150,
          borderRadius: 20,
          boxShadow: '10px 10px 40px #454545',
        }}>
        <ScrollView>
          <Text style={{ marginVertical: 16 }}>{'Input Email'}</Text>
          <TextInput
            style={{ padding: 8, backgroundColor: '#f5f5f5' }}
            placeholder="enter here"
          />
          <Text style={{ marginVertical: 16 }}>{'Input Password'}</Text>
          <TextInput
            style={{ padding: 8, backgroundColor: '#f5f5f5' }}
            placeholder="enter here"
            secureTextEntry
          />
          <View
            style={{
              position: 'absolute',
              top: 210,
              right: 120,
              fontWeight: 'bold',
            }}>
            <Button
              color="green"
              onPress={() => navigate('main')}
              title="confirm"
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
function signInScreen({ navigation: { navigate } }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image} />
      <View
        style={{
          height: 30,
          width: 380,
          backgroundColor: '#e42c22',
          borderRadius: 20,
          position: 'absolute',
          left: 1,
          top: 60,
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 18,
            position: 'absolute',
            left: 160,
          }}>
          Sign up
        </Text>
        <View></View>
        <View
          style={{
            height: 320,
            width: 330,
            backgroundColor: '#ffffff',
            border: 'black',
            position: 'absolute',
            left: 30,
            top: 120,
            borderRadius: 20,
            boxShadow: '10px 10px 40px #454545',
          }}>
          <ScrollView>
            <Text style={{ marginVertical: 16 }}>{'Input Email'}</Text>
            <TextInput
              style={{ padding: 8, backgroundColor: '#f5f5f5' }}
              placeholder="enter here"
            />
            <Text style={{ marginVertical: 16 }}>{'Input Password'}</Text>
            <TextInput
              style={{ padding: 8, backgroundColor: '#f5f5f5' }}
              placeholder="enter here"
              secureTextEntry
            />
            <Text style={{ marginVertical: 16 }}>{'Re-enter Password'}</Text>
            <TextInput
              style={{ padding: 8, backgroundColor: '#f5f5f5' }}
              placeholder="enter here"
              secureTextEntry
            />

            <View style={{ position: 'absolute', top: 270, right: 120 }}>
              <Button
                color="green"
                onPress={() => navigate('main')}
                title="confirm"
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}
function infoScreen({ navigation: { navigate } }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image} />

      <View
        style={{
          height: 420,
          width: 240,
          backgroundColor: '#ffffff',
          border: 'black',
          position: 'absolute',
          top: 70,
          left: 20,
          borderRadius: 10,
          boxShadow: '10px 10px 30px #454545',
        }}>
        <ScrollView
          style={[container, { flexDirection: 'column' }]}
          horizontal={false}>
          <View>
            <Text> client info:</Text>
            <br />
            <Text> Client Name:</Text>
            <TextInput
              placeholder="client"
              style={{ padding: 8, backgroundColor: '#f5f5f5' }}
              onChangeText={(text) => setClient(text)}></TextInput>
            <br />
            <Text> Client Location:</Text>
            <TextInput
              placeholder="Location"
              style={{ padding: 8, backgroundColor: '#f5f5f5' }}
              onChangeText={(text) => setLocation(text)}></TextInput>
            <br />
            <Text> Client Address:</Text>
            <TextInput
              placeholder="address"
              style={{ padding: 8, backgroundColor: '#f5f5f5' }}
              onChangeText={(text) => setAddress(text)}></TextInput>
            <br />
            <Text> Client City:</Text>
            <TextInput
              placeholder="City"
              style={{ padding: 8, backgroundColor: '#f5f5f5' }}
              onChangeText={(text) => setCity(text)}></TextInput>
            <br />
            <Text> Client post code:</Text>
            <TextInput
              placeholder="post code"
              style={{ padding: 8, backgroundColor: '#f5f5f5' }}
              onChangeText={(text) => setPostCode(text)}></TextInput>
            <br />
            <Text> Client phone number:</Text>
            <TextInput
              placeholder="phone number"
              style={{ padding: 8, backgroundColor: '#f5f5f5' }}
              onChangeText={(text) => setPhoneNumber(text)}></TextInput>
            <br />
            <Text> Client Email:</Text>
            <TextInput
              placeholder="Email"
              style={{ padding: 8, backgroundColor: '#f5f5f5' }}
              onChangeText={(text) => setEmail(text)}></TextInput>
            <br />
            <Text> Contact:</Text>
            <TextInput
              placeholder="contact person"
              style={{ padding: 8, backgroundColor: '#f5f5f5' }}
              onChangeText={(text) => setContactPerson(text)}></TextInput>
            <br />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
function clientScreen ({ navigation: { navigate } }){
  return (
  <View  style={styles.container}>
   <ImageBackground source={image} style={styles.image} />
   <View
        style={{
          height: 30,
          width: 380,
          backgroundColor: '#e42c22',
          borderRadius: 20,
          position: 'absolute',
          left: 1,
          top: 60,
        }}/>
        <View
        style={{
          height: window.height * 0.7,
          width: window.width * 0.8,
          backgroundColor:'white',
          border: 'black',
          position: 'absolute',
          left: 40,
          top: 120,
          borderRadius: 20,
          boxShadow: '0px 0px 18px #252525',
        }}>
        <Button
          color="white"
          onPress={() => navigate('Sign Up')}
          title="sign Up"
        />
        <View style={styles.space} />
        <Button
          style={styles.logIn}
          color="white"
          onPress={() => navigate('Login')}
          title="log in"
        />
      </View>
   </View>
  );
}
const Stack = createStackNavigator();

function MyDrawer() {
  return (
    <Stack.Navigator useLegacyImplementation>
      <Stack.Screen name="Welcome" component={initialScreen} />
      <Stack.Screen name="First" component={firstScreen} />
      <Stack.Screen name="main" component={mainScreen} />
      <Stack.Screen name="Sign Up" component={signInScreen} />
      <Stack.Screen name="Login" component={loginScreen} />
      <Stack.Screen name="Info" component={infoScreen} />
      <Stack.Screen name="Client" component={clientScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f7f7',
  },
  image: {
    width: 190,
    height: 200,
    flex: 1,
    position: 'absolute',
    top: -45,
    right: 0,
  },
  icon: {
    width: 400,
    height: 400,
    position: 'absolute',
    top: 60,
    right: -20,
  },
  image3: {
    width: 250,
    height: 90,
    position: 'absolute',
    top: -20,
    left: 20,
    borderRadius: 100,
  },
  text: {
    color: 'white',
    fontSize: 18,
    lineHeight: 84,
    textAllign: 'right',
    position: 'absolute',
    top: -5,
    left: 50,
    fontWeight: 'bold',
  },
  text1: {
    fontSize: 12,
    position: 'absolute',
    top: 20,
    right: 40,
    fontWeight: 'bold',
    color: 'white',
  },
  inc: {
    color: 'black',
    position: 'absolute',
    top: 150,
    right: 50,
    fontSize: 18,
    fontWeight: 'bold',
  },
  commisions: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 460,
    right: 170,
  },
  email: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    padding: 16,
    position: 'absolute',
    top: 120,
    right: 40,
  },
  text2: {
    color: 'white',
    fontSize: 18,
    lineHeight: 84,
    textAllign: 'right',
    position: 'absolute',
    top: -39,
    left: 90,
    fontWeight: 'bold',
  },
  epassword: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    padding: 16,
    position: 'absolute',
    top: 260,
    right: 40,
  },
  text3: {
    color: 'white',
    fontSize: 18,
    lineHeight: 84,
    textAllign: 'right',
    position: 'absolute',
    top: 30,
    left: 90,
    fontWeight: 'bold',
  },
  signUp: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 300,
    right: 94,
    color: '#212121',
  },
  logIn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 360,
    right: 90,
  },
  Back: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: -100,
    right: -20,
  },
  Bank: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: -150,
    right: -10,
  },
  settings: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 460,
    right: 10,
  },
  space: {
    flex: 1,
  },
  box: {
    height: 50,
    width: 290,
    backgroundColor: '#000000',
    position: 'absolute',
    left: 20,
    top: 20,
    color: 'white',
    borderRadius: 20,
    textAlign: 'center',
    flex: 1,
  },
  box1: {
    height: 30,
    width: 290,
    backgroundColor: '#000000',
    position: 'absolute',
    left: 20,
    top: 90,
    color: 'white',
    borderRadius: 20,
    textAlign: 'center',
    flex: 1,
  },
  bannerBox: {
    flex: 5,
    justifyContent: 'center',
    backgroundColor: '#e42c22',
  },
  space: {
    flex: 1,
  },
  middleBox: {
    backgroundColor: '#f8f7f7',
    justifyContent: 'center',
    flex: 10,
    width: 250,
    marginLeft: 15,
    borderRadius: 40,
  },
  fixToText: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign: 'center',
    marginBottom: 50,
    marginLeft: 30,
    marginRight: 30,
  },
  boxFont: {
    justifyContent: 'center',
    textAlign: 'center',
  },
  shadow: {
    shadowColor: '#000000',
    top: 100,
  },
  shadowOffset: {
    width: 0,
    height: 9,
    shadowOpacity: 0.25,
    shadowRadius: 40,
    elevation: 18,
  },
});
