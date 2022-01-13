import React, { Component } from "react";
import { StyleSheet, View, Text, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./login";
import Home from "./home";
import Start from "./start";

const Stack = createNativeStackNavigator();

export default function RootComponent() {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Start" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Start" component={Start} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}