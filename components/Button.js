import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

export default class Button extends Component {

  playSound = (sound) => {
    sound.stop(() => sound.play())
  }

  render(){
    const { sound } = this.props

    return(
      <TouchableOpacity
        activeOpacity={0.7}
        style={buttonStyle.button}
        onPress={() => this.playSound(sound)}
      />
    )
  }
}

const buttonStyle = StyleSheet.create({
  button: {
    backgroundColor: 'tomato',
    margin: 5,
    width: Dimensions.get('window').width / 4.8,
    height: 78,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
  }
});
