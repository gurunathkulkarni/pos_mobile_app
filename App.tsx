/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import 'react-native-gesture-handler';
// navigation imports
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { route } from './src/Utils/Routes';
import Dashboard from './src/Screens/Dashboard';
import Splash from './src/Screens/Splash';
// creating stack navigator
const Stack = createStackNavigator();
function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [orientation, setOrientation] = useState("LANDSCAPE");


  useEffect(() => {
    Dimensions.addEventListener('change', ({ window: { width, height } }) => {
      if (width < height) {
        setOrientation('PORTRAIT');
      } else {
        setOrientation("LANDSCAPE")

      }
    })

  

  }, []);
  useEffect(()=>{
    const height = Dimensions.get('window').height
    const width = Dimensions.get('window').width
    if (width < height) {
      setOrientation('PORTRAIT');
    } else {
      setOrientation("LANDSCAPE")

    }
  })

  console.log("TOTAL", orientation);
  return (
     <NavigationContainer>
          <Stack.Navigator>
            {route.map(data => {
              return (
                <Stack.Screen
                  options={data.option}
                  name={data.name}
                  component={data.component}
                />
              );
            })}
          </Stack.Navigator>
        </NavigationContainer>
    // <SafeAreaView >
    //   <StatusBar
    //     barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        
    //   />
    //   {orientation === "PORTRAIT" ? (
    //     // <NavigationContainer>
    //     //   <Stack.Navigator>
    //     //     {route.map(data => {
    //     //       return (
    //     //         <Stack.Screen
    //     //           options={data.option}
    //     //           name={data.name}
    //     //           component={data.component}
    //     //         />
    //     //       );
    //     //     })}
    //     //   </Stack.Navigator>
    //     // </NavigationContainer>
    //     // null
    //     <Splash/>
    //   ) : (
    //     <Dashboard />
    //   )}


    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
