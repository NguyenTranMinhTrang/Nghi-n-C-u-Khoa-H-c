import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, Button, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';
import RootComponent from './src/views/index';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <RootComponent />
  );
}
