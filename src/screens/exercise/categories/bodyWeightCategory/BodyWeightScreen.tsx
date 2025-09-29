import { View, Text, TouchableOpacity, Image , FlatList, StyleSheet} from 'react-native'
import React from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { ExerciseStackParamList } from '../../../../navigation/ExerciseNativeStackNavigator'
import { useNavigation } from '@react-navigation/native';
import exerciseData from '../../../../data/exerciseData.json';
import {exerciseMediaMapping} from '../../../../assets/exerciseMedia/exerciseMediaMapping';

type BodyWeightNavProp = NativeStackNavigationProp<ExerciseStackParamList>;

const BodyWeightScreen: React.FC = () => {
  const navigation = useNavigation<BodyWeightNavProp>();
  const bodyWeightWorkouts = exerciseData.bodyweight.workouts

  const renderWorkout = ({item}: any)=>(
    <TouchableOpacity style={styles.workoutCard} 
      onPress={()=> navigation.navigate('WorkoutDetails', {workout: item})}
    >
    <Image source={exerciseMediaMapping[item.image]} style={styles.workoutImage} />
    <View style={styles.workoutInfo}>
      <Text style={styles.workoutName}>{item.name}</Text>
      <View style={styles.workoutMeta}>
        <Text style={styles.duration}>{item.duration}</Text>
        <Text style={styles.exerciseCount}>{item.exercises.length} exercises</Text>  
      </View>
    </View>
    </TouchableOpacity>
  )
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>BodyWeightScreen</Text> */}
      <FlatList 
        data={bodyWeightWorkouts} 
        renderItem={renderWorkout}  
        keyExtractor={(item) => item.id} 
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  workoutCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  workoutImage: {
    width: '100%',
    height: 150,
  },
  workoutInfo: {
    padding: 16,
  },
  workoutName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  workoutDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  workoutMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  duration: {
    fontSize: 12,
    color: '#007AFF',
    fontWeight: '600',
  },
  exerciseCount: {
    fontSize: 12,
    color: '#007AFF',
    fontWeight: '600',
  },
});


export default BodyWeightScreen