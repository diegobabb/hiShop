import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

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
        backgroundColor: 'red',
    },
});
