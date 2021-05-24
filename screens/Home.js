import * as React from 'react';
import { Button, View , Text} from 'react-native';
import { useNavigation , DrawerActions } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { buttons, styles } from '../styles/Styles';

export default function Home() {

    const navigation = useNavigation();

    return (
      <View style={styles.container}>
          <View style={styles.header}>
             <Ionicons 
                name="menu-outline" 
                size={30} 
                color="black" 
                onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
             /> 
             <Text style={{fontSize:17}}>Home</Text>
          </View>
          
          <View style={styles.innerContainer}>
            <Button
            title="Go to Details"
            onPress={() => navigation.navigate('Details')}
            />  
          </View>
        
      </View>
    );
  }