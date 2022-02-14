import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../src/views/home';

const Draw = createDrawerNavigator();

export default function Drawer() {
  return (
    <Draw.Navigator initialRouteName='Home' screenOptions={{ headerShown: false, drawerPosition: 'right', }}>
      <Draw.Screen name='Home' component={Home} />
    </Draw.Navigator>
  )
}

