import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import { Audio } from 'expo-av';
export default function App() {
    const [playbackStatus, setPlaybackStatus] = useState("Unloaded");

    // load a sound

    // play a sound

    // pause a sound

    // stop a sound

    // unload a sound


    return (
    <View style={styles.container}>
          <Pressable
              style={styles.button}
              onPress={() => { } }
          >
              <Text style={styles.buttonText}>
                  Play
              </Text>
          </Pressable>
          <Pressable
              style={styles.button}
              onPress={() => { }}
          >
              <Text style={styles.buttonText}>
                  Stop
              </Text>
            </Pressable>
            <Text style={styles.buttonText}>Status: {playbackStatus}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    },
    button: {
        backgroundColor: 'lightgreen',
        borderBlockColor: 'black',
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 7,
        margin: 10,
        padding: 10,
    },
    buttonText: {
        fontSize: 24,
    }
});
