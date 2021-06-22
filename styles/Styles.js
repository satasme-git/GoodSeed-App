import {StyleSheet, Dimensions, Platform} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    height: windowHeight / 10,
    width: windowWidth,
    backgroundColor: 'white',
    elevation: 5,
    position: 'absolute',
    top: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 10,
    zIndex: 1,
    padding: 10,
  },
  innerContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: windowHeight / 8,
    padding: 10,
  },
  headerText: {
    fontSize: 20,
  },
  inputText: {
    // backgroundColor:'#8aa8ae',
    height: 40,
    marginLeft: 10,
    width: windowWidth - 40,
    borderRadius: 20,
    paddingLeft: 50,
    textAlignVertical: 'center',
    borderColor: 'gray',
    borderBottomWidth: 1,
    margin: 5,
  },
  loginBoard: {
    backgroundColor: 'white',
    height: 'auto',
    marginLeft: 0,
    width: windowWidth - 20,
    borderRadius: 5,
    textAlignVertical: 'center',
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    zIndex: 2,
    paddingTop: 30,
  },
  loginpic: {
    width: 65,
    height: 65,
    backgroundColor: 'white',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'flex-start',
    alignSelf: 'center',
    marginBottom: -32.5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    zIndex: 1,
  },
  orBar: {
    height: 0.7,
    width: windowWidth / 3,
    backgroundColor: 'gray',
  },
  linearGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  /////////////////////// chamil ////////////////////
  textinputcontainer: {
    backgroundColor: 'transparent',
    width: windowWidth - 30,
    textAlignVertical: 'center',
  },
  textStyle: {
    backgroundColor: 'white',
    marginTop: 3,
    marginBottom: 10,
    elevation: 7,
    shadowColor: 'gray',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.01,
    shadowRadius: 5,
    borderRadius: 5,
    paddingLeft: 10,
  },
  //////
  headerCotainer: {
    width: '100%',

    paddingHorizontal: 14,
    paddingTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#4b937c',
  },
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerImage: {
    width: 20,
    height: 20,
  },
  headerText: {
    color: 'white',
    paddingLeft: 20,
    fontSize: 20,
    fontWeight: 'normal',
  },
  titleStyle: {
    color: 'white',
    fontWeight: 'normal',
    padding: 0,
    fontSize: 30,
    // marginTop:-15,
    marginBottom: -10,
    // backgroundColor: 'rgba(0,0,0,0.6)'
  },
  tabTextContainerStyle: {
    backgroundColor: 'transparent',
    borderRadius: 18,
  },
  tabTextContainerActiveStyle: {
    backgroundColor: '#00c853',
  },
  tabTextStyle: {
    fontSize: 15,
    fontWeight: 'normal',
    lineHeight: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    color: 'white',
  },
  tabTextActiveStyle: {
    fontSize: 15,
    fontWeight: 'normal',
    lineHeight: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    color: 'white',
  },
  tabWrapperStyle: {
    paddingVertical: 10,
  },
  tabsContainerStyle: {
    paddingHorizontal: 10,
  },
  contentContiner: {
    // height: windowHeight,
    padding: 10,
  },
  contentText: {
    fontSize: 16,
  },
  //////////////
  cardcontainer: {
    marginTop: 12,
    shadowColor: 'rgb(35,35,35)',
    shadowOffset: {
      width: 2,
      heght: 2,
    },
    shadowRadius: 40,
    shadowOpacity: 0.08,
    borderWidth: 2,
    borderColor: 'rgb(246,245,248)',
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 24,
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 8,
  },
  labelTextContainer: {
    backgroundColor: 'rgb(240,240,240)',
    borderRadius: 16,
    color: 'rgb(25,25,25)',
  },
  labelText: {
    fontSize: 13,
    lineHeight: 16,
    color: 'black',
    paddingHorizontal: 8,
    paddingVertical: 4,
    fontFamily: 'AvertaStd-Semibold',
    letterSpacing: 0.8,
  },
  mainText: {
    fontSize: 20,
    lineHeight: 24,
    color: 'black',
    paddingTop: 8,
    paddingBottom: 20,
    fontFamily: 'AvertaStd-Semibold',
  },
  radioButtonText: {
    paddingVertical: 8,
    fontSize: 12,
    color: 'gray',
  },
});

const buttons = StyleSheet.create({
  menu: {
    position: 'absolute',
    left: 10,
    top: 10,
    zIndex: 1,
    elevation: 4,
  },
  login: {
    backgroundColor: '#255c43',
    zIndex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    // width:windowWidth-40,
    marginTop: 10,
    marginLeft: 10,
    alignItems: 'center',
    borderRadius: 5,
    alignSelf: 'center',
  },
  text: {
    color: 'white',
    fontSize: 15,
  },
});

export {styles, buttons};
