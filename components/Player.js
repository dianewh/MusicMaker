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
            title="stop recording"
            onPress={this.props.toggleRecordingMode}
          />  
      )
    } else {
      return(
        <Button 
            title="record"
            onPress={this.props.toggleRecordingMode}
          />  
      )
    }
  
  }

  render() {
    return (
      <View style={styles.container}>
        
          
        
        <View style={styles.player}>
          {this.renderRecordingButton()}
          <Button 
              title="Clear Memory"
              onPress={()=>{}}
          />
          <Button 
              title="Save Song to Database"
              onPress={()=>{}}
          />
          <Button 
              title="Replay Saved Song"
              onPress={()=>{}}
          />      
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  currentSong: {
    flex: 1,
  },
  player: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  }
});

// {this.props.currentSong.map((note) => {
//   <Text style={styles.currentSong}>
//     {note.name}
//   </Text>
// })}
