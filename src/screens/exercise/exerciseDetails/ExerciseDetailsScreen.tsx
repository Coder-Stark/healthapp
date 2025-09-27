import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { RouteProp, useRoute } from '@react-navigation/native'
import { ExerciseStackParamList } from '../../../navigation/ExerciseNativeStackNavigator'

type ExerciseDetailsRouteProp = RouteProp<ExerciseStackParamList, 'ExerciseDetails'>;

const ExerciseDetailsScreen: React.FC = () => {
  const route = useRoute<ExerciseDetailsRouteProp>();
  const {exercise} = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{exercise.name}</Text>
      </View>

      <Image source={{uri: exercise.image}} style={styles.exerciseGif} />

      <View style={styles.container}>
        <View style = {styles.metaRow}>
          <View style={styles.metaItem}>
            <Text style={styles.metaLabel}>Sets:</Text>
            <Text style={styles.metaValue}>{exercise.sets}</Text>
          </View>
          <View style={styles.metaItem}>
            <Text style={styles.metaLabel}>Duration:</Text>
            <Text style={styles.metaValue}>{exercise.duration}</Text>
          </View>
        </View>
        <View style={styles.instructionsContainer}>
          <Text style={styles.instructionsTitle}>Instructions:</Text>
          <Text style={styles.instructions}>{exercise.instructions}</Text>
        </View>
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  exerciseGif: {
    width: '100%',
    height: 300,
    marginBottom: 20,
  },
  detailsContainer: {
    padding: 20,
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  metaItem: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    minWidth: 120,
    elevation: 2,
  },
  metaLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  metaValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  instructionsContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    elevation: 2,
  },
  instructionsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  instructions: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
});


export default ExerciseDetailsScreen