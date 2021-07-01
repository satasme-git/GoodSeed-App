import React, { useState, useEffect } from 'react'
import { Button, View ,Text, StatusBar, TouchableHighlight, TextInput, Image} from 'react-native'
import {buttons, styles} from '../styles/Styles'
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation , DrawerActions } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';
import { Background } from '../styles/Background';

export default function Login() {
  
  const navigation = useNavigation();

    const [name, setName] = useState( "");  
    const [pw, setPw] = useState( ""); 
    const [userInfo, setUserInfo] = useState([]);
    const [user, setUser] = useState({})
    
    const login = (em,key) =>{

      const data = { email: em,password: key};
      fetch("https://health.bestceylonhotels.com/api/login", {
        method: 'POST', // or 'PUT'
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        navigation.navigate('SelectStack')
      })
      .catch((error) => {
        
        console.error('Error:', error);
        
      })
      // console.log(em+key)
    }



    useEffect(() => {
        
      }, [])


    



    return (
        <View style={[styles.container,{backgroundColor:'#90b0b5'}]}>
            <StatusBar backgroundColor={'#4b937c'} />
            <Animatable.View 
                style={{flex:1}}
                animation={'bounceInDown'}
            >
                {/* <LinearGradient colors={['#4b937c', '#709c97', '#90b0b5']} style={[styles.linearGradient,{alignItems:'center'}]}> */}
                    <Background>
                    <Animatable.Text style={{color:'white',fontSize:25,padding:10,textAlign:'center'}} delay={300} animation={'bounceIn'}>
                        Login
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

                    <TouchableHighlight style={buttons.login} onPress={()=>login(name,pw)}>
                        <Text style={buttons.text}>Login</Text>
                    </TouchableHighlight>
                    
                    <View style={{flexDirection:'row',alignItems:'center',alignSelf:'center',paddingTop:10,justifyContent:'space-around'}}>
                        <Text>Haven't any account?   </Text>
                        <TouchableHighlight underlayColor={'#DDDDDD'} onPress={()=>navigation.navigate('SignUp')}>
                            <Text style={{color:'red'}}>Sign Up</Text>
                        </TouchableHighlight>
                    </View>

                    </View>
                    </Background>
                {/* </LinearGradient>   */}
            </Animatable.View>
            
            
        </View>
    )
}
