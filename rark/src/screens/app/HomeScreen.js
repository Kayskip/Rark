"use strict";

import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { Button, ButtonGroup, Slider } from "react-native-elements";
import SwipeCards from "react-native-swipe-cards";
import Icon from "react-native-vector-icons/AntDesign";
import CollapseView from "react-native-collapse-view";
import ToggleSwitch from "toggle-switch-react-native";
import { Dimensions } from "react-native";



class Card extends React.Component {
  
  constructor() {
    super();
    this.state = {
      selectedIndex: 2,
      isOnDefaultToggleSwitch: true,
      isOnLargeToggleSwitch: false,
      isOnBlueToggleSwitch: false
    };
  }
  

  render() {
    return (
      <View style={styles.card}>
        <Image style={styles.thumbnail} source={{ uri: this.props.image }} />
        <Text style={styles.text}>This is card {this.props.name}</Text>
      </View>
    );
  }
}

class NoMoreCards extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.noMoreCards}>
        <Text>No more cards</Text>
      </View>
    );
  }
}

const cards = [
  { name: "1", image: "https://media.giphy.com/media/GfXFVHUzjlbOg/giphy.gif" },
  { name: "2", image: "https://media.giphy.com/media/irTuv1L1T34TC/giphy.gif" },
  { name: "3", image: "https://media.giphy.com/media/LkLL0HJerdXMI/giphy.gif" },
  { name: "4", image: "https://media.giphy.com/media/fFBmUMzFL5zRS/giphy.gif" },
  { name: "5", image: "https://media.giphy.com/media/oDLDbBgf0dkis/giphy.gif" },
  { name: "6", image: "https://media.giphy.com/media/7r4g8V2UkBUcw/giphy.gif" },
  { name: "7", image: "https://media.giphy.com/media/K6Q7ZCdLy8pCE/giphy.gif" },
  { name: "8", image: "https://media.giphy.com/media/hEwST9KM0UGti/giphy.gif" },
  {
    name: "9",
    image: "https://media.giphy.com/media/3oEduJbDtIuA2VrtS0/giphy.gif"
  }
];

const cards2 = [
  {
    name: "10",
    image: "https://media.giphy.com/media/12b3E4U9aSndxC/giphy.gif"
  },
  { name: "11", image: "https://media4.giphy.com/media/6csVEPEmHWhWg/200.gif" },
  { name: "12", image: "https://media4.giphy.com/media/AA69fOAMCPa4o/200.gif" },
  { name: "13", image: "https://media.giphy.com/media/OVHFny0I7njuU/giphy.gif" }
];

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    
    tabBarIcon:() => <Icon size={ 20 } name={ 'cog' } />
  };
  constructor(props) {
    super(props);
    this.state = {
      cards: cards,
      outOfCards: false
    };
  }

  handleYup(card) {
    console.log("yup");
  }

  handleNope(card) {
    console.log("nope");
  }

  updateIndex(selectedIndex) {
    this.setState({ selectedIndex });
  }

  cardRemoved(index) {
    console.log(`The index is ${index}`);

    let CARD_REFRESH_LIMIT = 3;

    if (this.state.cards.length - index <= CARD_REFRESH_LIMIT + 1) {
      console.log(
        `There are only ${this.state.cards.length - index - 1} cards left.`
      );

      if (!this.state.outOfCards) {
        console.log(`Adding ${cards2.length} more cards`);

        this.setState({
          cards: this.state.cards.concat(cards2),
          outOfCards: true
        });
      }
    }
  }
  onToggle(isOn) {
    alert("Changed to " + isOn);
  }

  _renderCollapseView = collapse => {
    return (
      <View >
        <View style={styles.buttonContainer}>
          <ToggleSwitch
            label="Individuals"
            onColor="#2196F3"
            isOn={this.state.isOnBlueToggleSwitch}
            onToggle={isOnBlueToggleSwitch => {
              this.setState({ isOnBlueToggleSwitch });
              this.onToggle(isOnBlueToggleSwitch);
            }}
          />

          <ToggleSwitch
            label="Groups"
            onColor="#2196F3"
            isOn={this.state.isOnBlueToggleSwitch}
            onToggle={isOnBlueToggleSwitch => {
              this.setState({ isOnBlueToggleSwitch });
              this.onToggle(isOnBlueToggleSwitch);
            }}
          />

          <ToggleSwitch
            label="Events"
            onColor="#2196F3"
            isOn={this.state.isOnBlueToggleSwitch}
            onToggle={isOnBlueToggleSwitch => {
              this.setState({ isOnBlueToggleSwitch });
              this.onToggle(isOnBlueToggleSwitch);
            }}
          />
        </View>
        <View style={styles.sliderContainer}>
          <View
            style={{ flex: 1, alignItems: "stretch", justifyContent: "center", }}
          >
            <Slider
              value={this.state.value}
              onValueChange={value => this.setState({ value })}
            />
            <Text>Proximity (km): {this.state.value}</Text>
          </View>
        </View>
      </View>
    );
  };

  _renderView = collapse => {
    return (
      this.returnToggleButton(collapse)
    );
  };

  returnToggleButton(collapse) {
    if (collapse) {
      return (
        <View>
          <Icon style={styles.view}
            name="down"
            color="#517fa4"
          />
          <Text style = {styles.settingsTitle}>Quick Settings</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.view}>
          <Icon
            name="up"
            color="#517fa4"
          />
        </View>
      );
    }
  }

  render() {
    const buttons = ["Hello", "World", "Buttons"];
    const { selectedIndex } = this.state;
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View>
          <CollapseView
            renderView={this._renderView}
            renderCollapseView={this._renderCollapseView}
          />
        </View>

        <View style={styles.swipeContainer}>
          <SwipeCards
            cards={this.state.cards}
            loop={false}
            renderCard={cardData => <Card {...cardData} />}
            renderNoMoreCards={() => <NoMoreCards />}
            showYup={true}
            showNope={true}
            handleYup={this.handleYup}
            handleNope={this.handleNope}
            cardRemoved={this.cardRemoved.bind(this)}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    borderRadius: 15,
    overflow: "hidden",
    borderColor: "grey",
    backgroundColor: "black",
    borderWidth: 1,
    elevation: 1
  },
  thumbnail: {
    alignItems: "center",
    width: Dimensions.get('window').width*0.95,
    height: Dimensions.get('window').height*0.7
  },
  text: {
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10
  },
  noMoreCards: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  contentContainer: {
    paddingVertical: 0
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: Dimensions.get('window').height*0.1
  },
  swipeContainer: {
    paddingVertical: 20
  },
  view: {
    height: 50,
    padding: 20,
    alignSelf: 'flex-end',
    backgroundColor: "#ffffff"
  },
  settingsTitle:{
    textAlign:'center'
  },
  buttonLeft: {
    paddingRight: 50
  },
  buttonRight: {
    paddingLeft: 50
  },
  sliderContainer:{
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: Dimensions.get('window').height*0.3,
    marginTop:0,
    paddingTop:0
  }
});
