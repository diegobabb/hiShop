import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import { Colors, Size } from '../constants/Constants'
import { SharedElement } from 'react-navigation-shared-element';
import { LinearGradient } from 'expo-linear-gradient'
import TouchableScale from 'react-native-touchable-scale';

export default function ImageCard({ item, navigation }) {
    return (
        <View style={styles.container}>
            <View>
                <TouchableScale
                    activeScale={0.9}
                    tension={50}
                    friction={5}
                    useNativeDriver
                    onPress={() => navigation.navigate('DetailScreen', { item: item })}>
                    <View style={styles.image}>
                        <SharedElement id={`item.${item.id}.photo`}>
                            <Image resizeMode='cover' source={{ uri: item.foto }} style={styles.image} />
                        </SharedElement>
                    </View>
                    <View style={styles.textWrapper}>
                        <LinearGradient
                            colors={[Colors.lightest, Colors.dark]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}>
                            <SharedElement id={`item.${item.id}.title`}>
                                <Text style={styles.title}>
                                    {item.nombre}
                                </Text>
                            </SharedElement>
                        </LinearGradient>
                    </View>
                </TouchableScale>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 15,
        shadowColor: 'black',
        shadowOffset: { width: 5, height: 5 },
        shadowRadius: 5,
        shadowOpacity: 0.3,
        borderRadius: 10
    }, image: {
        backgroundColor: Colors.bg,
        height: Size.height - 550,
        width: Size.width - 200,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
    }, textWrapper: {
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        overflow: 'hidden',
    }, title: {
        padding: 15,
        fontWeight: 'bold',
        color: Colors.bg,
        fontSize: 25,
    }, descripcion: {
        color: Colors.bg,
        fontSize: 20,
    },
});
