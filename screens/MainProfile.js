import React, {useRef, useState,useEffect,useContext} from 'react';
import { Button, View , Text,ScrollView, ImageBackground,Image,TouchableHighlight,TouchableOpacity} from 'react-native';
import { useNavigation , DrawerActions } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { buttons, styles } from '../styles/Styles';
import RBSheet from "react-native-raw-bottom-sheet";
import { RiskData } from '../styles/RiskData';

import Speedometer from 'react-native-speedometer-chart';

import * as Animatable from 'react-native-animatable';

import RNSpeedometer from 'react-native-speedometer';

import { HealthContext } from '../context/Context';

import RNFetchBlob from 'rn-fetch-blob'

// import * as ImagePicker from "react-native-image-picker"
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import ImagePicker from 'react-native-image-picker';

import AsyncStorage from '@react-native-async-storage/async-storage';
export default function MainProfile() {

   
   const health = useContext(HealthContext);
    const navigation = useNavigation();
    const refRBSheet = useRef();

    const [refreshing, setRefreshing] = useState(false);
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const [level, setLevel] = useState(210);

    const [show, setShow] = useState(null);

    const [filePath, setFilePath] = useState({});

    const [singleFile, setSingleFile] = useState('');

    const BaseUrl = require('../styles/BaseUrl');

    const options = {
      title: 'Select Avatar',
      customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    const onCameraPress =()=>{
      ImagePicker.launchCamera(options, (response) =>  {
         // console.log('Response = ', response);
        
         if (response.didCancel) {
           console.log('User cancelled image picker');
         } else if (response.error) {
           console.log('ImagePicker Error: ', 'response.error');
         } else if (response.customButton) {
           console.log('User tapped custom button: ', 'response.customButton');
         } else {
            const source = { uri: response.uri };
            const imdata = response.data;
 
            setSingleFile(imdata)
            uploadPhoto(imdata)
            // uploadImage(response.data)
        
           // You can also display the image using data:
           // const source = { uri: 'data:image/jpeg;base64,' + response.data };
        
         //   this.setState({
         //     avatarSource: source,
         //   });
         }
       });
    }

    const onGalleryPress =()=>{
      ImagePicker.launchImageLibrary(options, (response) => {
         // console.log('Response = ', response);
        
         if (response.didCancel) {
           console.log('User cancelled image picker');
         } else if (response.error) {
           console.log('ImagePicker Error: ', response.error);
         } else if (response.customButton) {
           console.log('User tapped custom button: ', response.customButton);
         } else {
           const source = { uri: response.uri };
           const imdata = response.data;

           setSingleFile(imdata)

           uploadImage()
           // You can also display the image using data:
           // const source = { uri: 'data:image/jpeg;base64,' + response.data };
        
         //   this.setState({
         //     avatarSource: source,
         //   });
         }
       });
    }

    const uploadPhoto=(photo)=>{

      var aaaa = singleFile;
      // const data = new FormData();
      // data.append('name', 'Image Upload');
      // data.append('file_attachment', fileToUpload);

      RNFetchBlob.fetch('POST', BaseUrl.BASE_URL+'/api/imageUpload', {
          Authorization: "Bearer access-token",
         //  otherHeader: "foo",
          'Content-Type': 'multipart/form-data',
      }, [
         { name: 'image', filename: 'image.png', type: 'image/png', data: JSON.stringify(photo) },
      ]).then((resp) => {
          console.log(resp.text());
      }).catch((err) => {
          console.log(err);
      });

      // this.setState({
      //     isLoading: false,

      //     dataa: ''

      // });
  }


    const selectFile = () => {
      const options = {
         mediaType: 'photo',
         maxWidth: 300,
         maxHeight: 300,
         quality: 0.8,
         cameraType: 'back',
         includeBase64: true,
         saveToPhotos: false,
         selectionLimit: 5
      }

      launchImageLibrary(options, (response) => {
         console.log('Response = ', response);
         if (response.didCancel) {
          console.log('User cancelled image picker');
          alert('User cancelled image picker');
         } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
          alert('ImagePicker Error: ' + response.error);
         } else {
            const obj = Object.assign({}, response.assets);
            setFilePath(obj['0'].uri)
            setSingleFile(obj['0'])
            // You can also display the image using data:
            // const source = { uri: 'data:image/jpeg;base64,' + response.data };
        
            console.log(obj['0'].uri)
         }
        })

    };

    

    const openPicker =()=>{
       
      const options = {
         mediaType: 'photo',
         maxWidth: 300,
         maxHeight: 300,
         quality: 0.8,
         cameraType: 'back',
         includeBase64: true,
         saveToPhotos: false,
         selectionLimit: 5
      }

      launchCamera(options, (response) => { // Use launchImageLibrary to open image gallery
        console.log('Response = ', response);
      
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          const source = { uri: response.assets };
          const obj = Object.assign({}, response.assets);
          setFilePath(obj['0'].uri)
          setSingleFile(response.assets)
          uploadImage(response)
          // You can also display the image using data:
          // const source = { uri: 'data:image/jpeg;base64,' + response.data };
      
          console.log(obj['0'].uri)
        }
      });


     
   }

   const uploadImage = async (image) => {
      // Check if any file is selected or not
      // if (singleFile != null) {
        // If file selected then create FormData
      //   const obj = Object.assign({}, response);
        const fileToUpload = singleFile;
        const data = new FormData();
        
        data.append('name', 'Image Upload');
        data.append('profile_pics', image );
        // Please change file upload URL
        let res = await fetch(
          BaseUrl.BASE_URL+'/api/imageUpload',
          {
            method: 'POST',
            body: data,
            headers: {
              'Content-Type': 'multipart/form-data; ',
            },
          }
        );
        let responseJson = await res.json();
        console.log(responseJson)
        if (responseJson.status == 1) {
           console.log(responseJson)
         //  alert('Upload Successful');
        }
      // } else {
      //   // If no file selected the show alert
      //   alert('Please Select File first');
      // }
    };

    

//   const getuserData = () => {
//     fetch(
//       'https://enewstag.com/api/socialUser/',
//     )
//       .then((response) => response.json())
//       .then((json) => setData(json))
//       .catch((error) => console.error(error))
//       .finally(() => {setLoading(false);});
//     setRefreshing(false);
    
//   };

    useEffect(() => {
      // getuserData()
      // refRBSheet.current.open()
   
    }, []);

    return (
      <View style={styles.container}>
          <View style={[styles.header,{backgroundColor: 'transparent',}]}>
             <Ionicons 
                name="menu-outline" 
                size={30} 
                color="white" 
                style={{zIndex:2}}
                onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
             /> 
             <Text style={{color:'white',fontSize:22,marginLeft:10}}>Profile</Text>
          </View>
          
          <View style={[styles.innerContainer,{backgroundColor: '#6bb333',}]}>

            

            <Animatable.View style={styles.bottomSheet} animation={'slideInUp'}>
            <View style={styles.profileHeader}>
               <ImageBackground 
                  source={require('../assets/cover.jpg')}
                  style={styles.imageBg}
                  imageStyle={styles.imageBgInner}
               >
                  <View>
                     <TouchableHighlight underlayColor={'#DDDDDD'} onPress={()=>refRBSheet.current.open()} style={styles.profilPicBack}>
                        <Image 
                           source={require('../assets/propic.jpg')} 
                           style={styles.profilePic}
                        />
                     </TouchableHighlight>

                     <View style={styles.profilHeader}>
                        <Text style={{fontSize:17}}>{health.user.email}</Text>
                     </View>
                  </View>
               </ImageBackground>
            </View>

            <View style={{backgroundColor: 'white',marginTop:10,padding:10,borderTopRightRadius:10,borderTopLeftRadius:10}}>
            <View style={{marginVertical:0,padding:0,flexDirection:'row',alignItems:'center',justifyContent:'space-between',backgroundColor: '#6bb333',borderRadius:20}}>
                  <Text style={{fontSize:19,textAlign:'center',color:'white',marginLeft:25}}>Your Risk {'\n'}Level</Text>
                  <View style={{alignItems:'center',backgroundColor: 'rgba(255,255,255,0.4)',margin:10,padding:10,borderRadius:20,alignSelf:'flex-end'}}>
                  <View style={{backgroundColor: 'white',padding:5,paddingHorizontal:30,borderRadius:15}}>
                  <Speedometer 
                  // value={level} 
                  value={parseInt(health.user.risk_point)}
                  size={90}
                  totalValue={570} 
                  showIndicator
                  outerColor="#d3d3d3"
                  showLabels
                  labelStyle={{ color: 'blue', fontSize:10 }}
                  internalColor={parseInt(health.user.risk_point)<=200?"#00ab4d":parseInt(health.user.risk_point)>=201 && parseInt(health.user.risk_point)<=325?"#ecc724":'#d71e25'}
                  style={{marginBottom:-5}}
                  />
                  <Text style={{fontSize:14,textAlign:'center',marginTop:-5,marginBottom:0,color:parseInt(health.user.risk_point)<=200?"#00ab4d":parseInt(health.user.risk_point)>=201 && parseInt(health.user.risk_point)<=325?"#ecc724":'#d71e25'}}>
                     {parseInt(health.user.risk_point)}{'\n'}
                     {parseInt(health.user.risk_point)<=200?"Normal":parseInt(health.user.risk_point)>=201 && parseInt(health.user.risk_point)<=325?"Border Line":'High Risk'}</Text>
                     </View>
                  </View>

               </View>

               {/* <View style={styles.divider}/> */}
               {RiskData.map((item)=>
                  <View key={item.id} style={{backgroundColor:item.color,marginTop:5,padding:7,borderRadius:10,flexDirection:'row',justifyContent:'space-between'}}>
                     <Text style={{fontSize:16,color:item.fontColor}}>
                        {item.title}
                     </Text>
                     <Text style={{color:'black'}}>{item.points}</Text>
                  </View>
               )}
               </View>
            </Animatable.View>

            <RBSheet
               ref={refRBSheet}
               closeOnDragDown={true}
               closeOnPressMask={false}
               customStyles={{
                  wrapper: {
                     backgroundColor: "transparent",
                     zIndex:1
                  },
                  draggableIcon: {
                     backgroundColor: "#000"
                  },
                  container:[styles.bottomSheet,{elevation:10,padding:10}]
               }}
               closeOnPressBack={true}
               animationType={'slide'}
               closeOnPressMask={true}
            >

               <Text style={{color:'black',fontSize:20,textAlign:'center'}}>Transformation Progress</Text>
               
               <View style={{flexDirection:'row',justifyContent: 'space-evenly',margin:10}}>
               
               <View style={[styles.profilePicBig,{backgroundColor: 'rgba(107,179,51,0.2)',}]}>
                <Image 
                  source={require('../assets/profile.png')} 
                  style={styles.profilePicBig}
               />
               <Text style={{textAlign:'center',backgroundColor:'rgba(107,179,51,0.4)',padding:2,borderBottomLeftRadius:10,borderBottomRightRadius:10}}>Last Month</Text>  
               </View>
               
               <TouchableHighlight onPress={()=>{
                  setShow(true)
                  setTimeout(() => {
                     setShow(null)
                  }, 5000);
               }} 
               underlayColor={'#DDDDDD'}
               style={[styles.profilePicBig,{backgroundColor: 'rgba(107,179,51,0.2)',}]}>
                <View>
                   
                   {show==true?
                   <Animatable.View animation={show==true?'fadeIn':'fadeOut'} style={[styles.profilePicBig,{position:'absolute',top:0,zIndex:3,justifyContent: 'space-evenly',alignItems:'center',backgroundColor:'rgba(107,107,107,0.4)'}]}>
                        <TouchableHighlight 
                        // onPress={()=>openPicker()}
                        onPress={()=>onCameraPress()} 
 
                        style={{alignSelf:'center',backgroundColor:'rgba(255,255,255,0.5)',padding:10,borderRadius:50}}>
                           <Ionicons 
                              name="camera" 
                              size={30} 
                              color="white" 
                              style={{zIndex:2}}
                              // onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
                           />
                        </TouchableHighlight>
                        
                        <TouchableHighlight 
                        // onPress={()=>selectFile()}
                        onPress={()=>onGalleryPress()}
                        style={{alignSelf:'center',backgroundColor:'rgba(255,255,255,0.5)',padding:10,borderRadius:50}}>
                           <Ionicons 
                              name="image-sharp" 
                              size={30} 
                              color="white" 
                              style={{zIndex:2}}
                              // onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
                           />
                        </TouchableHighlight>
                   </Animatable.View>
                   :
                   null
                  }

                  {
                     filePath=={}?
                     <Image 
                        source={require('../assets/profile.png')} 
                        style={styles.profilePicBig}
                     />
               :
                     <Image 
                        // source={{uri:filePath}}
                        source={require('../assets/profile.png')} 
                        style={styles.profilePicBig2}
                     />
                  }
                 
               <Text style={{textAlign:'center',backgroundColor:'rgba(107,179,51,0.4)',padding:2,borderBottomLeftRadius:10,borderBottomRightRadius:10}}>This Month</Text>   
               </View>
               </TouchableHighlight>
               
               {/* <TouchableOpacity
                  activeOpacity={0.5}
                  style={styles.buttonStyle}
                  onPress={()=>openPicker()}>
                  <Text style={styles.textStyle}>
                     Choose Image
                  </Text>
               </TouchableOpacity> */}
               </View>

            </RBSheet>


          </View>
        
      </View>
    );
  }