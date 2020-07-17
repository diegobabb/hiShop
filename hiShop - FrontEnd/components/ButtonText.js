import React from 'react'
import { StyleSheet, Text } from 'react-native'
import TouchableScale from 'react-native-touchable-scale'
import Colors from '../constants/Colors'

export default function ButtonGradient(props) {
    return (
        <TouchableScale {...props}>
            <Text style={[styles.text, props.textStyle]}>{props.text}</Text>
        </TouchableScale>
    );
}

const styles = StyleSheet.create({
    text: {
        color: Colors.dark,
        textAlign: 'center',
        fontFamily: 'galada',
        fontSize: 20,
    }
});
