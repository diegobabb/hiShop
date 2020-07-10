import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions, Animated, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, Platform, Easing } from 'react-native';
import RoundedTextInput from '../components/RoundedTextInput'
import ButtonGradient from '../components/ButtonGradient';
import Colors from '../constants/Colors';
const window = Dimensions.get('window');

export default class LogIn extends Component {

    constructor({ navigation }) {
        super();
        this.navigation = navigation
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
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.container}>
                    <KeyboardAvoidingView
                        style={{ ...styles.container, marginTop: 50 }}
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
                        <ButtonGradient style={styles.button} text="Iniciar" onPress={() => this.navigation.navigate("Home")} />
                        <TouchableOpacity onPress={() => this.navigation.navigate("SignUp")}>
                            <Text style={styles.text}>Registrarte</Text>
                        </TouchableOpacity>
                    </KeyboardAvoidingView>
                </View >
            </TouchableWithoutFeedback>
        );

    }
};

const styles = StyleSheet.create({
    logo: {
        height: window.width / 2,
        resizeMode: 'contain',
        marginBottom: 10,
        padding: 10,
        marginTop: 50
    }, container: {
        backgroundColor: Colors.bg,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }, input: {
        width: window.width - 65,
        marginVertical: 10,
    }, button: {
        width: window.width - 120,
        marginVertical: 20,
    }, text: {
        color: Colors.dark,
        textAlign: 'center',
        fontFamily: 'galada',
        fontSize: 25,
    }
});