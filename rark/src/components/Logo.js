import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
export default class Logo extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Icon name="hand-peace-o" size={70} color="white"></Icon>
        <Text style={styles.logoText}>Welcome to on the Rark.</Text>
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
    color: 'white'
  },

})
