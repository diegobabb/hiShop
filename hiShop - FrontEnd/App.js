import { StyleSheet, View, Text, StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Home, Profile, LogIn, DetailScreen, SignUp } from './screens/Screens'
import * as Font from 'expo-font';
import { Colors } from './constants/Constants';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

const Stack = createSharedElementStackNavigator();

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
					<StatusBar style="dark" />
					<Stack.Navigator initialRouteName="LogIn" screenOptions={{
						headerTintColor: Colors.dark,
						headerTitleStyle: styles.headerTitleStyle,
						headerStyle: styles.headerStyle,
					}}>
						<Stack.Screen name="LogIn" component={LogIn} options={{ headerShown: false, headerTransparent: true }} />
						<Stack.Screen name="SignUp" component={SignUp} />
						<Stack.Screen name="Home" component={Home} options={{ headerLeft: false }} />
						<Stack.Screen name="Profile" component={Profile} />
						<Stack.Screen name="DetailScreen" component={DetailScreen} options={{
							headerTransparent: true,
							headerTitle: null,
							cardStyleInterpolator: ({ current: { progress } }) => {
								return {
									cardStyle: {
										opacity: progress
									}
								}
							}
						}}
							sharedElementsConfig={(route) => {
								const { item } = route.params
								return [
									{
										id: `item.${item.id}.photo`,
										animation: 'move',
										resize: 'clip',
										align: 'center-top'
									}, {
										id: `item.${item.id}.title`,
										animation: 'fade',
										resize: 'clip',
										align: 'left-center'
									},
								]
							}} />
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
