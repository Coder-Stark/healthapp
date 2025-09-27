import { View, Text, TouchableOpacity, Image , FlatList, StyleSheet} from 'react-native'
import React from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { ExerciseStackParamList } from '../../../navigation/ExerciseNativeStackNavigator'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

type WorkoutDetailsNavProp = NativeStackNavigationProp<ExerciseStackParamList>;
type WorkoutDetailsRouteProp = RouteProp<ExerciseStackParamList, 'WorkoutDetails'>;


const WorkoutDetailsScreen: React.FC = () => {
  const navigation = useNavigation<WorkoutDetailsNavProp>();
  const route = useRoute<WorkoutDetailsRouteProp>();
  const {workout} = route.params;

  const renderExercise = ({item}: any)=>(
    <TouchableOpacity style={styles.exerciseCard}
      onPress={()=> navigation.navigate('ExerciseDetails', {exercise: item})}
    >
      <Image source={{uri: item.image}} style={styles.exerciseImage} />
      <View style={styles.exerciseInfo}>
        <Text style={styles.exerciseName}>{item.name}</Text>
        <View style={styles.exerciseMeta}>
          <Text style={styles.sets}>{item.sets} Sets</Text>
          <Text style={styles.duration}>{item.duration}</Text>  
        </View>
      </View>
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      <View style={styles.workoutHeader}>
        <Text style={styles.title}>{workout.name}</Text>
        <Text style={styles.description}>{workout.description}</Text>
        <Text style={styles.duration}>Duration: {workout.duration}</Text>
      </View>
    
      <FlatList 
        data={workout.exercises} 
        renderItem={renderExercise}  
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
  workoutHeader: {
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 4,
  },
  duration: {
    fontSize: 14,
    color: '#007AFF',
    fontWeight: '600',
  },
  exerciseCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 12,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  exerciseImage: {
    width: '100%',
    height: 180,
  },
  exerciseInfo: {
    padding: 12,
  },
  exerciseName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  exerciseMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sets: {
    fontSize: 12,
    color: '#007AFF',
    fontWeight: '600',
  },
});


export default WorkoutDetailsScreen