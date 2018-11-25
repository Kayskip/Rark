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

const HomeStack = createStackNavigator({
  HomeNav: HomeScreen,
})
HomeStack.navigationOptions = hideTabBar

const FlatStack = createStackNavigator({
  Flat: FlatScreen
})

FlatStack.navigationOptions = hideTabBar

const ProfileStack = createStackNavigator({
  ProfileNav: ProfileScreen,
  Notifications: NotificationsScreen,
  Profile: ProfileScreen
})

ProfileScreen.navigationOptions = hideTabBar


const AppTab = createMaterialTopTabNavigator(
  {
    Profile: {
      screen: ProfileStack,

    },
    Home: {
      screen: HomeStack,
 
    },
    Flat: {
      screen: FlatStack,

    },
  },
  {
    initialRouteName: 'Home',
    barStyle: { backgroundColor: '#1c313a' }
  },

);
const styles = StyleSheet.create({
  icon:{
   
  }
});
export {
  AuthStack,
  HomeStack,
  FlatStack,
  ProfileStack,
  AppTab
}
