import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, PureComponent } from 'react';

import { StyleSheet, Text, View, Image, Button, SafeAreaView, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import { fetch as fetchPolyfill } from 'whatwg-fetch'
global.fetch = fetchPolyfill

export default function Profile() {

    return (
        <SafeAreaView style={styles.container}>
            <SafeAreaView style={styles.titlecenter}>
                <Text style={styles.title}>EC463 SW MiniProject Profile Page</Text>
            </SafeAreaView>

            <SafeAreaView style={styles.buttoncontainer}>
                <SafeAreaView>
                    <TouchableOpacity style={styles.buttons}><Text> Button 1 </Text></TouchableOpacity>
                </SafeAreaView>
                <SafeAreaView>
                    <TouchableOpacity style={styles.buttons}><Text> Button 2 </Text></TouchableOpacity>
                </SafeAreaView>
            </SafeAreaView>


        </SafeAreaView >
    );
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
    },
    buttonContainer1: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        margin: 20,
    },
    button1: {
        flex: 0.1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    camera: {
        flex: 1,
        width: 200,
        height: 300
    },
});

