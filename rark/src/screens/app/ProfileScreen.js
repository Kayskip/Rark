// import liraries
import React, { Component } from "react";
import { 
  View,
  Text,
  StyleSheet,
  Image,
  Button
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

// create a component
class ProfileScreen extends Component {
  render() {
    return (
      <View>

       <View style ={styles.profilepicWrap}>
       <Image style = {styles.profilepic} source = {require('../../Images/empty-profile.png')}></Image>
       </View>
       <Text style={styles.name}>JOHN</Text>
       <View style= {styles.iconWrap}><Icon name="star-o" size={40} color="gold"></Icon>
       <Icon name="star-o" size={40} color="gold"></Icon>
       <Icon name="star-o" size={40} color="gold"></Icon>
       <Icon name="star-o" size={40} color="gold"></Icon>
       <Icon name="star-half-full" size={40} color="gold"></Icon>
       </View>
       <Button
          onPress={() => this.props.navigation.navigate("Edit Profile")}
          titleStyle={styles.buttonText}
          buttonStyle={styles.buttonStyle}
          title="Edit Profile"
          accessibilityLabel="Edit your profile!"
        />
      </View>
    )};
}
const styles = StyleSheet.create({
  profilepic: {
    flex:1,
    width:null,
    alignSelf:'stretch',
    borderRadius: 100,
    borderColor:'#fff',
    borderWidth:4
  },
  iconWrap:{
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  profilepicWrap:{
    width: 140,
    height: 140,
    borderRadius:100,
    alignItems:'center',
  },
  name:{
    marginLeft:160
  },
  rating:{
    marginLeft:150
  },
  buttonStyle: {
    backgroundColor: "orange",
    width: 320,
    height: 45,
    margin: 10,
    borderWidth: 0,
    borderRadius: 10,
  },
  buttonText: {
    width: 300,
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center'
  },
});

// make this component available to the app
export default ProfileScreen;
