import React from "react";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator, DrawerItemList, DrawerItem } from '@react-navigation/drawer'
import Login from "./login";
import Start from "./start";
import Menu from "./menu";

const Stack = createNativeStackNavigator();

export default function RootComponent() {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Start" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Start" component={Start} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Menu" component={Menu} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}