import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import { Constants, Audio } from 'expo';

export class Player extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      items: []
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Record</Text>
        <Text>Stop</Text>
        <Text>Save</Text>
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
