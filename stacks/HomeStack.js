import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home'
import Details from '../screens/Details'

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" component={Home}         
        options={{
          headerShown: false,
        }} 
      />
      <Stack.Screen 
        name="Details" 
        component={Details}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}