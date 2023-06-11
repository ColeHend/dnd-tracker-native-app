import { StyleSheet, View, Text } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#2244b5',
      height: '100%'
    },
    text: {
        marginLeft: '2%',
        color: '#FFFFFF',
    }
  });
export default Home