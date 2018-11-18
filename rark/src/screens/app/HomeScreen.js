// import liraries
import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity, ScrollView, RefreshControl } from 'react-native'
import firebase from 'react-native-firebase'
import Icon from 'react-native-vector-icons/MaterialIcons'

class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {}}

  render() {
    return (
      <ScrollView>
      </ScrollView>
    )
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00c2cc'
  },
  addChoreCont: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 24,
    flexDirection: 'column'
  },
  addChoreText: {
    color: '#ffffff',
    fontSize: 16,
    paddingBottom: 15
  }
})

// make this component available to the app
export default HomeScreen
