import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import { Constants, Audio } from 'expo';

export class CurrentSong extends React.Component {
  constructor(props) {
    super(props);
  }

  renderCurrentSong(currentSong){
    if (currentSong.length) {
      return(
        currentSong.map((note, index)=>
          <Text style={styles.note} key={note.name + index} >{note.name}</Text>
        )
      )
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderCurrentSong(this.props.currentSong)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    backgroundColor: 'grey',
  },
  note: {
    flex: 1,
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
