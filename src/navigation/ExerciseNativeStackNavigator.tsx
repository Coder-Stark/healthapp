import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screens (for typescript only)
import ExerciseScreen from "../screens/exercise/ExerciseScreen";
import WorkoutDetailsScreen from '../screens/exercise/workouts/WorkoutDetailsScreen';
import ExerciseDetailsScreen from '../screens/exercise/exerciseDetails/ExerciseDetailsScreen';
import WorkoutListsScreen from '../screens/exercise/workoutLists/WorkoutListsScreen';

export type ExerciseStackParamList = {
    ExerciseMain: undefined;
    WorkoutList: {workoutList: any};
    WorkoutDetails: {workout: any};
    ExerciseDetails: {exercise: any};
}

const Stack = createNativeStackNavigator<ExerciseStackParamList>();

const ExerciseNativeStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='ExerciseMain'>
        <Stack.Screen name="ExerciseMain" component={ExerciseScreen} options={{title: 'Exercises'}}/>
        <Stack.Screen name="WorkoutList" component={WorkoutListsScreen} options={{title: 'Workout Lists'}} />
        <Stack.Screen name="WorkoutDetails" component={WorkoutDetailsScreen} options={{title: 'Workout Details'}}/>
        <Stack.Screen name="ExerciseDetails" component={ExerciseDetailsScreen} options={{title: 'Exercise Details'}}/>
    </Stack.Navigator>

  )
}

export default ExerciseNativeStackNavigator