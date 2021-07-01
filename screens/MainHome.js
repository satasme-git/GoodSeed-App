import React, { useState , useEffect , useContext, useRef  } from 'react';
import { Button, View , StatusBar,Image,FlatList,TouchableOpacity,Text} from 'react-native';
import { useNavigation , DrawerActions } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { buttons, styles } from '../styles/Styles';

import { Background } from '../styles/Background';

import * as Animatable from 'react-native-animatable';

import { Habbits } from '../styles/Habbits';

import MaskedView from '@react-native-community/masked-view';

export default function Details() {
  useEffect(() => {
    if (Platform.OS === 'android') {
        StatusBar.setBackgroundColor('rgba(0,0,0,0)');
        StatusBar.setTranslucent(true);
        StatusBar.setBarStyle('dark-content')
      }
    }, []);
    const navigation = useNavigation();
    const renderItem = ({ item }) => (
      <TouchableOpacity style={{backgroundColor:item.color,margin:10,paddingVertical:10,paddingHorizontal:20,borderRadius:10}} onPress={()=>{navigation.navigate(item.screen)}}>
        <Text style={{color:item.fontColor,fontSize:20}}>{item.title}</Text>
      </TouchableOpacity>
    );

    return (
      <View style={styles.container}>
        <Background>
          <Animatable.View animation="pulse" easing="ease-out" iterationCount="infinite" style={styles.heart} >
          <Image source={require('../assets/heart1.png')} style={styles.heart} />
          
          <MaskedView
        // style={{marginTop:}}
        maskElement={
          <View
            style={{
              backgroundColor: 'transparent',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Image source={require('../assets/heartBg1.png')} style={styles.heartBg} />
          </View>
        }
      >
          <View style={[styles.fill,{backgroundColor:'red',marginTop:5}]} />
          <View style={[styles.fill,{backgroundColor:'#3b1568'}]} />
          <View style={[styles.fill,{backgroundColor:'#f5ac4e'}]} />
          <View style={[styles.fill,{backgroundColor:'#dd4224'}]} />
          <View style={[styles.fill,{backgroundColor:'#bb280f'}]} />
          <View style={[styles.fill,{backgroundColor:'#940700'}]} />
        
      </MaskedView>

          {/* <Image source={require('../assets/heartBg1.png')} style={styles.heartBg} /> */}

          {/* <Image source={require('../assets/heartBg1.png')} style={styles.heartBg} /> */}
          </Animatable.View>

      <View style={{marginTop:300}}>
        <FlatList
          data={Habbits}
          renderItem={renderItem}
          horizontal={false}
          numColumns={2}
          keyExtractor={item => item.id}
          contentContainerStyle={{alignItems:'center'}}
          
        />
      </View>

     


        </Background>
      </View>
    );
  }