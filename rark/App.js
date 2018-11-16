import 'babel-polyfill'
import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { createStackNavigator, createSwitchNavigator, createBottomTabNavigator} from 'react-navigation'
import { createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import { AuthStack, AppTab } from './src/lib/Navigators'
import firebase from 'firebase/app'

firebase.initializeApp({
    apiKey: "AIzaSyDkR9xDAYJxdDHdN1mKuMqbee9DL0V8klM",
    authDomain: "rark-83f8f.firebaseapp.com",
    databaseURL: "https://rark-83f8f.firebaseio.com",
    projectId: "rark-83f8f",
    storageBucket: "rark-83f8f.appspot.com",
    messagingSenderId: "481654472265"
})

export default createSwitchNavigator(
  {
    Auth: AuthStack,
    App: AppTab
  },
  {
    initialRouteName: 'Auth'
  }
)
