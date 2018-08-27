import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import { Constants, Audio } from 'expo';

export class Key extends React.Component {

  constructor(props) {
    super(props);
    this.playSound = this.playSound.bind(this);
  }

  async playSound(e) {
    const source = {
      uri: this.props.note.src
    };
    
    try {
      await Audio.setIsEnabledAsync(true);
      const sound = new Audio.Sound();
      await sound.loadAsync(source);
      await sound.playAsync(); 
    } catch(error) {
      console.error(error);
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <Button 
          title={this.props.note.name}
          onPress={this.playSound}
        />
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
