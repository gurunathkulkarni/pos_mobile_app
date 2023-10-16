import { View, Text } from 'react-native'
import React from 'react'
import { ActivityIndicator, Dialog, MD2Colors } from 'react-native-paper'

export default function Loader() {

  const hideDialog = () => setVisible(false);
  return (
    <View>
      <Dialog visible={true} >
      <ActivityIndicator animating={true} color={MD2Colors.red800} />
          </Dialog>
    </View>
  )
}