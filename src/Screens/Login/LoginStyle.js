const { StyleSheet } = require("react-native");

export const loginStyles = StyleSheet.create({
    formWrapper: {
      height: 400,
      width: '80%',
      backgroundColor: 'white',
      padding: 20,
      elevation: 5,
    },
    inputBox:{
      backgroundColor: 'white',fontSize:25,color:'black',margin:20,fontWeight:'500',height:70
    },
    loginBtn:{
      backgroundColor:'#fe9402',
      width:200,
      height:60,
      alignSelf:'center',
      padding:10,
      borderRadius:8,
      justifyContent:'center',marginTop:20
    },
    loginTxt:{
      color:'white',
      textAlign:'center',
      fontSize:25,
      fontWeight:'600'
    }
  });