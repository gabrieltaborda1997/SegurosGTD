import 'react-native-gesture-handler';
import React, { Component } from 'react'
import { View, Text, ScrollView, TextInput, Button, StyleSheet } from 'react-native'
import Screen2 from './Screen2'

export default function Home ({navigation}){
    return(
        <View style={styles.container}>
            <Button title="Proximo"
                  onPress={ () => navigation.navigate('Screen2')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 20,
        color: 'white',
        textAlign: 'justify'
    }
})