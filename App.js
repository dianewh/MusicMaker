import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import { Constants, Audio } from 'expo';
import {Piano} from './components/piano/Piano.js';
import {Player} from './components/Player.js';
import {CurrentSong} from './components/CurrentSong.js';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      pianoNotes: [
        {name: "c", src: "https://s3.amazonaws.com/dianewhmusicmaker/pianosounds/c1.mp3"},
        {name: "c#", src: "https://s3.amazonaws.com/dianewhmusicmaker/pianosounds/c1s.mp3"},
        {name: "D", src: "https://s3.amazonaws.com/dianewhmusicmaker/pianosounds/d1.mp3"},
        {name: "D#/Eb", src: "https://s3.amazonaws.com/dianewhmusicmaker/pianosounds/d1s.mp3"},
        {name: "E", src: "https://s3.amazonaws.com/dianewhmusicmaker/pianosounds/e1.mp3"},
        {name: "F", src: "https://s3.amazonaws.com/dianewhmusicmaker/pianosounds/f1.mp3"},
        {name: "F#/Gb", src: "https://s3.amazonaws.com/dianewhmusicmaker/pianosounds/f1s.mp3"},
        {name: "G", src: "https://s3.amazonaws.com/dianewhmusicmaker/pianosounds/g1.mp3"},
        {name: "G#/Ab", src: "https://s3.amazonaws.com/dianewhmusicmaker/pianosounds/g1s.mp3"},
        {name: "A", src: "https://s3.amazonaws.com/dianewhmusicmaker/pianosounds/a1.mp3"},
        {name: "A#/Bb", src: "https://s3.amazonaws.com/dianewhmusicmaker/pianosounds/a1s.mp3"},
        {name: "B", src: "https://s3.amazonaws.com/dianewhmusicmaker/pianosounds/b1.mp3"},
        {name: "C", src: "https://s3.amazonaws.com/dianewhmusicmaker/pianosounds/c2.mp3"},
      ],
      ocarinaNotes: [],
      pressedNote: {},
      currentSong: [],
      savedSong: [],
      recordingMode: false,
    }
    this.toggleRecordingMode = this.toggleRecordingMode.bind(this);
    this.recordNote = this.recordNote.bind(this);
    this.clearMemory = this.clearMemory.bind(this);
    this.saveSong = this.saveSong.bind(this);
    this.showSavedSong = this.showSavedSong.bind(this);
  }

  componentDidMount() {
  //   $.ajax({
  //     url: '/items', 
  //     success: (data) => {
  //       this.setState({
  //         items: data
  //       })
  //     },
  //     error: (err) => {
  //       console.log('err', err);
  //     }
  //   });
  }

  registerPressedNote(note) {
    this.setState({
      pressednote: note
    })
  }

  toggleRecordingMode(){
    this.setState( prevState => {
      recordingMode: !prevState.recordingMode
    })
  }

  recordNote(note) {
    if(this.state.recordingMode) {
      let updateSong = [...this.state.currentSong, note];
      this.setState({ currentSong: updateSong});
    }
  }

  clearMemory() {
    this.setState({ 
      currentSong: [],
      recordingMode: false,
    });
  }

  saveSong() {
    if(this.state.currentSong.length) {
      this.setState(prevState => { savedSong: prevState.currentSong});
    }
  }

  showSavedSong() {
    if(this.state.recordingMode) {
      this.setState(prevState => { currentSong: prevState.savedSong});
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Instrument: Piano </Text>
        </View>
        <Piano 
          style={styles.instrument} 
          notes={this.state.pianoNotes}
          recordNote={this.recordNote}
        />
        <CurrentSong style={styles.currentSong} currentSong={this.state.currentSong}/>
        <Player 
          style={styles.player}
          recordingMode={this.state.recordingMode} 
          toggleRecordingMode={this.toggleRecordingMode}
          clearMemory={this.clearMemory}
          saveSong={this.saveSong}
          showSavedSong={this.showSavedSong}
        />  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    flex: 1,
    width: '100%',
    backgroundColor: 'powderblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontFamily: 'Roboto',
    fontWeight: '700',
    color: 'green',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  
  instrument: {
    flex: 3,
    height: '50%',
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },

  currentSong: {
    flex: 1,
    height: 10,
    padding: 5,
    backgroundColor: 'grey',
  },

  player: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
