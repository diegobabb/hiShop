import React from 'react'
import { StyleSheet, View, FlatList, Text, ScrollView } from 'react-native'
import { Colors } from '../constants/Constants'
import { ImageCard, ButtonText } from '../components/Components'
import data from '../data'

export default class Home extends React.Component {

    constructor({ navigation }) {
        super()
        this.navigation = navigation
    }

    render() {
        return (
            <View style={styles.container} >
                <View>
                    <FlatList
                        data={data}
                        horizontal
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => {
                            return (<ImageCard item={item} navigation={this.navigation} />)
                        }}
                    />
                </View>
                <View style={styles.textWrapper}>
                    <Text style={styles.textPopular}>
                        Popular
                    </Text>
                    <ButtonText textStyle={styles.textVerTodo} text='Ver todo' />
                </View>
                <View>
                    <FlatList
                        data={data}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => {
                            return (<ImageCard item={item} navigation={this.navigation} />)
                        }}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.bg,
    }, textWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    }, textPopular: {
        color: Colors.dark,
        fontFamily: 'galada',
        fontSize: 43,
    }, textVerTodo: {
        fontWeight: 'bold',
        fontSize: 18,
        fontFamily: null,
    }
});
