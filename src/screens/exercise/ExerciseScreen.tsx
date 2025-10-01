import { StyleSheet, Text, TouchableOpacity, View , Image, FlatList} from 'react-native'
import React from 'react'
import { NativeStackNavigationProp, } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native';
import { ExerciseStackParamList } from '../../navigation/ExerciseNativeStackNavigator';
import exerciseData from '../../data/exerciseData.json';
import { exerciseMediaMapping } from '../../assets/exerciseMedia/exerciseMediaMapping';

type ExerciseNavProp = NativeStackNavigationProp<ExerciseStackParamList>;

export default function ExerciseScreen(){
  const navigation = useNavigation<ExerciseNavProp>();

  const categories = [
    {
      id: 'gym',
      name: exerciseData.gym.categoryName,
      description: exerciseData.gym.categoryDescription,
      image: exerciseData.gym.categoryImage,
      screen: 'Gym' as keyof ExerciseStackParamList,
    },
    {
      id: 'bodyweight',
      name: exerciseData.bodyweight.categoryName,
      description: exerciseData.bodyweight.categoryDescription,
      image: exerciseData.bodyweight.categoryImage,
      screen: 'BodyWeight' as keyof ExerciseStackParamList,
    },
    {
      id: 'yoga',
      name: exerciseData.yoga.categoryName,
      description: exerciseData.yoga.categoryDescription,
      image: exerciseData.yoga.categoryImage,
      screen: 'Yoga' as keyof ExerciseStackParamList,
    },
    {
      id: 'cardio',
      name: exerciseData.cardio.categoryName,
      description: exerciseData.cardio.categoryDescription,
      image: exerciseData.cardio.categoryImage,
      screen: 'Cardio' as keyof ExerciseStackParamList,
    },
  ];

  const renderCategory = ({item}: any) => (
    <TouchableOpacity style={styles.card}
      onPress={() => navigation.navigate('WorkoutList', {workoutList: item.id})}
    >
    <Image source={exerciseMediaMapping[item.image]} style={styles.categoryImage} />

    <View style={styles.cardContent}>
      <Text style={styles.cardTitle}>{item.name}</Text>
      <Text style={styles.cardDescription}>{item.description}</Text>
    </View>
    </TouchableOpacity>
  )
  return(
    <View style={styles.container}>
      <Text style={styles.header}>Choose Your Workout</Text>
      <FlatList 
        data={categories}
        renderItem={renderCategory}
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
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    marginTop: 10,
  },
  card: {
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
  categoryImage: {
    width: '100%',
    height: 150,
  },
  cardContent: {
    padding: 20,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
  },
});