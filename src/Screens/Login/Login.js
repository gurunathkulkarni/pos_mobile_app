import { Dimensions, Text, View } from 'react-native'
import React, { Component, useEffect, useState } from 'react'
import Landscape from './Landscape'
import PortraitDesign from './PortraitDesign'
import SwipeUpDown from 'react-native-swipe-up-down';
import CategoryList from '../CategoryList';

export default function Login({navigation}) {
  const [orientation, setOrientation] = useState("LANDSCAPE");


  useEffect(() => {
    Dimensions.addEventListener('change', ({ window: { width, height } }) => {
      if (width < height) {
        setOrientation('PORTRAIT');
      } else {
        setOrientation("LANDSCAPE")

      }
    })
    getInitilOrientation()
  

  }, []);

  const getInitilOrientation =()=>{
    const height = Dimensions.get('window').height
    const width = Dimensions.get('window').width
    if (width < height) {
      setOrientation('PORTRAIT');
    } else {
      setOrientation("LANDSCAPE")

    }
  }


  const onLogin =()=>{
    navigation.replace('Dashboard')
  }
  return (
    <View>
     {orientation ==="LANDSCAPE"?(
      <Landscape onSubmit={onLogin}/>
     ):(
      <PortraitDesign onSubmit={onLogin}/>
     )}
        
    </View>
  )
}
