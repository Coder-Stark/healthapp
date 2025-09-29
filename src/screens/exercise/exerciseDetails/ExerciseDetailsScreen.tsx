import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { RouteProp, useRoute } from '@react-navigation/native'
import { ExerciseStackParamList } from '../../../navigation/ExerciseNativeStackNavigator'
import Video from 'react-native-video';
import { exerciseMediaMapping } from '../../../assets/exerciseMedia/exerciseMediaMapping';

type ExerciseDetailsRouteProp = RouteProp<ExerciseStackParamList, 'ExerciseDetails'>;

const ExerciseDetailsScreen: React.FC = () => {
  const route = useRoute<ExerciseDetailsRouteProp>();
  const {exercise} = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{exercise.name}</Text>
      </View>

      <View style={styles.videoContainer}>
        <Video
          source={exerciseMediaMapping[exercise.video]} 
          style={styles.exerciseVideo}
          resizeMode="cover"
          repeat
        />
      </View>
      <View style={styles.contentContainer}>
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
    color: '#333',
  },
  videoContainer: {
    width: '92%',
    height: 300, 
    backgroundColor: 'black',
    borderRadius: 12, 
    marginHorizontal: 16, 
    marginBottom: 20, 
    overflow: 'hidden',
    alignSelf: 'center',
  },
  exerciseVideo: {
  width: '100%',
  height: '100%',
  backgroundColor: 'black',
  },
  contentContainer: {
    paddingHorizontal: 16,
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: 20,
  },
  instructionsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  instructions: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
});


export default ExerciseDetailsScreen