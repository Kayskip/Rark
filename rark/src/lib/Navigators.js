import {TabNavigator} from 'react-navigation';
import React, { Component } from 'react'
import { createStackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
import HomeScreen from '../screens/app/HomeScreen'
import FlatScreen from '../screens/app/FlatScreen'
import GetStartedScreen from '../screens/auth/GetStartedScreen'
import LoginScreen from '../screens/auth/LoginScreen'
import SignupScreen from '../screens/auth/SignupScreen'
import NotificationsScreen from '../screens/app/NotificationsScreen'
import ProfileScreen from '../screens/app/ProfileScreen'
import hideTabBar from './HideTabBar'
import { createMaterialTopTabNavigator } from 'react-navigation';
import {StyleSheet} from 'react-native';

const AuthStack = createStackNavigator({
  GetStarted: GetStartedScreen,
  Login: LoginScreen,
  Signup: SignupScreen
})

const AppTab = createMaterialTopTabNavigator(
  {
    Profile: {
      screen: ProfileScreen,

    },
    Home: {
      screen: HomeScreen,
 
    },
    Flat: {
      screen: FlatScreen,

    },
  },
  {
    initialRouteName: 'Home',
    barStyle: { backgroundColor: '#00c2cc' ,activeTintColor: '#F8F8F8',
    inactiveTintColor: '#586589'}
  },

);

export {
  AuthStack,
  AppTab
}
