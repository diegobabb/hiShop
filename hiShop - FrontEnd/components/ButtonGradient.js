import React from 'react'
import { StyleSheet, Text, ActivityIndicator } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import TouchableScale from 'react-native-touchable-scale';
import Colors from '../constants/Colors'

export default function ButtonGradient(props) {
    return (
        <TouchableScale {...props} style={styles.button}>
            <LinearGradient
                colors={[Colors.lightest, Colors.dark]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{ ...styles.buttonGradient, ...props.style }}>
                {props.loading ? <ActivityIndicator animating={true} size="large" color={Colors.lightest} /> : <Text style={styles.text}>{props.text}</Text>}
            </LinearGradient>
        </TouchableScale>
    );
}

const styles = StyleSheet.create({
    button: {
        shadowColor: 'black',
        shadowOffset: { width: 5, height: 5 },
        shadowRadius: 5,
        shadowOpacity: 0.3,
        borderRadius: 10,
    }, buttonGradient: {
        padding: 10,
        borderRadius: 10
    }, text: {
        fontFamily: 'galada',
        fontSize: 25,
        color: Colors.white,
        textAlign: 'center',
    },
});
