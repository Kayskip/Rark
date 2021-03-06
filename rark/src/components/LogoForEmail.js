import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export default class LogoForEmail extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={{ width: 120, height: 120 }}
                    source={{ uri: 'https://i.imgur.com/KyBlg4b.png' }} />
                <Text style={styles.logoText}>Please Enter details in the form below.</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    logoText: {
        marginVertical: 15,
        fontSize: 18,
        color: 'rgba(255,255,255,0.7)'
    }
})
