import React, { useState , useEffect , useContext, useRef  } from 'react';
import { Dimensions, View , StatusBar,Image,FlatList,TouchableOpacity,Text, ScrollView} from 'react-native';
import { useNavigation , DrawerActions } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { buttons, styles } from '../styles/Styles';

const BaseUrl = require('../styles/BaseUrl');

import { Background } from '../styles/Background';

import * as Animatable from 'react-native-animatable';

import { Habbits } from '../styles/Habbits';

import MaskedView from '@react-native-community/masked-view';

import { Neomorph } from 'react-native-neomorph-shadows';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function Details() {
  
  // useEffect(() => {
  //   if (Platform.OS === 'android') {
  //       StatusBar.setBackgroundColor('rgba(0,0,0,0)');
  //       StatusBar.setTranslucent(true);
  //       StatusBar.setBarStyle('dark-content')
  //     }
  //   }, []);

    const navigation = useNavigation();
    const renderItem = ({ item }) => (
      <TouchableOpacity style={{backgroundColor:item.color,margin:10,paddingVertical:10,paddingHorizontal:20,borderRadius:10}} onPress={()=>{navigation.navigate(item.screen)}}>
        <Text style={{color:item.fontColor,fontSize:20}}>{item.title}</Text>
      </TouchableOpacity>
    );

    return (
      <View style={styles.container}>
        <Background>
        <View style={[styles.header,{backgroundColor: 'transparent',}]}>
             <Ionicons 
                name="menu-outline" 
                size={30} 
                color="black" 
                onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
             /> 
          </View>
        <ScrollView contentContainerStyle={{alignItems:'center'}}>
          
          
          <View animation="pulse" easing="ease-out" iterationCount="infinite" style={styles.heart} >
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
          <View style={[styles.fill,{backgroundColor:'red',marginTop:0}]} />
          <View style={[styles.fill,{backgroundColor:'#3b1568'}]} />
          <View style={[styles.fill,{backgroundColor:'#f5ac4e'}]} />
          <View style={[styles.fill,{backgroundColor:'#dd4224'}]} />
          <View style={[styles.fill,{backgroundColor:'#bb280f'}]} />
          <View style={[styles.fill,{backgroundColor:'#940700'}]} />
        
      </MaskedView>
          {/* <Image source={require('../assets/heartBg1.png')} style={styles.heartBg} /> */}

          {/* <Image source={require('../assets/heartBg1.png')} style={styles.heartBg} /> */}
          </View>

          
      <View style={styles.stepCounterView}>
          <TouchableOpacity  
            style={{backgroundColor:'white',margin:5,marginLeft:0,paddingVertical:0,paddingHorizontal:0,borderRadius:5,width:(windowWidth/2.2),padding:10,justifyContent:'space-between',alignSelf:'flex-start'}} 
            onPress={()=>{}}>
              <Text style={{color:'#222b31',padding:10,fontSize:16,width:(windowWidth/2.2)}}>Steps : </Text>
          </TouchableOpacity>
          {/* <TouchableOpacity  
            style={{backgroundColor:'white',margin:5,marginLeft:0,paddingVertical:0,paddingHorizontal:0,borderRadius:5,width:(windowWidth/2.2),padding:10,justifyContent:'space-between',alignSelf:'flex-start'}} 
            onPress={()=>{}}>
              <Text style={{color:'#222b31',padding:10,fontSize:16,width:(windowWidth/2.2)}}>Steps : </Text>
          </TouchableOpacity> */}
      </View>

{/* </View> */}
{/* <View style={{backgroundColor:'white',width:windowWidth-10,height:170,left:15,borderRadius:5,marginBottom:10,position: 'absolute',top:50}} /> */}
      <View style={{marginTop:225,flexDirection:'row',width:windowWidth,flexWrap:'wrap',alignItems:'center',justifyContent:'center'}}>
        {/* <FlatList
          data={Habbits}
          renderItem={renderItem}
          horizontal={false}
          keyExtractor={item => item.id}
          contentContainerStyle={{alignItems:'center'}}
          
        /> */}

        {Habbits.map((item)=>
            <TouchableOpacity key={item.id} 
            style={{backgroundColor:'white',margin:5,paddingVertical:0,paddingHorizontal:0,borderRadius:5,height:item.height,justifyContent:'space-between',alignSelf:'flex-start'}} 
            onPress={()=>{navigation.navigate(item.screen)}}>
              <Text style={{color:'#222b31',paddingHorizontal:5,fontSize:16,width:(windowWidth/2.2),marginTop:5}}>{item.title}</Text>
              <Image source={item.png} style={{width:50,height:50,tintColor:item.color,alignSelf:'flex-end',marginBottom:0,resizeMode:'contain'}} />
            </TouchableOpacity>
        )}
      </View>

     
      </ScrollView>

        </Background>
        
      </View>
    );
  }