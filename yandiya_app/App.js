//IMPORTS
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
  container,
  Dimensions,
  Switch,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ToggleSwitch from './toggleSwitch.js';
import bottom from './assets/bottom.jpg';

//CONSTANTS

const Stack = createStackNavigator();
const image = './assets/yandiyaLogo_Wide.png';
const icon = './assets/yandiyaLogo_Small.png';
const window = Dimensions.get('window');

  //EXTERNAL STYLESHEET

  const styles = './styles.js';

  //INTERNAL STYLESHEET

  const Internalstyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? '#333' : '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: isDarkMode ? '#fff' : '#333',
    },
  });

//DARKMODE VALUE

const Change = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  //<ToggleSwitch isDarkMode={isDarkMode} onToggle={toggleDarkMode} />

//SCREEN FUNCTIONS

function initialScreen({ navigation: { navigate } }) {
    const [checked, setChecked] = useState(false);
    return (
      <View style={Internalstyles.container}>
        <ImageBackground source={image} style={styles.image} />
        <ImageBackground
          source={bottom}
          style={{
            width: 390,
            height: 90,
            position: 'absolute',
            top: 670,
            left: 0,
          }}
        />
        <View
          style={{
            height: window.height * 0.05,
            top: 50,
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
            height: window.height * 0.11,
            width: window.width * 0.7,
            backgroundColor: '#252525',
            border: 'black',
            position: 'absolute',
            left: 60,
            top: 450,
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
function settingsScreen({ navigation: { navigate } }) {
    return (
      <View style={Internalstyles.container}>
        <ImageBackground source={image} style={styles.image} />
        <ImageBackground
          source={bottom}
          style={{
            width: 390,
            height: 90,
            position: 'absolute',
            top: 670,
            left: 0,
          }}
        />
        <View
          style={{
            height: 30,
            width: 380,
            backgroundColor: '#e42c22',
            borderRadius: 20,
            position: 'absolute',
            left: 10,
            top: 60,
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
            borderWidth: 5,
            borderColor: '#000000',
          }}>
          <Button
            color="#212121"
            onPress={() => navigate('LogOut')}
            title="Logout"
          />
          <View style={{ position: 'absolute', top: 90, right: 90 }}>
            <ToggleSwitch isDarkMode={isDarkMode} onToggle={toggleDarkMode} />
          </View>
        </View>
      </View>
    );
  }
function firstScreen({ navigation: { navigate } }) {
    return (
      <View style={Internalstyles.container}>
        <ImageBackground source={image} style={styles.image} />
        <ImageBackground
          source={bottom}
          style={{
            width: 390,
            height: 90,
            position: 'absolute',
            top: 670,
            left: 0,
          }}
        />
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
              left: 20,
              top: 160,
              textAllign: 'center',
              fontWeight: 'bold',
            }}>
            welcome to the yandiya simple commissions app
          </Text>
          <View
            style={{
              position: 'absolute',
              left: 120,
              top: 250,
              fontWeight: 'bold',
            }}>
            <Button
              color="green"
              onPress={() => navigate('Welcome')}
              title="Welcome"
            />
          </View>
        </View>
      </View>
    );
  }

function mainScreen({ navigation: { navigate } }) {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleToggleSwitch = () => {
      setIsDarkMode(!isDarkMode);
    };

    return (
      <View style={Internalstyles.container}>
        <ImageBackground source={image} style={styles.image} />
        <ImageBackground
          source={bottom}
          style={{
            width: 390,
            height: 90,
            position: 'absolute',
            top: 670,
            left: 0,
          }}
        />
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
              height: 450,
              width: 300,
              backgroundColor: '#ffffff',
              position: 'absolute',
              left: 50,
              top: 90,
              borderRadius: 20,
              boxShadow: '10px 10px 40px #454545',
              borderWidth: 5,
              borderColor: '#000000',
            }}>
            <Text onPress={() => navigate('commission')}>
              {'\n'}
              bo's diner: 2 celing pannels, managers office
              {'\n'}
            </Text>
            <Text onPress={() => navigate('signature')}>
              something will go here soon
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
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const handleEmailChange = (text) => {
      setEmail(text);
      checkInputsFilled();
    };

    const handlePasswordChange = (text) => {
      setPassword(text);
      checkInputsFilled();
    };

    const checkInputsFilled = () => {
      if (email && password) {
        setIsButtonDisabled(false);
      } else {
        setIsButtonDisabled(true);
      }
    };

    return (
      <View style={Internalstyles.container}>
        <ImageBackground source={image} style={styles.image} />
        <ImageBackground
          source={bottom}
          style={{
            width: 390,
            height: 90,
            position: 'absolute',
            top: 670,
            left: 0,
          }}
        />
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
            borderWidth: 5,
            borderColor: '#000000',
          }}>
          <ScrollView>
            <Text style={{ marginVertical: 16 }}>{'Input Email'}</Text>
            <TextInput
              style={{ padding: 8, backgroundColor: '#f5f5f5' }}
              placeholder="enter here"
              value={email}
              onChangeText={handleEmailChange}
            />
            <Text style={{ marginVertical: 16 }}>{'Input Password'}</Text>
            <TextInput
              style={{ padding: 8, backgroundColor: '#f5f5f5' }}
              placeholder="enter here"
              secureTextEntry
              value={password}
              onChangeText={handlePasswordChange}
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
                disabled={isButtonDisabled}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }

function signInScreen({ navigation: { navigate } }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordagain, setpasswordagain] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const handleEmailChange = (text) => {
      setEmail(text);
      checkInputsFilled();
    };

    const handlePasswordChange = (text) => {
      setPassword(text);
      checkInputsFilled();
    };

    const handlePasswordChangeAgain = (text) => {
      setpasswordagain(text);
      checkInputsFilled();
    };

    const checkInputsFilled = () => {
      if (email && password && passwordagain) {
        setIsButtonDisabled(false);
      } else {
        setIsButtonDisabled(true);
      }
    };

    return (
      <View style={Internalstyles.container}>
        <ImageBackground source={image} style={styles.image} />
        <ImageBackground
          source={bottom}
          style={{
            width: 390,
            height: 90,
            position: 'absolute',
            top: 670,
            left: 0,
          }}
        />
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
              borderWidth: 5,
              borderColor: '#000000',
            }}>
            <ScrollView>
              <Text style={{ marginVertical: 16 }}>{'Input Email'}</Text>
              <TextInput
                style={{ padding: 8, backgroundColor: '#f5f5f5' }}
                placeholder="enter here"
                onChangeText={handleEmailChange}
              />
              <Text style={{ marginVertical: 16 }}>{'Input Password'}</Text>
              <TextInput
                style={{ padding: 8, backgroundColor: '#f5f5f5' }}
                placeholder="enter here"
                secureTextEntry
                onChangeText={handlePasswordChange}
              />
              <Text style={{ marginVertical: 16 }}>{'Re-enter Password'}</Text>
              <TextInput
                style={{ padding: 8, backgroundColor: '#f5f5f5' }}
                placeholder="enter here"
                secureTextEntry
                onChangeText={handlePasswordChangeAgain}
              />

              <View style={{ position: 'absolute', top: 270, right: 120 }}>
                <Button
                  color="green"
                  onPress={() => navigate('main')}
                  title="confirm"
                  disabled={isButtonDisabled}
                />
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }

function infoScreen({ navigation: { navigate } }) {
    const [client, setClient] = useState('');
    const [location, setLocation] = useState('');
    const [postCode, setPostCode] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [contactPerson, setContactPerson] = useState('');

    return (
      <View style={Internalstyles.container}>
        <ImageBackground source={image} style={styles.image} />
        <ImageBackground
          source={bottom}
          style={{
            width: 390,
            height: 90,
            position: 'absolute',
            top: 670,
            left: 0,
          }}
        />
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
        <View
          style={{
            height: 420,
            width: 300,
            backgroundColor: '#ffffff',
            border: 'black',
            position: 'absolute',
            top: 130,
            left: 45,
            borderRadius: 10,
            boxShadow: '10px 10px 30px #454545',
            borderWidth: 5,
            borderColor: '#000000',
          }}>
          <ScrollView
            style={[container, { flexDirection: 'column' }]}
            horizontal={false}>
            <View>
              <Text> client info:</Text>
              <Text> Client Name:</Text>
              <TextInput
                placeholder="client"
                style={{ padding: 8, backgroundColor: '#f5f5f5' }}
                onChangeText={(text) => setClient(text)}></TextInput>
              <Text> Client Location:{'\n'}</Text>
              <TextInput
                placeholder="Location"
                style={{ padding: 8, backgroundColor: '#f5f5f5' }}
                onChangeText={(text) => setLocation(text)}></TextInput>
              <Text> Client Address:{'\n'}</Text>
              <TextInput
                placeholder="address"
                style={{ padding: 8, backgroundColor: '#f5f5f5' }}
                onChangeText={(text) => setAddress(text)}></TextInput>
              <Text> Client City:{'\n'}</Text>
              <TextInput
                placeholder="City"
                style={{ padding: 8, backgroundColor: '#f5f5f5' }}
                onChangeText={(text) => setCity(text)}></TextInput>
              <Text> Client post code:{'\n'}</Text>
              <TextInput
                placeholder="post code"
                style={{ padding: 8, backgroundColor: '#f5f5f5' }}
                onChangeText={(text) => setPostCode(text)}></TextInput>
              <Text> Client phone number:{'\n'}</Text>
              <TextInput
                placeholder="phone number"
                style={{ padding: 8, backgroundColor: '#f5f5f5' }}
                onChangeText={(text) => setPhoneNumber(text)}></TextInput>
              <Text> Client Email:{'\n'}</Text>
              <TextInput
                placeholder="Email"
                style={{ padding: 8, backgroundColor: '#f5f5f5' }}
                onChangeText={(text) => setEmail(text)}></TextInput>
              <Text> Contact:{'\n'}</Text>
              <TextInput
                placeholder="contact person"
                style={{ padding: 8, backgroundColor: '#f5f5f5' }}
                onChangeText={(text) => setContactPerson(text)}></TextInput>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
function clientScreen({ navigation: { navigate } }) {
    return (
      <View style={Internalstyles.container}>
        <ImageBackground source={image} style={styles.image} />
        <ImageBackground
          source={bottom}
          style={{
            width: 390,
            height: 90,
            position: 'absolute',
            top: 670,
            left: 0,
          }}
        />
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
        <View
          style={{
            height: 350,
            width: 330,
            backgroundColor: '#ffffff',
            border: 'black',
            position: 'absolute',
            left: 30,
            top: 150,
            borderRadius: 20,
            boxShadow: '10px 10px 40px #454545',
            borderWidth: 5,
            borderColor: '#000000',
          }}>
          <Text style={styles.clientBox1} onPress={() => navigate('Info')}>
            Bob Dave
          </Text>
          <Text style={styles.clientBox2} onPress={() => navigate('Info')}>
            Sophie York
          </Text>
          <Text style={styles.clientBox3} onPress={() => navigate('Info')}>
            Camron Carter
          </Text>
        </View>
      </View>
    );
  }
function logoutScreen({ navigation: { navigate } }) {
    return (
      <View styles={Internalstyles.container}>
        <ImageBackground source={image} style={styles.image} />
        <ImageBackground
          source={bottom}
          style={{
            width: 390,
            height: 90,
            position: 'absolute',
            top: 670,
            left: 0,
          }}
        />
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
            fontSize: 24,
            color: 'black',
            position: 'absolute',
            top: 250,
            right: 75,
          }}>
          Do you want to sign out ?
        </Text>
        <View
          style={{
            position: 'absolute',
            top: 300,
            right: 170,
            height: window.height * 0.09,
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
            color="#32aa46"
            onPress={() => navigate('First')}
            title="Yes"
          />
          <Button color="#e42c22" onPress={() => navigate('main')} title="No" />
        </View>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="First" component={firstScreen} />
        <Stack.Screen name="Welcome" component={initialScreen} />
        <Stack.Screen name="main" component={mainScreen} />
        <Stack.Screen name="Sign Up" component={signInScreen} />
        <Stack.Screen name="Login" component={loginScreen} />
        <Stack.Screen name="Info" component={infoScreen} />
        <Stack.Screen name="Client" component={clientScreen} />
        <Stack.Screen name="Settings" component={settingsScreen} />
        <Stack.Screen name="LogOut" component={logoutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Change;
