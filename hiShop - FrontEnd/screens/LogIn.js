import React, { Component } from 'react';
import { View, StyleSheet, Animated, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, Easing } from 'react-native';
import { RoundedTextInput, ButtonGradient, ButtonText } from '../components/Components'
import { Colors, Size } from '../constants/Constants';

export default class LogIn extends Component {

    constructor({ navigation }) {
        super();
        this.navigation = navigation
        this.imageHeight = new Animated.Value(1);
        this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
        this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
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
            useNativeDriver: true,
        }).start();
    }

    keyboardWillHide = (event) => {
        Animated.timing(this.imageHeight, {
            duration: event.duration,
            toValue: 1,
            easing: Easing.linear,
            useNativeDriver: true,
        }).start();
    }

    login() {
        this.navigation.reset({
            index: 0,
            routes: [
                { name: 'Home' },
            ],
        })
    }

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
                        <ButtonGradient style={styles.button} text="Iniciar" onPress={() => this.login()} />
                        <ButtonText textStyle={styles.textRegistrar} text='Registrarte' onPress={() => this.navigation.navigate("SignUp")} />
                    </KeyboardAvoidingView>
                </View >
            </TouchableWithoutFeedback>
        );

    }
};

const styles = StyleSheet.create({
    logo: {
        height: Size.width / 2,
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
        width: Size.width - 65,
        marginVertical: 10,
    }, button: {
        width: Size.width - 120,
        marginVertical: 20,
    }, textRegistrar: {
        fontSize: 25,
    }
});