// import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Button } from "react-native-elements";
import { createStackNavigator } from "react-navigation";


// create a component
class FlatScreen extends Component {
  static navigationOptions = {
    tabBarIcon:() => <Icon size={ 20 } name={ 'notifications-none' } />
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: "rgba(0,0,0,0.2)",
            alignItems: "center",
            justifyContent: "center",
            width: 100,
            height: 100,
            backgroundColor: "#fff",
            borderRadius: 100
          }}
        >
          <Icon name={"chevron-right"} size={30} color="#01a699" />
        </TouchableOpacity>
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
    borderRadius: 10
  },
  buttonText: {
    width: 300,
    fontSize: 20,
    fontWeight: "500",
    color: "#ffffff",
    textAlign: "center"
  }
});

// make this component available to the app
export default FlatScreen;
