import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { NativeStackNavigationProp, } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native';
import { ExerciseStackParamList } from '../../navigation/ExerciseNativeStackNavigator';

type ExerciseNavProp = NativeStackNavigationProp<ExerciseStackParamList>;

export default function ExerciseScreen(){
  const navigation = useNavigation<ExerciseNavProp>();
  return(
    <View style={styles.container}>
      {/* BodyWeight Card */}
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('BodyWeight')}>
        <Text style={styles.cardText}>Body Weight</Text>
      </TouchableOpacity>

      {/* Cardio Card */}
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Cardio')}>
        <Text style={styles.cardText}>Cardio</Text>
      </TouchableOpacity>

      {/* Gym Card */}
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Gym')}>
        <Text style={styles.cardText}>Gym</Text>
      </TouchableOpacity>

      {/* Yoga Card */}
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Yoga')}>
        <Text style={styles.cardText}>Yoga</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  card: {
    backgroundColor: 'gray',
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
    alignItems: 'center',
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
})