import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import Navbar from './components/navbar';
import Appbar from './components/appbar';
import DisplayViews from './components/menuViews';

export default function App() {
  const [name, setName] = React.useState('Name')
  const [selectedChoice, setSelectedChoice] = useState('home');
  
  return (
    <View style={styles.container}>
      <Appbar selectedChoice={selectedChoice} setSelectedChoice={setSelectedChoice} title={"D&D Tracker"}>
        <View>
          <DisplayViews selectedChoice={selectedChoice}/>
        </View>
      </Appbar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    top: '3%',
    width:'100%',
    height:'95%'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
