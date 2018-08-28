import React from 'react';
import { StyleSheet, TouchableHighlight, TouchableNativeFeedback, Text, Button, View } from 'react-native';
import { Constants, Audio } from 'expo';

export class BlackKey extends React.Component {

  constructor(props) {
    super(props);
    this.playSound = this.playSound.bind(this);
  }

  async playSound(e) {
    
    
    const source = {
      uri: this.props.note.src
    };
    try {
      console.log("sound played");
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
    this.props.recordNote(this.props.note);
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableNativeFeedback 
          style={styles.key}
          onPress={this.pressKey.bind(this)}
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
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    padding: 5,
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