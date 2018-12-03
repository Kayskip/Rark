import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

import splash from '../Images/splash.jpg'
import { Dimensions } from "react-native";


export default class Gif extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={styles.imageContainer}
                        source={splash} />
                </View>
                <View style={styles.overlay} />
            </View >

        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    imageContainer: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height+40
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgb(0,0,0)'
    }
})
