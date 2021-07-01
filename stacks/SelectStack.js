import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeDrawer from '../drawer/HomeDrawer'
// import Form from '../screens/Form'
import Form from '../screens/Profile'
import Avatar from '../screens/Avatar'
import Select from '../screens/Select'
import MainHome from '../screens/MainHome'

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen 
        name="Form" 
        component={Form}
        options={{
          headerShown: false,
        }}
      /> */}
      <Stack.Screen 
        name="Main" 
        component={MainHome}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen 
        name="Select" 
        component={Select}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen 
        name="Avatar" 
        component={Avatar}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen 
        name="HomeDrawer" component={HomeDrawer}         
        options={{
          headerShown: false,
        }} 
      />
    </Stack.Navigator>
  );
}