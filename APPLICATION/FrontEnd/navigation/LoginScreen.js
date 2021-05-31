import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';
import * as Google from "expo-google-app-auth";
import { SocialIcon } from 'react-native-elements'

import axios from 'axios'

const image = { uri: "https://balanceofeconomics.com/wp-content/uploads/2020/12/5c2cd5e0d2c521546442208.jpeg" };

const LoginScreen = ({ navigation }) => {
  const signInAsync = async () => {
    console.log("LoginScreen.js 6 | loggin in");
    try {
      const { type, user } = await Google.logInAsync({
        androidClientId: `607696297500-d29dk1ssear0btfbo847146s9rv8lvev.apps.googleusercontent.com`,
        scopes: ['profile', 'email'],
      });

      let userData = {name: user.name, email: user.email, photo_url: user.photoUrl}

      if (type === "success") {
        // Then you can use the Google REST API
        console.log("LoginScreen.js 17 | success, navigating to profile");
        // loginResult.user.name

        axios.post("http://localhost:8080/api/user/signUp", userData).then(() => {
          console.log("data inserted")
        })
        .catch((e) => {
          console.log("data not inserted")
        })
        navigation.navigate("Profile", { userData, user });
      }
    } catch (error) {
      console.log("LoginScreen.js 19 | error with login", error);
    }
  };

  return (
              <ImageBackground source={image} style={styles.image}>
                  <Text style={styles.titel}>Welcome TO FOREXAPP</Text>
    <View style={styles.container}>

  <SocialIcon
  title='Login with Google'
  button
  type='google'
  onPress={signInAsync}
  />


    </View>
         </ImageBackground>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container : {
    marginTop : 300,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  titel : {
    fontSize : 30,
    color:'white',
    fontWeight : "bold",
    textAlign : "center",
    marginTop:200,
  }
});
