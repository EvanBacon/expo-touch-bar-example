import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchBarProvider, Button, TouchBar } from 'react-touchbar-electron';

function App() {
  return (
    <View style={styles.container}>
      <TouchBar>
        <Button icon={'./assets/touch-bar-icon.png'} onClick={() => {
          alert('Deploying to Expo')
        }} />
      </TouchBar>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

export default () => <TouchBarProvider><App /></TouchBarProvider>
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
