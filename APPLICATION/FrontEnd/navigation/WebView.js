import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Linking, Pressable } from 'react-native';
import { WebView } from 'react-native-webview';

const WebviewNav = ({ navigation, route }) => {
    const { data } = route.params;
  return (
    <WebView source={{ uri: data }} style={{ marginTop: 20 }} />
  );
};

export default WebviewNav;

const styles = StyleSheet.create({

});

