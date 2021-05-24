import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeDrawer from './drawer/HomeDrawer'

export default function App() {
  return (
    <NavigationContainer>
      <HomeDrawer/>
    </NavigationContainer>
  );
}