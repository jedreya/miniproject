import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, PureComponent } from 'react';

import { StyleSheet, Text, View, Image, Button, SafeAreaView, TouchableOpacity } from 'react-native';
import { fetch as fetchPolyfill } from 'whatwg-fetch'
import { NavigationContext } from 'react-navigation';
import * as GoogleSignIn from 'expo-google-sign-in';
//import * as firebase from 'firebase/app';
import firebase from 'firebase/app';
import "firebase/auth";


global.fetch = fetchPolyfill

export default function Login({ navigation }) {
  const auth = firebase.auth();

  function onSignIn(googleUser) {
    console.log('Google Auth Response', googleUser);
    // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      unsubscribe();
      // Check if we are already signed-in Firebase with the correct user.
      if (!this.isUserEqual(googleUser, firebaseUser)) {
        // Build Firebase credential with the Google ID token.
        const credential = GoogleAuthProvider.credential(
          googleUser.idToken,
          googleUser.accessToken
        );
        // Sign in with credential from the Google user.
        signInWithCredential(auth, credential).then(function (result) {
          if (result.additionalUserInfo.isNewUser) {
            firebase.database()
            firebase.ref('/users/' + result.user.uid)
            firebase.set({
              gmail: result.user.email,
              profile_picture: result.additionalUserInfo.profile.picture,
              first_name: result.additionalUserInfo.profile.given_name,
              last_name: result.additionalUserInfo.profile.family_name,
              created_at: Date.now()
            })
          } else {
            firebase.database()
            firebase.ref('/users/' + result.user.uid)
            firebase.update({
              last_logged_in: Date.now()
            });
          }
        })
          .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The credential that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
          })
      };
    })
  };

  function isUserEqual(googleUser, firebaseUser) {
    if (firebaseUser) {
      const providerData = firebaseUser.providerData;
      for (let i = 0; i < providerData.length; i++) {
        if (providerData[i].providerId === GoogleAuthProvider.PROVIDER_ID &&
          providerData[i].uid === googleUser.getBasicProfile().getId()) {
          // We don't need to reauth the Firebase connection.
          return true;
        }
      }
    }
    return false;
  }

  async function signInWithGoogleAsync() {
    try {
      const result = await Google.logInAsync({
        behavior: 'web',
        //androidClientId: YOUR_CLIENT_ID_HERE,
        iosClientId: '746902534968-rc3cnh2t9j5jlegbmnfhodn5ledi1cdm.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
      });

      if (result.type === 'success') {
        onSignIn(result);
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
      if (user) {
        navigation.navigate('Home')
      }
      else {
        signInWithGoogleAsync()
      }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.titlecenter}>
        <TouchableOpacity style={styles.buttons} onPress={() => checkLoggedIn()}><Text> Sign In </Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate('Home')}><Text> Home </Text></TouchableOpacity>
      </SafeAreaView>
    </SafeAreaView>
  );
};

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