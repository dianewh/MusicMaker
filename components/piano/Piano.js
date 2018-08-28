import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import { Constants, Audio } from 'expo';
import {WhiteKey} from './WhiteKey.js';
import {BlackKey} from './BlackKey.js';

export class Piano extends React.Component {
  constructor(props) {
    super(props);
  }

  // renderKey() {
  //     this.props.notes.map((note, index)=>
  //       <WhiteKey 
  //         styles={styles.key}
  //         key={note.name} 
  //         recordNote={this.props.recordNote}
  //         note={note}
  //       />
  //     )}
  // }

  render() {
    return (
      <View style={styles.container}>
        {this.props.notes.map((note)=>
          <WhiteKey 
            styles={styles.key}
            key={note.name} 
            recordNote={this.props.recordNote}
            note={note}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 25,
    flexDirection: 'row',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  key: {
    flex: 1,
    width: '7%',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
