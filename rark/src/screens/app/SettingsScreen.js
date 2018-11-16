// import liraries
import React, { Component } from 'react'
import {View, Text, StyleSheet, Button, Platform, ScrollView, TouchableOpacity, navigationOptions} from 'react-native'
import { createStackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'


// create a component
class SettingsScreen extends Component {
  static navigationOptions = {
    title: 'Settings'
  }
  constructor() {
    super()
    this.state = {
      username: '',
      allowPushNotifications: false,
      gender: ''
    }
  }

  render() {
    return (
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: Platform.OS === 'ios'
            ? colors.iosSettingsBackground
            : colors.white
        }}
      >
      </ScrollView>
    )
  }
}

const colors = {
  iosSettingsBackground: 'rgb(235,235,241)',
  white: '#FFFFFF',
  monza: '#C70039',
  switchEnabled: Platform.OS === 'android' ? '#C70039' : null,
  switchDisabled: Platform.OS === 'android' ? '#efeff3' : null,
  switchOnTintColor: Platform.OS === 'android' ? 'rgba(199, 0, 57, 0.6)' : null,
  blueGem: '#27139A'
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00c2cc'
  }
})

// make this component available to the app
export default SettingsScreen
