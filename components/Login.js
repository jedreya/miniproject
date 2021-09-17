import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, PureComponent } from 'react';

import { StyleSheet, Text, View, Image, Button, SafeAreaView, TouchableOpacity } from 'react-native';
import { fetch as fetchPolyfill } from 'whatwg-fetch'
import { NavigationContext } from 'react-navigation';
import * as GoogleSignIn from 'expo-google-sign-in';
import * as firebase from 'firebase/app';
import 'firebase/auth';
global.fetch = fetchPolyfill

export default function Login({ navigation }) {
	const auth = firebase.auth();

	async function signInWithGoogleAsync() {
	  try {
	    const result = await Google.logInAsync({
	      behavior: 'web',
	      //androidClientId: YOUR_CLIENT_ID_HERE,
	      iosClientId: '746902534968-rc3cnh2t9j5jlegbmnfhodn5ledi1cdm.apps.googleusercontent.com',
	      scopes: ['profile', 'email'],
	    });

	    if (result.type === 'success') {
	      return result.accessToken;
	    } else {
	      return { cancelled: true };
	    }
	  } catch (e) {
	    return { error: true };
	  }
	}

	function checkLoggedIn() {
		auth.onAuthStateChanged(user => {
			if(user) {
				navigation.navigate('Home')
			}
			else {
				signInWithGoogleAsync()
			}
		});
	};

	return(
		<SafeAreaView style={styles.container}>
            <SafeAreaView style={styles.titlecenter}>
                <TouchableOpacity style={styles.buttons} onPress={() => checkLoggedIn()}><Text> Sign In </Text></TouchableOpacity>
            </SafeAreaView>
        </SafeAreaView>
	);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    titlecenter: {
        alignItems: 'center'
    },
    buttons: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
    },
});