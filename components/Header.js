import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Header extends Component{

  render(){
    return(
      <View>
        <Text style={headerStyle.title}>Mostro</Text>
        <Text style={headerStyle.subtitle}>Basic Drumkit</Text>
      </View>
    )
  }
}

const headerStyle = StyleSheet.create({
  title: {
    fontFamily: 'Helvetica',
    fontSize: 25,
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 10
  },
  subtitle: {
    fontSize: 15,
    textAlign: 'center',
    fontStyle: 'italic',
    marginBottom: 40,
  }
});
