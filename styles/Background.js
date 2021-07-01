import React, { useState, useEffect } from 'react'
import {Image, Dimensions, StatusBar} from 'react-native';
import {buttons, styles} from '../styles/Styles'
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Background =({ children })=>{
    return(
    <LinearGradient colors={['#4b937c', '#709c97', '#90b0b5']} style={[styles.linearGradient,{alignItems:'center'}]}>
        <StatusBar backgroundColor={'#4b937c'} />
        <Animatable.Image delay={300} animation={'fadeInLeft'} source={require('../assets/leaforrange.png')} style={{width:100,height:100,resizeMode:'center',position:'absolute',top:30,left:-50}} />
        <Animatable.Image delay={500} animation={'fadeInRight'} source={require('../assets/leaforrange.png')} style={{width:150,height:150,resizeMode:'contain',position:'absolute',bottom:30,right:-80}} />
        <Animatable.Image delay={500} animation={'fadeInRight'} source={require('../assets/leaforrange2.png')} style={{width:150,height:150,resizeMode:'contain',position:'absolute',top:80,right:-10}} />
           { children } 
    </LinearGradient> 
    )
}

export {Background};