import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home'
import Profile from './screens/Profile'
import LogIn from './screens/LogIn';
import * as Font from 'expo-font';

const Stack = createStackNavigator();

export default class App extends React.Component {

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
				<LogIn />
			)
		else
			return (<View><Text>AUN NO CARGO</Text></View >)
	}


	// return (
	// 	<NavigationContainer>
	// 		<Stack.Navigator initialRouteName="Home">
	// 			<Stack.Screen name="Home" component={Home} />
	// 			<Stack.Screen name="Profile" component={Profile} />
	// 		</Stack.Navigator>
	// 	</NavigationContainer>
	// );
}

const styles = StyleSheet.create({});
