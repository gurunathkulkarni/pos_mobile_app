import { Text, StyleSheet, View, Image } from 'react-native'
import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <View>
                <Image style={{ resizeMode: 'contain', height: 40, width: 40 }} source={require('../Assets/hamburger.jpeg')} />

                </View>
                <View style={styles.leftSide}>
                    <Image style={{ resizeMode: 'contain', height: 40, width: 40 }} source={require('../Assets/mario.jpeg')} />
                    <Text style={styles.title}>Valtech</Text>
                    <Text style={styles.title}>Banglore</Text>
                    <Text style={styles.title}>User</Text>
                </View>
                <View style={styles.rightSide}>
                <Text style={styles.title}>5/06/2023 7:03</Text>
             
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'white',

        flexDirection: 'row',
        height: 60,
        padding:10
    },
    leftSide: {
        flex:1.5,
        height: 100,
        flexDirection: 'row',
        justifyContent:'space-around',paddingRight:10
    },
    rightSide: {
        height: 100,
        flexDirection: 'row',
        flex:1,
    },
    title:{
fontSize:20,
color:'black',
fontWeight:'600'
    }
})