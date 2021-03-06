import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
//import * as firebase from 'firebase/app';
import { firebase } from '@firebase/app';

import Home from './components/Home';
import Profile from './components/Profile';
import Scan from './components/Scan';
import Login from './components/Login';
import { firebaseConfig } from './config';
firebase.initializeApp(firebaseConfig);

const RootStack = createStackNavigator({
  Login: {
    screen: Login,
  },
  Home: {
    screen: Home,
  },
  Profile: {
    screen: Profile,
  },
  Scan: {
    screen: Scan,
  },
})

const App = createAppContainer(RootStack);
export default App;

//export default class App extends React.Component {
  //render() {
    //return <RootStack />;
  //}
//}

//const styles = StyleSheet.create({
  //container: {
    //flex: 1,
    //backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center'
  //}
//})