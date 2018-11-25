
import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity, Image } from 'react-native'


class Header extends Component {
  render() {
    return (
      <View>
        <Image> style={styles.headerBackground} source = {require()}> </Image>
        <View> style={styles.header}></View>
        <View> style={styles.profilepicWrap}> </View>
        <Image> style={styles.profilepic} source = {require()}/></Image>
        <Text> style {styles.name}>JOHN</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  headerBackground: {
    flex: 1,
    alignSlef: 'stretch'
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.5',
  },
  profilepicWrap: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderColor: 'rgba(0,0,0,0.4)',
    borderWidth: 16,
  },
  profilepic: {
    flex: 1,
    width: null,
    alignSelf: 'stretch',
    borderRadius: 100,
    borderColor: '#fff',
    fontWeight: 'bold'
  },
  name: {
    marginTop: 20,
    fontSiz: 16,
    color: '$fff',
    fontWeight: 'bold'
  },
  pos: {
    fontSize: 14,
    color: '#0394c',
    fontWeight: '300',
    fontStyle: 'italic'
  }
});