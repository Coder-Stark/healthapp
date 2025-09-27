import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screens (for typescript only)
import ExerciseScreen from "../screens/exercise/ExerciseScreen";

import BodyWeightScreen from "../screens/exercise/categories/bodyWeightCategory/BodyWeightScreen";
import CardioScreen from "../screens/exercise/categories/cardioCategory/CardioScreen";
import GymScreen from "../screens/exercise/categories/gymCategory/GymScreen";
import YogaScreen from "../screens/exercise/categories/yogaCategory/YogaScreen";

export type ExerciseStackParamList = {
    ExerciseMain: undefined;
    BodyWeight: undefined;
    Cardio: undefined;
    Gym: undefined;
    Yoga: undefined;
}

const Stack = createNativeStackNavigator<ExerciseStackParamList>();

const ExerciseNativeStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='ExerciseMain'>
        <Stack.Screen name="ExerciseMain" component={ExerciseScreen} options={{title: 'Exercises'}}/>
        <Stack.Screen name="BodyWeight" component={BodyWeightScreen}/>
        <Stack.Screen name="Cardio" component={CardioScreen}/>
        <Stack.Screen name="Gym" component={GymScreen}/>
        <Stack.Screen name="Yoga" component={YogaScreen}/>
    </Stack.Navigator>

  )
}

export default ExerciseNativeStackNavigator