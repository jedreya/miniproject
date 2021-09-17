import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, PureComponent } from 'react';

import { StyleSheet, Text, View, Image, Button, SafeAreaView, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import { fetch as fetchPolyfill } from 'whatwg-fetch'
import { NavigationContext } from 'react-navigation';
global.fetch = fetchPolyfill

export default function Home({ navigation }) {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);
    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }


    //const fetch = require("node-fetch");
    const params = {
        api_key: 'tyAxpZ5dhOxlNT0WTnQJAm5ifwa5wyKpfKBbblMi',
        query: 'cheddar cheese',
        dataTypes: ["Survey (FNDDS)"],
        pagesize: 5,
    };
    const api_url = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${encodeURIComponent(params.api_key)}&query=${encodeURIComponent(params.query)}&dataTypes=${encodeURIComponent(params.dataTypes)}&pagesize=${encodeURIComponent(params.pagesize)}`

    function getData() {
        return fetch(api_url).then(response => response.json())
    }

    return (
        <SafeAreaView style={styles.container}>
            <SafeAreaView style={styles.titlecenter}>
                <Text style={styles.title}>EC463 SW MiniProject Home</Text>
            </SafeAreaView>

            <SafeAreaView style={styles.buttoncontainer}>
                <SafeAreaView>
                    <TouchableOpacity style={styles.buttons} onPress={() => getData().then(data => console.log(data.foods[0]))}><Text> Log Out </Text></TouchableOpacity>
                </SafeAreaView>
                <SafeAreaView>
                    <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate('Scan')}><Text> Scan Item </Text></TouchableOpacity>
                </SafeAreaView>
                <SafeAreaView>
                    <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate('Profile')}><Text> View Profile </Text></TouchableOpacity>
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
