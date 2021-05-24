import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Tabs from '../tabs/HomeTabs'
import About from '../screens/About'
import LoginStack from '../stacks/LoginStack'

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

      <Drawer.Screen 
      name="Login" 
      component={LoginStack} 
      />

    </Drawer.Navigator>
  );
}