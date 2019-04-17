import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import Button from './Button';

export default class Pad extends Component {
  render(){
    const { sounds } = this.props

    return(
      <View style={padStyle.pad}>
        { sounds && sounds.map(( sound, index )=> <Button key={index} sound={sound} />) }
      </View>
    )
  }
} // End Pad

const padStyle = StyleSheet.create({
  pad: {
    margin: 10,
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});
