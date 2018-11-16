import React, { Component } from 'react'
import { createStackNavigator } from 'react-navigation'
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialIcons'

import HomeScreen from '../screens/app/HomeScreen'
import FlatScreen from '../screens/app/FlatScreen'
import SettingsScreen from '../screens/app/SettingsScreen'
import GetStartedScreen from '../screens/auth/GetStartedScreen'
import LoginScreen from '../screens/auth/LoginScreen'
import SignupScreen from '../screens/auth/SignupScreen'
import NotificationsScreen from '../screens/app/NotificationsScreen'
import ProfileScreen from '../screens/app/ProfileScreen'
import hideTabBar from './HideTabBar'

const AuthStack = createStackNavigator({
  GetStarted: GetStartedScreen,
  Login: LoginScreen,
  Signup: SignupScreen
})

const HomeStack = createStackNavigator({
  HomeNav: HomeScreen,
})
HomeStack.navigationOptions = hideTabBar

const FlatStack = createStackNavigator({
  Flat: FlatScreen
})

FlatStack.navigationOptions = hideTabBar

const SettingsStack = createStackNavigator({
  SettingsNav: SettingsScreen,
  Notifications: NotificationsScreen,
  Profile: ProfileScreen
})

SettingsStack.navigationOptions = hideTabBar

const AppTab = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        tabBarIcon: <Icon name='people' size={25} />,
        tabBarLabel: 'Chores',
        tabBarColor: '#b2ebf2',
        shifting: true
      }
    },
    Flat: {
      screen: FlatStack,
      navigationOptions: {
        tabBarIcon: <Icon name='weekend' size={25} />,
        tabBarLabel: 'Your Flat',
        tabBarColor: '#80deea',
        shifting: true
      }
    },
    Settings: {
      screen: SettingsStack,
      navigationOptions: {
        tabBarIcon: <Icon name='account-circle' size={25} />,
        tabBarLabel: 'Settings',
        tabBarColor: '#26c6da',
        shifting: true
      }
    }
  },
  {
    initialRouteName: 'Home',
    barStyle: { backgroundColor: '#1c313a' }
  }
)

export {
  AuthStack,
  HomeStack,
  FlatStack,
  SettingsStack,
  AppTab
}
