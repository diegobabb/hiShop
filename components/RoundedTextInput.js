import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Colors from '../constants/Colors'
import { LinearGradient } from 'expo-linear-gradient'

export default function RoundedTextInput(props) {
    return (
        <View {...props.style} style={[styles.shadow, styles.container]}>
            <View style={[styles.whiteShadow, styles.container]}>
                <LinearGradient
                    colors={['white', Colors.lightgrey]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.container}>
                    <TextInput {...props}
                        style={styles.input} />
                </LinearGradient>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 10,
        width: '100%',
        shadowRadius: 10,
    }, input: {
        backgroundColor: 'transparent',
        fontSize: 25,
        padding: 15,
        color: 'dimgray',
    }, shadow: {
        shadowColor: 'black',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.2,
    }, whiteShadow: {
        shadowColor: 'white',
        shadowOffset: { width: -5, height: -5 },
        shadowOpacity: 1,
    }
});
