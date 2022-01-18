import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Home from './home';

const Drawer = createDrawerNavigator();

export default function Menu() {
  return (
    <Drawer.Navigator initialRouteName='Home' screenOptions={{headerShown: false, drawerPosition: 'right',}}>
      <Drawer.Screen name='Home' component={Home}/>
    </Drawer.Navigator>
  )
}

