import React from "react";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./login";
import Start from "./start";
import Drawer from "../../navigation/drawer";
const Stack = createNativeStackNavigator();

export default function RootComponent() {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Start" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Start" component={Start} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Drawer" component={Drawer} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}