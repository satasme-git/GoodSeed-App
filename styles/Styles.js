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
    fontSize: 17,
  },
});

const buttons = StyleSheet.create({
  menu: {
    position: 'absolute',
    left: 10,
    top: 10,
    zIndex: 1,
    elevation:4,
  },
});

export {styles, buttons};
