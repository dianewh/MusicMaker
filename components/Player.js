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

  renderRecordingButton(){
    
    if(this.props.recordingMode) {
      return(
        <Button 
            title="pause"
            onPress={this.props.recordSong}
          />  
      )
    } else {
      return(
        <Button 
            title="play"
            onPress={this.props.recordSong}
          />  
      )
    }
  
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderRecordingButton()}
        <Button 
            title="Record"
            onPress={this.props.recordSong}
        />
        <Button 
            title="Save Song"
            onPress={this.props.recordSong}
        />
        <Button 
            title="Replay Saved Song"
            onPress={this.props.recordSong}
        />      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
