import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

import logo from '../Images/logo.png'

export default class Logo extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={{ width: 120, height: 120, borderRadius:15 }}
          source={logo} />
        <Text style={styles.logoText}>Welcome to the Rark</Text>
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
    color: 'grey'
  },

})
