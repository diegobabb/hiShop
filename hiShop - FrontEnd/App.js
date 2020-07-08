import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home'
import Profile from './screens/Profile'
import LogIn from './screens/LogIn';

const Stack = createStackNavigator();

export default function App() {
	return (
		<LogIn />
	)


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
