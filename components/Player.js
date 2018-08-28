import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
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
            buttonStyle={styles.stopbutton}
            onPress={this.props.toggleRecordingMode}
            icon={
              <Icon
                name='arrow-right'
                size={15}
                color='white'
              />
            }
          />  
      )
    } else {
      return(
        <Button 
            buttonStyle={styles.recordbutton}
            onPress={this.props.toggleRecordingMode}
          />  
      )
    }
  }

  render() {
    return (
      <View style={styles.player}>
        {this.renderRecordingButton()}
        <Button 
          titleStyle={styles.title}
          buttonStyle={styles.button}
          title="Clear Memory"
          onPress={this.props.clearMemory}
        />
        <Button
          titleStyle={styles.title}
          buttonStyle={styles.button}
          title="Save Song"
          onPress={()=>{}}
        />
        <Button
          titleStyle={styles.title}
          buttonStyle={styles.button}
          title="Show Saved Song"
          onPress={()=>{}}
        />      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  player: {
    flex: 1,
    width: '100%',
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  text: { 
    fontWeight: "700" 
  },
  button: {
    backgroundColor: 'lightseagreen',
    borderRadius: 10,
  },
  recordbutton: {
    backgroundColor: 'red',
    width: 25,
    height: 25,
    borderRadius: 50,
  },
  stopbutton: {
    backgroundColor: '#ff0000',
    width: 25,
    height: 25,
    borderRadius: 1,
  }
});
