import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Componenteuno from './components/componenteuno'

export default function App() {
  return (
    <View style={styles.container}>
      <Componenteuno/>
      <Text>Open up App.tsx to start working on your app hih!</Text>
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
});
