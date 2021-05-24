import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeStack from '../stacks/HomeStack'
import Settings from '../screens/Settings'

const Tab = createBottomTabNavigator();

export default function HomeTabs() {
  return (
    <Tab.Navigator       
        tabBarOptions={{
            activeTintColor: '#2d6553',
        }}
    >

      <Tab.Screen 
        name="HomeStack" 
        component={HomeStack} 
        options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-outline" color={color} size={size} />
            ),
        }}
      />
      <Tab.Screen name="Settings" component={Settings} 
      options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="settings-outline" color={color} size={size} />
            ),
        }}/>
    </Tab.Navigator>
  );
}