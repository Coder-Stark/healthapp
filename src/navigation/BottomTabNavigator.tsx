import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DietsScreen from '../screens/diets/DietsScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import ExerciseNativeStackNavigator from './ExerciseNativeStackNavigator';

const Tab = createBottomTabNavigator();

const BottomTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Diets" component={DietsScreen} />
      <Tab.Screen name="Exercises" component={ExerciseNativeStackNavigator} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  )
}

export default BottomTabNavigator