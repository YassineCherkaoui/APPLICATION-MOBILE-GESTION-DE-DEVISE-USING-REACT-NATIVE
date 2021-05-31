import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Linking, Pressable } from 'react-native';

import axios from "axios"

const WalletNav = ({ navigation, route }) => {
    const { userData, data } = route.params;

    useEffect(() => {
        getWalletValue();
    });
    const [Wallet, SetWallet] = useState([])
    const [Sold, SetSold] = useState([])

    const getWalletValue = async () => {
        await axios.get(`https://forexbackend.herokuapp.com/api/user/info/${userData.email}`).then((walletdata) => {
            SetWallet(walletdata.data.walletSold)
            SetSold(walletdata.data.sold)
        })
        .catch((e) => {
            console.log(e)
        })
    }
  return (
    <View style={styles.bg}>
        <View style={styles.userInfo}>
       <Image source={{uri: `${userData.photo_url}`}} style={{width:80, height:80,borderRadius:30,marginLeft : 160,marginTop:30}} />
        <Text style={styles.userInfoTxt}>{userData.name}</Text>
        </View>

        <Text style={styles.walletNum}>Your Wallet: {Wallet}0,0 $</Text>
        <Text style={styles.walletNum}>Your Sold is: {Sold} 0,0 $</Text>
    </View>
  );
};

export default WalletNav;

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
    walletNum: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 100,
        textAlign: "center"
    }
});

