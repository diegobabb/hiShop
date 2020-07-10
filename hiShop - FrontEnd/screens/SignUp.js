import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, KeyboardAvoidingView, Animated, Platform, Easing, Keyboard, TouchableWithoutFeedback } from 'react-native';
import RoundedTextInput from '../components/RoundedTextInput'
import ButtonGradient from '../components/ButtonGradient';
import Colors from '../constants/Colors';

const window = Dimensions.get('window');

export default class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            onSubmitForm: false
        }
        this.imageHeight = new Animated.Value(1);
        this.dos = React.createRef();
        this.tres = React.createRef();
        this.cuatro = React.createRef();
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
            toValue: 0.8,
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
                    <Animated.Image style={{ ...styles.perfilIcon, transform: [{ scale: this.imageHeight }] }} source={require('../assets/usuario.png')} />
                    <KeyboardAvoidingView
                        style={styles.container}
                        behavior="padding"
                        enabled
                        keyboardVerticalOffset={70}
                    >
                        <RoundedTextInput style={styles.input}
                            placeholder="Apodo"
                            returnKeyType="next"
                            onSubmitEditing={() => { this.dos.current.focus() }}
                        />
                        <RoundedTextInput style={styles.input}
                            innerRef={this.dos}
                            onSubmitEditing={() => { this.tres.current.focus() }}
                            placeholder="Email"
                            autoCompleteType="email"
                            keyboardType="email-address"
                            returnKeyType="next"
                        />
                        <RoundedTextInput style={styles.input}
                            innerRef={this.tres}
                            onSubmitEditing={() => { this.cuatro.current.focus() }}
                            placeholder="Contraseña"
                            secureTextEntry
                            autoCompleteType="password"
                            returnKeyType="next"
                        />
                        <RoundedTextInput style={styles.input}
                            innerRef={this.cuatro}
                            placeholder="Repite la contraseña"
                            secureTextEntry
                            autoCompleteType="password"
                            onSubmitEditing={() => { this.setState({ onSubmitForm: true }) }}
                        />
                        <ButtonGradient loading={this.state.onSubmitForm ? true : false} style={styles.button} text="Iniciemos" onPress={() => { this.setState({ onSubmitForm: true }) }} />
                    </KeyboardAvoidingView >
                </View >
            </TouchableWithoutFeedback>
        );
    }
};

const styles = StyleSheet.create({
    perfilIcon: {
        height: window.width / 3,
        resizeMode: 'contain',
        marginTop: 20,
    }, container: {
        flexDirection: 'column',
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