import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomePageScreen from '../screens/HomePageScreen';
import DietsScreen from '../screens/DietsScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomePageScreen} />
      <Tab.Screen name="Diets" component={DietsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  )
}

export default BottomTabNavigator