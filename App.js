import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header'
import Pad from './components/Pad'
import sounds from './sounds'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Pad sounds={sounds}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
});

