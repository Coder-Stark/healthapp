import { View, Text, TouchableOpacity, Image, FlatList , StyleSheet} from 'react-native'
import React from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { ExerciseStackParamList } from '../../../navigation/ExerciseNativeStackNavigator'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import exerciseData from '../../../data/exerciseData.json';
import { exerciseMediaMapping } from '../../../assets/exerciseMedia/exerciseMediaMapping';

type WorkoutListNavProp = NativeStackNavigationProp<ExerciseStackParamList>;
type WorkoutListRouteProp = RouteProp<ExerciseStackParamList, 'WorkoutList'>;

const WorkoutListsScreen: React.FC = () => {
  const navigation = useNavigation<WorkoutListNavProp>();
  const route = useRoute<WorkoutListRouteProp>();
  const {workoutList} = route.params;

  //get workouts for the selected category
  const categoryData = (exerciseData as any)[workoutList];
  const workouts = categoryData.workouts;

  const renderWorkout = ({ item }: any) => (
    <TouchableOpacity
      style={styles.workoutCard}
      onPress={() => navigation.navigate('WorkoutDetails', { workout: item })}
    >
      <Image source={exerciseMediaMapping[item.image]} style={styles.workoutImage} />
      <View style={styles.workoutInfo}>
        <Text style={styles.workoutName}>{item.name}</Text>
        <Text style={styles.workoutDescription}>{item.description}</Text>
        <View style={styles.workoutMeta}>
          <Text style={styles.duration}>{item.duration}</Text>
          <Text style={styles.exerciseCount}>{item.exercises.length} exercises</Text>  
        </View>
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={workouts}
        renderItem={renderWorkout}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
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

export default WorkoutListsScreen