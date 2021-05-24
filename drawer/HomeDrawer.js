import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Tabs from '../tabs/HomeTabs'
import About from '../screens/About'

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator>
        
      <Drawer.Screen 
      name="Tabs" 
      component={Tabs}  
      options={{ drawerLabel: 'Home' }}
      />

      <Drawer.Screen 
      name="About" 
      component={About} 
      />

    </Drawer.Navigator>
  );
}