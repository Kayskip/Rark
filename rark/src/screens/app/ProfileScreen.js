// import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Button } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation'

// create a component
class ProfileScreen extends Component {

  static navigationOptions = {
    title: 'PROFILE',

  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => this.props.navigation.navigate("CreateEventScreen")}
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.buttonText}
          title="Create an Event!"
          color="#ffffff"
          accessibilityLabel="Create an event and invite your mates"
        />
        <Button
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.buttonText}
          onPress={() => this.props.navigation.navigate("JoinFlat")}
          title="Join an Event!"
          color="#ffffff"
          accessibilityLabel="Join an existing party using the flatID!"
        />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00c2cc"
  },
  buttonStyle: {
    backgroundColor: "#ffa18a",
    width: 320,
    height: 45,
    margin: 10,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 10,
    
  },
  buttonText: {
    width: 300,
    fontSize: 20,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center'
  },
});

// make this component available to the app
export default ProfileScreen;
