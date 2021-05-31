import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import LoginScreen from "./navigation/LoginScreen";
import ProfileScreen from "./navigation/ProfileScreen";
import ChartScreen from "./navigation/ChartScreen";
import WebView from "./navigation/WebView"
import Wallet from "./navigation/Wallet"

import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Chart" component={ChartScreen} />
        <Stack.Screen name="WebviewNav" component={WebView} />
        <Stack.Screen name="WalletNav" component={Wallet} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
})

// firebase@^5.7.3