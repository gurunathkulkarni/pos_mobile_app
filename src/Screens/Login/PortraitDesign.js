import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import { Card, TextInput } from 'react-native-paper';
import { loginStyles } from './LoginStyle';

export default class PortraitDesign extends Component {
  render() {
    const {onSubmit}=this.props
    return (
        <SafeAreaView>
        <View style={styles.mainWrapper}>
          <View style={styles.image}>
          <Image style={{height:'100%',width:'100%'}} source ={require('../../Assets/splash_logo.jpeg')} />
          </View>
          <View style={styles.form}>
          <Card style={loginStyles.formWrapper}>
              <TextInput
                style={loginStyles.inputBox}
                label="Username"
                secureTextEntry
                left={<TextInput.Icon icon="eye" />}
                mode='outlined'
              />
              <TextInput
                style={loginStyles.inputBox}
                label="Password"
                secureTextEntry
                left={<TextInput.Icon icon="eye" />}
                mode='outlined'
              />
              <TouchableOpacity style={loginStyles.loginBtn} onPress={onSubmit}>
                <Text style={loginStyles.loginTxt}>Login</Text>
              </TouchableOpacity>
            </Card>

          </View>
        </View>
      </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
    mainWrapper: {
      height: '100%',
   
    },
    image: {
      flex: 1,
      backgroundColor: 'yellow',
    },
    form: {
      flex: 1,
      backgroundColor: '#1a1c1b',
      justifyContent:'center',
      alignItems:'center',
      
    },
  });