import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import Colors from '../constants/Colors'

export default function ButtonGradient(props) {
    return (
        <TouchableOpacity activeOpacity={0.5} {...props} style={styles.button}>
            <LinearGradient
                colors={[Colors.light, Colors.dark]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{ ...styles.buttonGradient, ...props.style }}>
                <Text style={styles.text}>{props.text}</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        shadowColor: 'black',
        shadowOffset: { width: 5, height: 5 },
        shadowRadius: 10,
        shadowOpacity: 0.3,
        borderRadius: 10
    }, buttonGradient: {
        borderRadius: 10
    }, text: {
        fontFamily: 'galada',
        fontSize: 25,
        padding: 10,
        color: Colors.white,
        textAlign: 'center',
    }
});
