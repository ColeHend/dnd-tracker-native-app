import { View, Text } from 'react-native'
import React from 'react'


const DisplayViews = ({selectedChoice, selectedChoices}) => {
  
  return (
    <View>
      {selectedChoices.map((choice) => selectedChoice === choice[0] ? choice[1] : null )}
    </View>
  )
}

export default DisplayViews