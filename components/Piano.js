import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import { Constants, Audio } from 'expo';

export class Piano extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      items: []
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Key One</Text>
        <Text>Key Two</Text>
        <Text>Key Try</Text>
        <Button 
          title="Chewie we're home"
          onPress={async () => {
            const source = {
              uri: "http://www.slspencer.com/Sounds/Chewbacca/Chewie3.mp3" 
            };
            
            try {
              await Audio.setIsEnabledAsync(true);
              const sound = new Audio.Sound();
              await sound.loadAsync(source);
              await sound.playAsync(); 
            } catch(error) {
              console.error(error);
            }
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
