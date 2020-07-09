import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions, ScrollView, Animated, Keyboard, KeyboardAvoidingView, Platform, StatusBar, Easing } from 'react-native';
import RoundedTextInput from '../components/RoundedTextInput'
import ButtonGradient from '../components/ButtonGradient';
import Colors from '../constants/Colors';
const window = Dimensions.get('window');

const IMAGE_HEIGHT = window.width / 2;

export default class LogIn extends Component {
    constructor(props) {
        super(props);
        this.imageHeight = new Animated.Value(1);
        if (Platform.OS == 'ios') {
            this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
            this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
        }
    }

    componentWillUnmount() {
        this.keyboardWillShowSub.remove();
        this.keyboardWillHideSub.remove();
    }

    keyboardWillShow = (event) => {
        Animated.timing(this.imageHeight, {
            duration: event.duration,
            toValue: 0.7,
            easing: Easing.linear,
            useNativeDriver: false,
        }).start();
    };

    keyboardWillHide = (event) => {
        Animated.timing(this.imageHeight, {
            duration: event.duration,
            toValue: 1,
            easing: Easing.linear,
            useNativeDriver: false,
        }).start();
    };

    render() {
        return (
            <ScrollView style={{ backgroundColor: Colors.bg }} contentContainerStyle={{ flexGrow: 1 }}>
                <StatusBar style='dark' />
                <KeyboardAvoidingView
                    style={styles.container}
                    contentContainerStyle={{ flexGrow: 1 }}
                    behavior="padding"
                >
                    <Animated.Image source={require('../assets/logo.png')} style={{ ...styles.logo, transform: [{ scale: this.imageHeight }] }} />
                    <RoundedTextInput style={styles.input}
                        placeholder="Email"
                        autoCompleteType="email"
                        keyboardType="email-address"
                    />
                    <RoundedTextInput style={styles.input}
                        placeholder="Password"
                        secureTextEntry
                        autoCompleteType="password"
                    />
                    <ButtonGradient style={styles.button} text="Iniciar" />
                    <TouchableOpacity>
                        <Text style={styles.text}>Registrarte</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </ScrollView>
        );

    }
};

const styles = StyleSheet.create({
    logo: {
        height: IMAGE_HEIGHT,
        resizeMode: 'contain',
        marginBottom: 20,
        padding:10,
        marginTop:20
    }, container: {
        backgroundColor: Colors.bg,
        padding: 30,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }, input: {
        marginVertical: 10,
    }, button: {
        marginHorizontal: 50,
        marginVertical: 20,
    }, text: {
        color: Colors.dark,
        textAlign: 'center',
        fontFamily: 'galada',
        fontSize: 25,
    }
});