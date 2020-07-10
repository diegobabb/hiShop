import { StyleSheet, View, Text, StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home'
import Profile from './screens/Profile'
import LogIn from './screens/LogIn';
import * as Font from 'expo-font';
import SignUp from './screens/SignUp';
import Colors from './constants/Colors';

const Stack = createStackNavigator();

export default class App extends Component {

	constructor() {
		super()
		this.state = {
			fontLoaded: false
		}
	}

	async componentDidMount() {
		await Font.loadAsync({
			galada: require('./assets/fonts/Galada-Regular.ttf')
		})
		this.setState({ fontLoaded: true })
	}

	componentWillUnmount() {
		this.setState({ fontLoaded: false })
	}

	render() {
		if (this.state.fontLoaded)
			return (
				<NavigationContainer>
					<StatusBar style="dark"/>
					<Stack.Navigator initialRouteName="LogIn" screenOptions={{
						headerTransparent: true,
						headerTintColor: Colors.dark,
						headerTitleStyle: styles.headerTitleStyle,
						headerStyle: styles.headerStyle,
					}}>
						<Stack.Screen name="LogIn" component={LogIn} options={{ headerShown: false }} />
						<Stack.Screen name="SignUp" component={SignUp} options={{ headerTransparent: false }} />
						<Stack.Screen name="Home" component={Home} />
						<Stack.Screen name="Profile" component={Profile} />
					</Stack.Navigator>
				</NavigationContainer>
			)
		return (<View><Text>AUN NO CARGO</Text></View >)
	}
}

const styles = StyleSheet.create({
	headerTitleStyle: {
		fontFamily: 'galada',
		fontSize: 43,
	}, headerStyle: {
		shadowColor: 'transparent',
		backgroundColor: Colors.bg,
	},
});
