// import liraries
import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'
import LoginForm from '../../components/LoginForm'
import Logo from '../../components/Logo'

// create a component
class LoginScreen extends Component {
  static navigationOptions = { header: null }

  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <LoginForm type='Login' />
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Don't have an account yet?</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Signup')}
          >
            <Text style={styles.signupButton}> Sign up!</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  signupTextCont: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingVertical: 16,
    flexDirection: 'row',
  
  },
  signupText: {
    color: 'grey',
    fontSize: 16
  },
  signupButton: {
    color: '#00c2cc',
    fontSize: 16,
    fontWeight: '700'
  }
})

// make this component available to the app
export default LoginScreen
