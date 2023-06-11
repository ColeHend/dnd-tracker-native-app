import { View, Text } from 'react-native'
import React from 'react'
import Home from './views/home'
import Projects from './views/projects'
import Spells from './views/spells'
import Classes from './views/classes'

const DisplayViews = ({selectedChoice}) => {
  return (
    <View>
        {selectedChoice === 'home' ? <Home/> : null}
        {selectedChoice === 'projects' ? <Projects/> : null}
        {selectedChoice === 'spells' ? <Spells/> : null}
        {selectedChoice === 'classes' ? <Classes/> : null}
        {selectedChoice !== 'home' && selectedChoice !== 'projects' && selectedChoice !== 'spells' && selectedChoice !== 'classes' ? <Text>Else</Text> : null}
    </View>
  )
}

export default DisplayViews