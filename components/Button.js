import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Audio } from 'expo';


export default class Button extends Component {
    state = {
        sound: new Audio.Sound()
    }

    componentDidMount = async () => {
        try {
            await this.loadSound()
        } catch(error) {
            console.log(error)
        }
    }

    loadSound = async () => {
        await this.state.sound.loadAsync(this.props.sound)
    }

    playSound = () => {
        this.state.sound.setPositionAsync(0);
        this.state.sound.replayAsync()
        this.state.sound.setPositionAsync(0);

    }

    render(){
        return(
            <TouchableOpacity
                activeOpacity={0.7}
                style={buttonStyle.button}
                onPress={this.playSound}
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
