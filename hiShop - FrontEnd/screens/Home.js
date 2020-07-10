import React from 'react'
import { StyleSheet, View, Button } from 'react-native'
import Colors from '../constants/Colors';

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Button title='touchMe' onPress={() => navigation.navigate('Profile')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.bg,
    },
});
