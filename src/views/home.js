import {
    Text,
    View,
    ImageBackground,
} from 'react-native';
import React, { useState } from 'react';
import ShowChoose from './showChooseCamera';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function Home({ navigation }) {
    const [isShow, setShow] = useState(false);
    return (
        <ImageBackground source={require('../images/imgHome/lion.jpg')} resizeMode='cover' style={{ flex: 1 }} >
            {isShow ?
                <View style={{ position: 'absolute', bottom: 0, backgroundColor: 'transparent', width: '100%', height: '100%' }} onStartShouldSetResponder={() => setShow(!isShow)}>
                    <ShowChoose />
                </View >
                :
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <View style={{ width: '100%', height: '12%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                        <AntDesign name="left" size={30} color="white" style={{ paddingRight: 10 }} onPress={() => navigation.goBack()} />
                        <Text style={{ fontSize: 26, fontWeight: '300', color: 'white' }}>Back</Text>
                        <Ionicons name="menu" size={40} color="white" style={{ position: 'absolute', right: 0, paddingRight: 5, paddingTop: 2 }} onPress={() => navigation.openDrawer()} />
                    </View>
                    <Text style={{ fontSize: 20, color: 'white', marginTop: '100%', textAlign: 'center' }}>Take a picture to recognize your animal!</Text>
                    <View style={{ width: 80, height: 80, marginTop: 10, borderWidth: 1, borderRadius: 80, borderColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                        <Ionicons name="camera" size={60} color="white" onPress={() => setShow(!isShow)} />
                    </View>
                </View>

            }
        </ImageBackground>
    )
}