import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Linking, StyleSheet, Text, View } from 'react-native';

import CarsList from './components/CarsList';
import Header from './components/Header';

export default function App() {

  return (
    <View style={styles.container}>
      <Header />
      <CarsList />
      <StatusBar style="auto" />
      <Text style={styles.credentials} >
        Tutorial by
        {' '}
        <Text 
          style={styles.hyperlink}
          onPress={() => Linking.openURL('https://youtu.be/iQ_0Fd_N3Mk')}  
        >
        notJust.dev
        </Text>
      </Text>
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
  credentials: {
    position: 'absolute',
    bottom: 10,
    fontSize: 15,
  },
  hyperlink: {
    textDecorationLine: 'underline'
  }

});
