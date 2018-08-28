import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import { Constants, Audio } from 'expo';
import {WhiteKey} from './WhiteKey.js';
import {BlackKey} from './BlackKey.js';

export class Piano extends React.Component {
  constructor(props) {
    super(props);
    this.renderKey = this.renderKey.bind(this);
  }

  renderKey(note, index) {
    if(index === 1 || index === 3 || index === 6 || index === 8 || index === 10 || index === 13) {
      return (
        <BlackKey 
          styles={styles.blackkey}
          key={note.name} 
          recordNote={this.props.recordNote}
          note={note}
        />
      )
    } else {
      return (
        <WhiteKey 
          styles={styles.whitekey}
          key={note.name} 
          recordNote={this.props.recordNote}
          note={note}
        />
      )
    }å
  }

  render() {
    return (
      <View style={styles.container}>
        {this.props.notes.map( (note, index) =>
          this.renderKey(note, index)
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 25,
    width: '75%',
    flexDirection: 'row',
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  blackkey: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  whitekey: {
    flex: 2,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
