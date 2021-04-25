import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
}from 'react-native';
import { Header } from '../components/Header';

export function MyPlants(){
    return(
        <View style={styles.contanier}>
            <Header />
        </View>

    )
}

const styles = StyleSheet.create({
    contanier:{

    }
})