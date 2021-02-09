import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './components/screens/HomeScreen';
import CalendarScreen from './components/screens/CalendarScreen';
import ReminderScreen from "./components/screens/ReminderScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Tab.Navigator>
        <Tab.Screen name="CalendarScreen" component={CalendarScreen} />
        <Tab.Screen name="HomeScreen" component={HomeScreen} />
        <Tab.Screen name="ReminderScreen" component={ReminderScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}