import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import { Constants, Audio } from 'expo';
import {Piano} from './components/piano/Piano.js';
import {Player} from './components/Player.js';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      pianoNotes: [
        {name: "c1", src: "https://s3.amazonaws.com/dianewhmusicmaker/pianosounds/c1.mp3"},
        {name: "c1s", src: "https://s3.amazonaws.com/dianewhmusicmaker/pianosounds/c1s.mp3"},
        {name: "d1", src: "https://s3.amazonaws.com/dianewhmusicmaker/pianosounds/d1.mp3"},
        {name: "d1s", src: "https://s3.amazonaws.com/dianewhmusicmaker/pianosounds/d1s.mp3"},
        {name: "e1", src: "https://s3.amazonaws.com/dianewhmusicmaker/pianosounds/e1.mp3"},
        {name: "f1", src: "https://s3.amazonaws.com/dianewhmusicmaker/pianosounds/f1.mp3"},
        {name: "f1s", src: "https://s3.amazonaws.com/dianewhmusicmaker/pianosounds/f1s.mp3"},
        {name: "g1", src: "https://s3.amazonaws.com/dianewhmusicmaker/pianosounds/g1.mp3"},
        {name: "g1s", src: "https://s3.amazonaws.com/dianewhmusicmaker/pianosounds/g1s.mp3"},
        {name: "a1", src: "https://s3.amazonaws.com/dianewhmusicmaker/pianosounds/a1.mp3"},
        {name: "a1s", src: "https://s3.amazonaws.com/dianewhmusicmaker/pianosounds/a1s.mp3"},
        {name: "b1", src: "https://s3.amazonaws.com/dianewhmusicmaker/pianosounds/b1.mp3"},
        {name: "c2", src: "https://s3.amazonaws.com/dianewhmusicmaker/pianosounds/c2.mp3"},
      ],
      ocarinaNotes: [],
      pressedNote: {},
      savedSong: [],
      recordingMode: false,
    }
    this.toggleRecordingMode = this.toggleRecordingMode.bind(this);
    this.recordNote = this.recordNote.bind(this);
    this.clearMemory = this.clearMemory.bind(this);

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

  recordNote(note) {
    if(this.state.recordingMode) {
      let updateSong = [...this.state.savedSong, note];
      // this.setState( ({savedSong}) => ({ savedSongs: [...savedSong, note]}));
      // this.setState({ savedSong: [{name: "c2", src: "https://s3.amazonaws.com/dianewhmusicmaker/pianosounds/c2.mp3"}]});
      this.setState({ savedSong: updateSong});
    }

  }

  clearMemory() {
    this.setState({ 
      savedSong: [],
      recordingMode: false,
    });
  }

  toggleRecordingMode(){
    this.setState({
      recordingMode: !this.state.recordingMode
    })
  }

  renderCurrentSong(){
    if (this.state.savedSong.length) {
      return(
        this.state.savedSong.map((note, index)=>
          <Text style={styles.note} key={note.name + index} >{note.name}</Text>
        )
      )
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Instrument of Choice: Piano </Text>
        </View>
        <View style={styles.currentSong}>
          {this.renderCurrentSong()}
        </View>
        <Piano 
          style={styles.instrument} 
          notes={this.state.pianoNotes}
          recordNote={this.recordNote}
        />
        <Player 
          currentSong={this.state.savedSong}
          style={styles.player}
          recordingMode={this.state.recordingMode} 
          toggleRecordingMode={this.toggleRecordingMode}
          clearMemory={this.clearMemory}
        />  
      </View>
    );
  }
}

/* <View style={styles.currentSong}>
            {this.state.savedSong.map((note, index)=>{
              <Text style={styles.note} key={note.name + index.toString()}>currentSong: {note.name} </Text>
            })}
          </View> */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
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
  instrument: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  currentSong: {
    display: 'flex',
    flex: 3,
    flexDirection: 'row',
  },
  note: {
    flex: 1,
    height: 20,
    flexWrap: 'wrap',
  },

  player: {
    flex: 3,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
