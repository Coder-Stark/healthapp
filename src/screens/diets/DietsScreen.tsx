import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DietsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>DietsScreen</Text>
    </View>
  )
}

export default DietsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
})