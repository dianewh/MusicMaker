import React from 'react';
import { StyleSheet, TouchableHighlight, TouchableNativeFeedback, Text, Button, View } from 'react-native';
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

  pressKey(e) {
    this.playSound(e);
    this.props.recordNote();
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableNativeFeedback 
          style={styles.key}
          onPress={this.playSound}
          background={TouchableNativeFeedback.SelectableBackground()}>
          <View>
            <Text style={{margin: 30}}>Key</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 5,
    
  },
  key: {
    height: '100%',
    width: '100%',
    padding: 35,
  }

});

// {
//   <TouchableHighlight style={styles.key} onPress={this.playSound} underlayColor="white">
//           <View>
//             <Text>{this.props.note.name}</Text>
//           </View>
//         </TouchableHighlight>
// {width: 150, height: 100, backgroundColor: 'pink'}
// }