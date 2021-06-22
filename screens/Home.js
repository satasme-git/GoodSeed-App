import  React, {useState} from 'react';
import { Button, View , Text} from 'react-native';
import { useNavigation , DrawerActions } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { buttons, styles } from '../styles/Styles';
import {Picker} from '@react-native-picker/picker';

export default function Home() {
  const [selectedLanguage, setSelectedLanguage] = useState();
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
             <Text style={styles.headerText}>Home</Text>
          </View>
          
          <View style={styles.innerContainer}>
            <Button
            title="Go to Details"
            onPress={() => navigation.navigate('Details')}
            /> 
             <Button
            title="Go to Evaluation form"
            onPress={() => navigation.navigate('Profile')}
            />  
          </View>
          <Picker
  selectedValue={selectedLanguage}
  onValueChange={(itemValue, itemIndex) =>
    setSelectedLanguage(itemValue)
  }>
  <Picker.Item label="Java" value="java" />
  <Picker.Item label="JavaScript" value="js" />
</Picker>
      </View>
    );
  }