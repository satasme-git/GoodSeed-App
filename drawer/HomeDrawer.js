import React, { useEffect, useState ,useContext} from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
  createDrawerNavigator,
  DrawerItem
} from '@react-navigation/drawer';

import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { TouchableHighlight, View , Text,Image} from 'react-native';

import Tabs from '../tabs/HomeTabs'
import About from '../screens/About'
import LoginStack from '../stacks/LoginStack'
import Login from '../screens/Login'
import Contact from '../screens/Contact'
import SelectStack from '../stacks/SelectStack'
import MainProfile from '../screens/MainProfile'
import Summary from '../screens/Summary'
import Achivements from '../screens/Achivements'

import AsyncStorage from '@react-native-async-storage/async-storage';
import { HealthProvider, HealthContext } from '../context/Context';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  const health = useContext(HealthContext);
  return (
    <DrawerContentScrollView {...props}>
      <View style={{height:150,justifyContent:'space-evenly',padding:10,alignItems:'center'}}>
        <View style={{backgroundColor:'white',height:60,width:60,borderRadius:50,elevation:5}} />
        {/* <Text style={{color:'gray'}}>{health.user.email}</Text> */}
        <Text style={{color:'black',fontSize:17}}>{health.user.email}</Text>
      </View>
      <DrawerItemList {...props} itemStyle={{paddingLeft:20}} labelStyle={{fontSize:16}}/>
        {/* <View
          style={{
          borderBottomColor: 'black',
          borderBottomWidth: 1,
          marginHorizontal:10
        }}/>

      <DrawerItem
        label="Login"
        icon={({ focused, color, size }) => <AntDesign color={color} size={20} name={'login'} />}
        onPress={() => props.navigation.navigate('Login')}
      /> */}
    </DrawerContentScrollView>
  );
}
export default function MyDrawer() {

  const [data, setData] = useState([]);
  const health = useContext(HealthContext);
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('user')
      return jsonValue != null ?[ 
      setData(JSON.parse(jsonValue)), 
      console.log('drawer      '+jsonValue)]
      
      : 
      setData(jsonValue);
    } catch(e) {
      console.log(e)
      // error reading value
    }
  }
  useEffect(() =>   {
    getData()
  }, [])

  
  return (
    // data==[]
    parseInt(health.user.position)==3
    ?
    <Drawer.Navigator 
    drawerContent={props => <CustomDrawerContent {...props} />}
    drawerContentOptions={{
      activeTintColor: '#6bb333',
      itemStyle: { marginVertical: 10 },
      activeBackgroundColor:'white',
      
    }}
    initialRouteName={'Tabs'}
    
    >
    
      <Drawer.Screen 
      name="Tabs" 
      component={Tabs}  
      options={{ drawerLabel: 'Home' ,
      drawerIcon: ({ focused, color, size }) => <AntDesign color={color} size={20} name={'home'} />
    }}
      />

      <Drawer.Screen 
      name="Profile" 
      component={MainProfile}   
      options={{ drawerLabel: 'Profile' ,
      drawerIcon: ({ focused, color, size }) => <AntDesign color={color} size={20} name={'user'} />
    }}
      />
      
      <Drawer.Screen 
      name="Achivements" 
      component={Achivements}    
      options={{ drawerLabel: 'Achivements' ,
      drawerIcon: ({ focused, color, size }) => <AntDesign color={color} size={20} name={'heart'} />
    }}
      />

      <Drawer.Screen 
      name="Summary" 
      component={Summary}   
      options={{ drawerLabel: 'Summary' ,
      drawerIcon: ({ focused, color, size }) => <AntDesign color={color} size={20} name={'bars'} />
    }} 
      />

      <Drawer.Screen 
      name="Contact us" 
      component={Contact}   
      options={{ drawerLabel: 'Contact us' ,
      drawerIcon: ({ focused, color, size }) => <AntDesign color={color} size={20} name={'contacts'} />
    }} 
      />
 
      <Drawer.Screen 
      name="About" 
      component={About}   
      options={{ drawerLabel: 'About' ,
      drawerIcon: ({ focused, color, size }) => <AntDesign color={color} size={20} name={'infocirlceo'} />
    }} 
      />

    <Drawer.Screen 
      name="Login" 
      component={LoginStack}    
      options={{ drawerLabel: 'Login' ,
      drawerIcon: ({ focused, color, size }) => <AntDesign color={color} size={20} name={'login'} />
    }}
      />


    </Drawer.Navigator>
    :
    // parseInt(data.position)==3

    // ?
    // <Drawer.Navigator 
    // drawerContent={props => <CustomDrawerContent {...props} />}
    // drawerContentOptions={{
    //   activeTintColor: '#6bb333',
    //   itemStyle: { marginVertical: 10 },
    //   activeBackgroundColor:'white',
      
    // }}
    // initialRouteName={'Tabs'}
    
    // >
    
    //   <Drawer.Screen 
    //   name="Tabs" 
    //   component={Tabs}  
    //   options={{ drawerLabel: 'Home' ,
    //   drawerIcon: ({ focused, color, size }) => <AntDesign color={color} size={20} name={'home'} />
    // }}
    //   />

    //   <Drawer.Screen 
    //   name="Profile" 
    //   component={MainProfile}   
    //   options={{ drawerLabel: 'Profile' ,
    //   drawerIcon: ({ focused, color, size }) => <AntDesign color={color} size={20} name={'user'} />
    // }}
    //   />
      
    //   <Drawer.Screen 
    //   name="Achivements" 
    //   component={Achivements}    
    //   options={{ drawerLabel: 'Achivements' ,
    //   drawerIcon: ({ focused, color, size }) => <AntDesign color={color} size={20} name={'heart'} />
    // }}
    //   />

    //   <Drawer.Screen 
    //   name="Summary" 
    //   component={Summary}   
    //   options={{ drawerLabel: 'Summary' ,
    //   drawerIcon: ({ focused, color, size }) => <AntDesign color={color} size={20} name={'bars'} />
    // }} 
    //   />

    //   <Drawer.Screen 
    //   name="Contact us" 
    //   component={Contact}   
    //   options={{ drawerLabel: 'Contact us' ,
    //   drawerIcon: ({ focused, color, size }) => <AntDesign color={color} size={20} name={'contacts'} />
    // }} 
    //   />
 
    //   <Drawer.Screen 
    //   name="About" 
    //   component={About}   
    //   options={{ drawerLabel: 'About' ,
    //   drawerIcon: ({ focused, color, size }) => <AntDesign color={color} size={20} name={'infocirlceo'} />
    // }} 
    //   />

    // <Drawer.Screen 
    //   name="Login" 
    //   component={LoginStack}    
    //   options={{ drawerLabel: 'Login' ,
    //   drawerIcon: ({ focused, color, size }) => <AntDesign color={color} size={20} name={'login'} />
    // }}
    //   />


    // </Drawer.Navigator>
    // :
    
    
    <Drawer.Navigator 
    drawerContent={props => <CustomDrawerContent {...props} />}
    drawerContentOptions={{
      activeTintColor: '#6bb333',
      itemStyle: { marginVertical: 10 },
      activeBackgroundColor:'white',
      
    }}
    initialRouteName={'Login'}
    
    >
      {/* {console.log(data.position)} */}
    
      <Drawer.Screen 
      name="Tabs" 
      component={Tabs}  
      options={{ drawerLabel: 'Home' ,
      drawerIcon: ({ focused, color, size }) => <AntDesign color={color} size={20} name={'home'} />
    }}
      />

      <Drawer.Screen 
      name="Profile" 
      component={MainProfile}   
      options={{ drawerLabel: 'Profile' ,
      drawerIcon: ({ focused, color, size }) => <AntDesign color={color} size={20} name={'user'} />
    }}
      />
      
      <Drawer.Screen 
      name="Achivements" 
      component={Achivements}    
      options={{ drawerLabel: 'Achivements' ,
      drawerIcon: ({ focused, color, size }) => <AntDesign color={color} size={20} name={'heart'} />
    }}
      />

      <Drawer.Screen 
      name="Summary" 
      component={Summary}   
      options={{ drawerLabel: 'Summary' ,
      drawerIcon: ({ focused, color, size }) => <AntDesign color={color} size={20} name={'bars'} />
    }} 
      />

      <Drawer.Screen 
      name="Contact us" 
      component={Contact}   
      options={{ drawerLabel: 'Contact us' ,
      drawerIcon: ({ focused, color, size }) => <AntDesign color={color} size={20} name={'contacts'} />
    }} 
      />
 
      <Drawer.Screen 
      name="About" 
      component={About}   
      options={{ drawerLabel: 'About' ,
      drawerIcon: ({ focused, color, size }) => <AntDesign color={color} size={20} name={'infocirlceo'} />
    }} 
      />

    <Drawer.Screen 
      name="Login" 
      component={LoginStack}    
      options={{ drawerLabel: 'Login' ,
      drawerIcon: ({ focused, color, size }) => <AntDesign color={color} size={20} name={'login'} />
    }}
      />


    </Drawer.Navigator>
  );
}