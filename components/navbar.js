import { View, StyleSheet, Text, Button, Alert } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native';

const Navbar = ({navbar}) => {
  
  return (
    <View style={styles.navbar}> 
        {navbar.map((item, i) => 
            <Text key={JSON.stringify({item,i})} style={styles.button} onPress={item.onPress}>{item.title}</Text>
        )}
      </View>
  )
}
const styles = StyleSheet.create({
    navbar: {
      // flexDirection: 'row',
      // justifyContent: 'space-around',
    }, 
    button: {
      backgroundColor: '#9999DD',
      color: '#FFFFFF',
      padding: 10,
    },
  });
export default Navbar