import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeDrawer from './drawer/HomeDrawer'
import { StatusBar } from 'react-native';

import SelectStack from './stacks/SelectStack'
import LoginStack from './stacks/LoginStack'

export default function App() {
  return (
    
    <NavigationContainer>
      <StatusBar backgroundColor={'#4b937c'} />
      {/* <HomeDrawer/> */}
      <SelectStack/>
      {/* <LoginStack/> */}
      </NavigationContainer>
  );
}