import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './components/screens/HomeScreen';
import CalendarScreen from './components/screens/CalendarScreen';
import ReminderScreen from "./components/screens/ReminderScreen";

import { styleNavigator, UIColors } from "./data/Style"
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Tab.Navigator 
        initialRouteName="HomeScreen"
        tabBarOptions={{
          style: styleNavigator,
          activeTintColor: UIColors.darkPurple,
          inactiveTintColor: UIColors.blueFull,
          showLabel: false
        }}
      >
        <Tab.Screen 
          name="CalendarScreen" 
          component={CalendarScreen}
          options={{
            tabBarIcon:({color, size}) => (
              <Ionicons name="ios-calendar-outline" color={color} size={size} />
            )
          }} 
        />
        <Tab.Screen 
            name="HomeScreen" 
            component={HomeScreen}
            options={{
              tabBarIcon:({color, size}) => (
                <Ionicons name="ios-home" color={color} size={size} />
              )
            }} 
        />
        <Tab.Screen 
          name="ReminderScreen" 
          component={ReminderScreen} 
          options={{
            tabBarIcon:({color, size}) => (
              <Ionicons name="ios-alarm" color={color} size={size} />
            )
          }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}