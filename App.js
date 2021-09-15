import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, SafeAreaView, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <SafeAreaView style={styles.titlecenter}>
          <Text style={styles.title}>EC463 SW MiniProject</Text>
        </SafeAreaView>
        <SafeAreaView style={styles.buttoncontainer}>
          <SafeAreaView>
            <TouchableOpacity style={styles.buttons} onPress={() => console.log("button1 tapped")}><Text> Log Out </Text></TouchableOpacity>
          </SafeAreaView>
          <SafeAreaView>
            <TouchableOpacity style={styles.buttons} onPress={() => console.log("button2 tapped")}><Text> Scan Item </Text></TouchableOpacity>
          </SafeAreaView>
          <SafeAreaView>
            <TouchableOpacity style={styles.buttons} onPress={() => console.log("button3 tapped")}><Text> View Profile </Text></TouchableOpacity>
          </SafeAreaView>
        </SafeAreaView>


      </SafeAreaView >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    marginTop: 100,
    fontSize: 25,
  },
  titlecenter: {
    alignItems: 'center'
  },
  buttoncontainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

  },
  buttons: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  }
});
