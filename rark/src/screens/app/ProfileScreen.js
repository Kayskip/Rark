// import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

// create a component
class ProfileScreen extends Component {

  constructor() {
    super();
    this.state = {
      inGroupOrEvent: true
    };
  }

  static navigationOptions = {
    tabBarIcon: () => <Icon size={20} name={'face'} />
  };

  CheckGrouporEventCondition() {
    if (this.state.inGroupOrEvent)
      return this.displayGroupOrEventView()
    else
      return this.joinGroupOrEventView()
  }

  joinGroupOrEventView() {
    return (
      <View style={styles.container}>
         <TouchableOpacity
          style={styles.button}
        >
          <Text style={styles.buttonText}>{"crack"}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  displayGroupOrEventView() {
    <View style={styles.container}>
      <TouchableOpacity
          style={styles.button}
        >
          <Text style={styles.buttonText}>{"herll"}</Text>
        </TouchableOpacity>
  </View>
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.profilepic}>
          <Image style={styles.profilepic} source={require('../../Images/empty-profile.png')}></Image>
        </View>
        <Text style={styles.name}>JOHN</Text>
        <View style={styles.star}><Text>4.5</Text><Icon name="star" size={20} color="grey"></Icon></View>


        <View style={styles.icons}>

          {this.CheckGrouporEventCondition()}
          {/* <Icon style={styles.cog} name="face" size={20} ></Icon>
          
          <Icon style={styles.pencil} name="face" size={20} ></Icon> */}

        </View>
        <TouchableOpacity style={styles.buttonStyle}
          onPress={() => this.props.navigation.navigate("Profile")}
        />
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => this.props.navigation.navigate("Profile")}
        />
      </View>

    )
  };
}
const styles = StyleSheet.create({
  buttonStyle: {
    width: 300,
    backgroundColor: "#00c2cc",
    borderRadius: 10,
    paddingVertical: 12,
    marginVertical: 6
  },

  profilepic: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 120,
  },
  icons: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',

  },
  star: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  cog: {
    paddingRight: 130,
    paddingBottom: 100,
  },
  pencil: {
    paddingLeft: 130,
    paddingBottom: 100,
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    width: 300,
    backgroundColor: '#00c2cc',
    borderRadius: 10,
    paddingVertical: 12,
    marginVertical: 6
  },

  buttonText: {
    width: 300,
    fontSize: 20,
    fontWeight: '500',
    color: 'black',
    textAlign: 'center'
  }
});

// make this component available to the app
export default ProfileScreen;
