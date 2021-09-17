import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, PureComponent } from 'react';

import { StyleSheet, Text, View, Image, Button, SafeAreaView, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import { fetch as fetchPolyfill } from 'whatwg-fetch'
import { NavigationContext } from 'react-navigation';
global.fetch = fetchPolyfill




export default function Scan() {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.titlecenter}>
                <Camera style={styles.camera}>
                    <View style={styles.buttonContainer1}>
                        <TouchableOpacity
                            style={styles.button1}
                            onPress={() => {
                                setType(
                                    type === Camera.Constants.Type.back
                                        ? Camera.Constants.Type.front
                                        : Camera.Constants.Type.back
                                );
                            }}>
                            <Text style={styles.text}> Flip </Text>
                        </TouchableOpacity>
                    </View>
                </Camera>
            </View>
        </SafeAreaView>
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
