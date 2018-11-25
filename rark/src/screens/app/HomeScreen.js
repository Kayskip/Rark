// import liraries
import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity, ScrollView, RefreshControl } from 'react-native'
import firebase from 'react-native-firebase'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Swiper from 'react-native-deck-swiper'

class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {}}

    render () {
      return (
      <View style={styles.container}>
          <Swiper
              cards={['DO', 'MORE', 'OF', 'WHAT', 'MAKES', 'YOU', 'HAPPY']}
              renderCard={(card) => {
                  return (
                      <View style={styles.card}>
                          <Text style={styles.text}>{card}</Text>
                      </View>
                  )
              }}
              onSwiped={(cardIndex) => {console.log(cardIndex)}}
              onSwipedAll={() => {console.log('onSwipedAll')}}
              cardIndex={0}
              backgroundColor={'#4FD0E9'}
              stackSize= {3}>
              <Button
                  onPress={() => {console.log('oulala')}}
                  title="Press me">
                  You can press me
              </Button>
          </Swiper>
      </View>
      )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#E8E8E8",
    justifyContent: "center",
    backgroundColor: "white"
  },
  text: {
    textAlign: "center",
    fontSize: 50,
    backgroundColor: "transparent"
  }
});


// make this component available to the app
export default HomeScreen
