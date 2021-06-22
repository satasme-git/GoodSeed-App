import React, {useState, useEffect} from 'react';
import {
  Button,
  View,
  Text,
  StatusBar,
  TouchableHighlight,
  TextInput,
  Image,
} from 'react-native';
import {buttons, styles} from '../styles/Styles';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

import {
  LoginButton,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk';

export default function Login() {
  const [name, setName] = useState('');
  const [pw, setPw] = useState('');
  const [userInfo, setUserInfo] = useState([]);
  const [user, setUser] = useState({});

  const getInfoFromToken = token => {
    const PROFILE_REQUEST_PARAMS = {
      fields: {
        string: 'id, name,  first_name, last_name',
      },
    };
    const profileRequest = new GraphRequest(
      '/me',
      {token, parameters: PROFILE_REQUEST_PARAMS},
      (error, result) => {
        if (error) {
          console.log('login info has error: ' + error);
        } else {
          setUserInfo(result);
          console.log('result:', result);
        }
      },
    );
    new GraphRequestManager().addRequest(profileRequest).start();
  };

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '1096883138091-4sk5e1iqngedcdec8kn6606obev8m77f.apps.googleusercontent.com',
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
      iosClientId: '', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    });
    isSignedIn();
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
      setUser(userInfo);
    } catch (error) {
      console.log('Message', error.message);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('User Cancelled the Login Flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Signing In');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Play Services Not Available or Outdated');
      } else {
        console.log('Some Other Error Happened');
      }
    }
  };
  const isSignedIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    if (!!isSignedIn) {
      getCurrentUserInfo();
    } else {
      console.log('Please Login');
    }
  };
  const getCurrentUserInfo = async () => {
    try {
      const userInfo = await GoogleSignin.signInSilently();
      setUser(userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        alert('User has not signed in yet');
        console.log('User has not signed in yet');
      } else {
        alert("Something went wrong. Unable to get user's info");
        console.log("Something went wrong. Unable to get user's info");
      }
    }
  };
  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      setUser({}); // Remember to remove the user from your app's state as well
    } catch (error) {
      console.error(error);
    }
  };

  const navigation = useNavigation();

  return (
    <View style={[styles.container, {backgroundColor: '#90b0b5'}]}>
      <StatusBar backgroundColor={'#4b937c'} />
      <Animatable.View style={{flex: 1}} animation={'bounceInDown'}>
        <LinearGradient
          colors={['#4b937c', '#709c97', '#90b0b5']}
          style={styles.linearGradient}>
          <Animatable.Text
            style={{
              color: 'white',
              fontSize: 25,
              padding: 10,
              textAlign: 'center',
            }}
            delay={300}
            animation={'bounceIn'}>
            Login
          </Animatable.Text>
          <Animatable.View style={styles.loginpic}>
            <Image
              source={require('../assets/user.png')}
              style={{width: 60, height: 60, tintColor: '#255c43'}}
            />
          </Animatable.View>
          <View style={styles.loginBoard}>
            <View style={{alignItems: 'center', flexDirection: 'row'}}>
              <Ionicons
                name="person-outline"
                size={20}
                color="black"
                style={{marginRight: -45, marginLeft: 25}}
              />
              <TextInput
                style={styles.inputText}
                placeholder={'User Name'}
                value={name}
                onChangeText={text => setName(text)}
              />
            </View>

            <View style={{alignItems: 'center', flexDirection: 'row'}}>
              <Ionicons
                name="lock-closed-outline"
                size={20}
                color="black"
                style={{marginRight: -45, marginLeft: 25}}
              />
              <TextInput
                style={styles.inputText}
                placeholder={'Password'}
                value={pw}
                onChangeText={text => setPw(text)}
              />
            </View>

            <TouchableHighlight
              style={buttons.login}
              onPress={() => navigation.navigate('EvaluationForm')}>
              <Text style={buttons.text}>Login</Text>
            </TouchableHighlight>

            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: 15,
                marginVertical: 10,
                alignItems: 'center',
                justifyContent: 'space-around',
              }}>
              <View style={styles.orBar} />
              <Text>OR</Text>
              <View style={styles.orBar} />
            </View>

            <View style={{alignSelf: 'center'}}>
              <LoginButton
                onLoginFinished={(error, result) => {
                  if (error) {
                    console.log('login has error: ' + result.error);
                  } else if (result.isCancelled) {
                    console.log('login is cancelled.');
                  } else {
                    AccessToken.getCurrentAccessToken().then(data => {
                      const accessToken = data.accessToken.toString();
                      getInfoFromToken(accessToken);
                    });
                  }
                }}
                onLogoutFinished={() => setUserInfo([])}
                style={{width: 192, height: 35}}
              />
            </View>

            <View style={{alignSelf: 'center'}}>
              {!user.idToken ? (
                <GoogleSigninButton
                  style={{width: 192, height: 40, marginTop: 10}}
                  size={GoogleSigninButton.Size.Wide}
                  color={GoogleSigninButton.Color.Light}
                  onPress={signIn}
                />
              ) : (
                <TouchableHighlight
                  style={{
                    backgroundColor: 'white',
                    elevation: 2,
                    margin: 10,
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    borderRadius: 5,
                  }}
                  onPress={signOut}>
                  <Text>Logout</Text>
                </TouchableHighlight>
              )}
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                alignSelf: 'center',
                paddingTop: 10,
                justifyContent: 'space-around',
              }}>
              <Text>Haven't any account? </Text>
              <TouchableHighlight
                underlayColor={'#DDDDDD'}
                onPress={() => navigation.navigate('SignUp')}>
                <Text style={{color: 'red'}}>Sign Up</Text>
              </TouchableHighlight>
            </View>
          </View>
        </LinearGradient>
      </Animatable.View>
    </View>
  );
}
