import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home'
import Profile from '../screens/Profile'

const Stack = createStackNavigator();

function MyStack() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="Profile" component={Profile} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}