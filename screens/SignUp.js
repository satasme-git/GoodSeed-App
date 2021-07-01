import React, { useState, useEffect } from 'react'
import { Button, View ,Text, StatusBar, TouchableHighlight, TextInput, Image} from 'react-native'
import {buttons, styles} from '../styles/Styles'
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation , DrawerActions } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { get as getCookie} from 'browser-cookies'
import CookieManager from '@react-native-cookies/cookies';

import { Background } from '../styles/Background';
 
export default function SignUp() {

    const [name, setName] = useState( "");  
    const [pw, setPw] = useState( "");
    const [repw, setRePW] = useState( "");
    const [token, setToken] = useState("");

    var baseUrl = 'https://health.bestceylonhotels.com/api/user';
    
    const signUp = (em,key) =>{

        const data = { email: em,key: key};
        fetch(baseUrl, {
          method: 'POST', // or 'PUT'
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
        .then(response => response.text())
        .then(data => {
          console.log(data);
        })
        .catch((error) => {
          console.error('Error:', error);
          
        })
      }



      useEffect(() => {

  

      }, [])

    const navigation = useNavigation();

    return (
        <View style={[styles.container,{backgroundColor:'#90b0b5'}]}>
            <StatusBar backgroundColor={'#4b937c'} />
            <Animatable.View 
                style={{flex:1}}
                animation={'bounceInDown'}
            >
                <Background>
                    <Animatable.Text style={{color:'white',fontSize:25,padding:10,textAlign:'center'}} delay={300} animation={'bounceIn'}>
                        Sign Up
                    </Animatable.Text>
                    <Animatable.View style={styles.loginpic}>
                        <Image source={require('../assets/user.png')} style={{width:60,height:60,tintColor:'#255c43'}} />
                    </Animatable.View>
                    <View style={styles.loginBoard}>

                    <View style={{alignItems:'center',flexDirection:'row'}}>
                            <Ionicons 
                                name="mail-outline" 
                                size={20} 
                                color="black" 
                                style={{marginRight:-45,marginLeft:25}}
                            /> 
                    <TextInput
                        style={styles.inputText}
                        placeholder={'E-mail Address'}
                        value={name}
                        onChangeText={(text)=>setName(text)}
                    />
                    </View>

                    <View style={{alignItems:'center',flexDirection:'row'}}>
                            <Ionicons 
                                name="lock-closed-outline" 
                                size={20} 
                                color="black" 
                                style={{marginRight:-45,marginLeft:25}}
                            /> 
                    <TextInput
                        style={styles.inputText}
                        placeholder={'Password'}
                        value={pw}
                        onChangeText={(text)=>setPw(text)}
                    />
                    </View>

                    <View style={{alignItems:'center',flexDirection:'row'}}>
                            <Ionicons 
                                name="lock-closed-outline" 
                                size={20} 
                                color="black" 
                                style={{marginRight:-45,marginLeft:25}}
                            /> 
                    <TextInput
                        style={styles.inputText}
                        placeholder={'Re-Type Password'}
                        value={repw}
                        onChangeText={(text)=>setRePW(text)}
                    />
                    </View>

                    <TouchableHighlight style={buttons.login} onPress={()=>
                        
                        // navigation.navigate('Login')
                        signUp(name,pw)
                        }>
                        <Text style={buttons.text}>Sign Up</Text>
                    </TouchableHighlight>

                    </View>
                    </Background> 
            </Animatable.View>
            
            
        </View>
    )
}
