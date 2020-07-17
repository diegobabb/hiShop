import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import { SharedElement } from 'react-navigation-shared-element'
import { Colors, Size } from '../constants/Constants'

export default function DetailScreen(props) {
    const { item } = props.route.params
    return (
        <View style={styles.container}>
            <View>
                <SharedElement id={`item.${item.id}.photo`}>
                    <Image source={{ uri: item.foto }}
                        resizeMode='cover'
                        style={styles.photo} />
                </SharedElement>
            </View>
            <View style={styles.textWrapper}>
                <SharedElement id={`item.${item.id}.title`}>
                    <Text style={styles.title}>
                        {item.nombre}
                    </Text>
                </SharedElement>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.bg
    }, title: {
        fontFamily: 'galada',
        color: Colors.lightest,
        fontSize: 40,
    }, descripcion: {
        color: Colors.lightest,
        fontSize: 20,
    }, textWrapper: {
        padding: 15,
    }, photo: {
        width: '100%',
        height: Size.height - 350,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    }
});
