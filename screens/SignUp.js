import React, { useState, useEffect } from 'react'
import { Button, View ,Text, StatusBar, TouchableHighlight, TextInput, Image} from 'react-native'
import {buttons, styles} from '../styles/Styles'
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation , DrawerActions } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import Ionicons from 'react-native-vector-icons/Ionicons';
 
export default function SignUp() {

    const [name, setName] = useState( "");  
    const [pw, setPw] = useState( "");
    const [repw, setRePW] = useState( "");
    // const [msg, setMsg] = useState( "");

    const navigation = useNavigation();

    return (
        <View style={[styles.container,{backgroundColor:'#90b0b5'}]}>
            <StatusBar backgroundColor={'#4b937c'} />
            <Animatable.View 
                style={{flex:1}}
                animation={'bounceInDown'}
            >
                <LinearGradient colors={['#4b937c', '#709c97', '#90b0b5']} style={styles.linearGradient}>
                    <Animatable.Text style={{color:'white',fontSize:18,padding:10,textAlign:'center'}} delay={300} animation={'bounceIn'}>
                        Login
                    </Animatable.Text>
                    <Animatable.View style={styles.loginpic}>
                        <Image source={require('../assets/user.png')} style={{width:60,height:60,tintColor:'#255c43'}} />
                    </Animatable.View>
                    <View style={styles.loginBoard}>

                    <View style={{alignItems:'center',flexDirection:'row'}}>
                            <Ionicons 
                                name="person-outline" 
                                size={20} 
                                color="black" 
                                style={{marginRight:-45,marginLeft:25}}
                            /> 
                    <TextInput
                        style={styles.inputText}
                        placeholder={'User Name'}
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
                    />
                    </View>

                    <TouchableHighlight style={buttons.login} onPress={()=>navigation.navigate('Login')}>
                        <Text style={buttons.text}>Sign Up</Text>
                    </TouchableHighlight>

                    </View>
                </LinearGradient>  
            </Animatable.View>
            
            
        </View>
    )
}
