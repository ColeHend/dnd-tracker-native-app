import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Navigationbar from './components/appbar';
import DisplayViews from './components/menuViews';
import Home from './components/views/home'
import Projects from './components/views/projects'
import Spells from './components/views/spells'
import Classes from './components/views/classes'

export default function App() {
  const [name, setName] = React.useState('Name')
  const [selectedChoice, setSelectedChoice] = useState('home');
  const [userInfo] = useState({
    username: 'User',
  })
  const [navbar] = useState([
    {title: 'Home', onPress: () => setSelectedChoice('home') },
    {title: 'Projects', onPress: () => setSelectedChoice('projects')},
    {title: 'Spells', onPress: () => setSelectedChoice('spells')},
    {title: 'Classes', onPress: () => setSelectedChoice('classes') }
  ])
  const [choices] = useState([
    ['home', <Home key={'h0'}/>],
    ['projects', <Projects key={'p0'}/>],
    ['spells', <Spells key={'s0'}/>],
    ['classes', <Classes key={'c0'}/>]
  ]);
  return (
    <View style={styles.container}>
      <Navigationbar userInfo={userInfo} navbar={navbar} selectedChoice={selectedChoice} setSelectedChoice={setSelectedChoice} title={"D&D Tracker"}>
        <DisplayViews selectedChoices={choices} selectedChoice={selectedChoice}/>
      </Navigationbar>
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
