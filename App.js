import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'World!',
    }
  }

  onClick = () => {
    this.setState({
      name: 'Naoto!',
    })
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.nameText}>Hello {this.state.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
