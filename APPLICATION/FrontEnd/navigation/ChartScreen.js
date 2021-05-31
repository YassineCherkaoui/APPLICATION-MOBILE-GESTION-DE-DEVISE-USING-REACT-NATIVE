import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Linking, Pressable } from 'react-native';

import axios from "axios"

const ChartScreen = ({ navigation, route }) => {
    const { userData, data, cryptoPrice } = route.params;

    const webView = () => {
        navigation.navigate("WebviewNav", { userData, data });
    }
    const walletFun = () => {
        navigation.navigate("WalletNav", { userData, data })
    }
    const buyFun = () => {
        let GetUserData = {email: userData.email, price: cryptoPrice}

        axios.post("http://localhost:8080/api/user/buy", GetUserData).then(() => {
            console.log("data updated")
          })
          .catch((e) => {
            alert('Your wallet is empty')
          })
    }
    const sellFun = () => {
        let GetUserData = {email: userData.email, price: cryptoPrice}

        axios.post("http://localhost:8080/api/user/sell", GetUserData).then(() => {
            console.log("data updated")
          })
          .catch((e) => {
            alert('Your wallet is empty')
          })
    }

  return (
    <View style={styles.bg}>
        <View style={styles.userInfo}>
       <Image source={{uri: `${userData.photo_url}`}} style={{width:80, height:80,borderRadius:30,marginLeft : 160,marginTop:30}} />
        <Text style={styles.userInfoTxt}>{userData.name}</Text>
        </View>

        {/* <Pressable onPress={webView} style={{marginTop: 100}} >
            <Text style={{fontWeight: "bold", textAlign: "center"}} >View chart</Text>
        </Pressable> */}
            <Pressable onPress={webView} style={styles.BTN}>
                <Text style={{fontWeight: "bold",textAlign:"center"}} >View chart</Text>
            </Pressable>
        <View style={styles.btnGroup}>
            <Pressable onPress={buyFun} style={styles.BTN}>
                <Text style={{fontWeight: "bold"}} >BUY</Text>
            </Pressable>
            <Pressable onPress={sellFun} style={styles.BTN}>
                <Text style={{fontWeight: "bold"}} >SELL</Text>
            </Pressable>
                        <Pressable onPress={walletFun} style={styles.BTN}>
                <Text style={{fontWeight: "bold"}} >WALLET</Text>
            </Pressable>
        </View>
    </View>
  );
};

export default ChartScreen;

const styles = StyleSheet.create({
bg: {
    flex: 1,
    backgroundColor : "lightgreen"

  },
    userInfoTxt: {
    fontWeight: "bold", 
    marginTop : 20,
    textAlign : "center",
    fontSize : 30
    },
    btnGroup: {
        display: "flex",
        justifyContent: 'center',
        alignItems: "center"
    },
    BTN: {
        padding: 20,
        textAlign: "center",
        backgroundColor: "lightblue",
        margin: 10,
    },
});
