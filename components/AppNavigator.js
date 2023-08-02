import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Splash from './screen/Splash'

import DAshboad from './screen/DAshboad'
import Gmail from './screen/Gmail'


import Infinite from './scroll/Infinite'
import SignOut from './screen/Signout'


const Stack = createNativeStackNavigator()
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={Splash} name='Splash' options={{ headerShown: false }} />
        <Stack.Screen component={DAshboad} name='dashoard' options={{ headerShown: false }} />
        <Stack.Screen component={Gmail} name='gmail' options={{ headerShown: false }} />
        <Stack.Screen component={SignOut} name='out' options={{ headerShown: false }} />
        <Stack.Screen component={Infinite} name='infinite' options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator