import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { View, Text } from 'react-native'
import Details from './Details'
import React from 'react'
import ThucDon from './ThucDon'
import SanPham from './SanPham'
import ItemSanPham from './ItemSanPham'
import Ordered from './Ordered'
const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const MainFoodMenu = () => {
  return (
    <Stack.Navigator initialRouteName='MainMenu' screenOptions={{ headerShown: false }}>
      <Tab.Screen name='MainMenu' component={ThucDon} />
      <Tab.Screen name='Details' component={Details} />
      <Tab.Screen name='SanPham' component={SanPham} />
      <Tab.Screen name='Ordered' component={Ordered} />
    </Stack.Navigator>
  )
}

export default MainFoodMenu
