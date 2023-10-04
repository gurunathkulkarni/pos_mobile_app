import { useEffect } from 'react';
import { View, Text, Image } from 'react-native'

export default function Splash(props) {
  console.log("SPLASH");
  
  useEffect(()=>{
    setTimeout(()=>{
props.navigation.replace('Login')

    },2000)
  })
  return (
    <View style={{backgroundColor:'red'}}>
     <Image style={{height:'100%',width:'100%'}} source ={require('../Assets/splash_logo.jpeg')} />
     <Text>WELCOME to splash</Text>
    </View>
  )
}


// demo
// import React, { Component } from 'react';
// import { Text, View, StyleSheet } from 'react-native';

// import SwipeUpDown from 'react-native-swipe-up-down';
// import CategoryList from './CategoryList';

// export default class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
     
//      <SwipeUpDown

// 	itemFull={(hide) => <CategoryList hide={hide} />}
// 	onShowMini={() => console.log('mini')}
// 	onShowFull={() => console.log('full')}
// 	animation="spring"
// 	swipeHeight={10}
// 	// extraMarginTop={100}
// 	iconColor='yellow'
// 	iconSize={30}
// 	style={{ backgroundColor: 'red', }} // style for swipe
// />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#ecf0f1',
//   },
//   paragraph: {
//     margin: 24,
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     color: '#34495e',
//   },
// });
