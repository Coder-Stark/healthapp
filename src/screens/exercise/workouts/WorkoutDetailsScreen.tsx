import { View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native'
import React from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { ExerciseStackParamList } from '../../../navigation/ExerciseNativeStackNavigator'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import Video from 'react-native-video';
import { exerciseMediaMapping } from '../../../assets/exerciseMedia/exerciseMediaMapping';

type WorkoutDetailsNavProp = NativeStackNavigationProp<ExerciseStackParamList>;
type WorkoutDetailsRouteProp = RouteProp<ExerciseStackParamList, 'WorkoutDetails'>;


const WorkoutDetailsScreen: React.FC = () => {
  const navigation = useNavigation<WorkoutDetailsNavProp>();
  const route = useRoute<WorkoutDetailsRouteProp>();
  const {workout} = route.params;

  const renderExercise = ({item}: any)=>(
    <TouchableOpacity style={styles.exerciseCard}
      onPress={()=> navigation.navigate('ExerciseDetails', {exercise: item})}
      activeOpacity={0.8}
    >
      <View style={styles.videoContainer} pointerEvents='none'>
        <Video
          source={exerciseMediaMapping[item.video]}
          style={styles.exerciseVideo}
          resizeMode="cover"
          repeat
          paused={true}
          />
      </View>

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
        <Text style={styles.headerDuration}>Duration: {workout.duration}</Text>
      </View>
    
      <FlatList 
        data={workout.exercises} 
        renderItem={renderExercise}  
        keyExtractor={(item) => item.id} 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        removeClippedSubviews={true}
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
    color: '#333'
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 4,
  },
  headerDuration: {
    fontSize: 14,
    color: '#007AFF',
    fontWeight: '600',
  },
  listContainer: {
    paddingBottom: 20,
  },
  exerciseCard: {
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
  exerciseInfo: {
    padding: 16,
  },
  exerciseName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
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
  duration: {
    fontSize: 12,
    color: '#007AFF',
    fontWeight: '600',
  },
  videoContainer: {
    width: '100%',
    height: 200,
    backgroundColor: 'black',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    overflow: 'hidden', // Ensures video respects border radius
    position: 'relative', // For any overlay positioning if needed
  },
  exerciseVideo: {
  width: '100%',
  height: '100%',
  backgroundColor: 'black', // fallback if video takes time to load
  },
});


export default WorkoutDetailsScreen