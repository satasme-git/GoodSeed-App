import {StyleSheet, Dimensions, Platform} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    height: windowHeight/10,
    width:windowWidth,
    backgroundColor: 'white',
    elevation:5,
    position:'absolute',
    top:0,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-start',
    paddingLeft:10,
    zIndex:1,
    padding:10
  },
  innerContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop:windowHeight/8,
    padding:10
  },
  headerText: {
    fontSize: 20,
  },
  inputText:{
    // backgroundColor:'#8aa8ae',
    height:40,
    marginLeft:10,
    width:windowWidth-40,
    borderRadius:20,
    paddingLeft:50,
    textAlignVertical:'center',
    borderColor:'gray',
    borderBottomWidth:1,
    margin:5
  },
  loginBoard:{
    backgroundColor:'white',
    height:'auto',
    marginLeft:0,
    width:windowWidth-20,
    borderRadius:5,
    textAlignVertical:'center',
    paddingVertical:10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    zIndex:2, 
    paddingTop:30
  },
  loginpic:{
    width:65,
    height:65,
    backgroundColor:'white',
    borderRadius:50,
    alignItems:'center',
    justifyContent:'flex-start',
    alignSelf:'center',
    marginBottom:-32.5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
    elevation: 5,
    zIndex:1
  },
  orBar:{
    height:0.7,
    width:windowWidth/3,
    backgroundColor:'gray',
  },
  linearGradient:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
});

const buttons = StyleSheet.create({
  menu: {
    position: 'absolute',
    left: 10,
    top: 10,
    zIndex: 1,
    elevation:4,
  },
  login: {
    backgroundColor:'#255c43',
    zIndex: 1,
    paddingHorizontal:10,
    paddingVertical:5,
    // width:windowWidth-40,
    marginTop:10,
    marginLeft:10,
    alignItems:'center',
    borderRadius:5,
    alignSelf:'center'
  },
  text: {
    color:'white',
    fontSize: 15,
  },
});

export {styles, buttons};
