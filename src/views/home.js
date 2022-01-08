import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TextInput,
    SafeAreaView,
    ImageBackground,
    Dimensions,
    Image,
    TouchableOpacity,
    TouchableHighlight 
} from 'react-native';
import React, { Component, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ShowChose from './showChoseCamera';

export default function Home({ navigation }) {
    const [isShow, setShow] = useState(false);
    return (
        <View style={{ flex: 1}} >
            {isShow ?
                <TouchableOpacity  style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end', backgroundColor: '#ccc' }} onPress={() => setShow(!isShow)}>
                    <ShowChose />
                </TouchableOpacity >
                :
                <View style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ width: '100%', height: '12%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                        <TouchableOpacity style={{ height: '50%', width: 40 }} onPress={() => navigation.goBack()}>
                            <Image source={require('../images/imgHome/goBack.png')}
                                style={{ height: '100%', width: '100%' }}
                                resizeMode='stretch'
                            />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 26, fontWeight: '200' }}>Back</Text>
                    </View>

                    <View style={{ width: '95%', height: '15%', flexDirection: 'row', backgroundColor: 'gainsboro', marginBottom: 0, borderRadius: 25, marginBottom: 5, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ height: '70%', width: 75, borderColor: 'black', borderRadius: 40, borderWidth: 2, justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }} onPress={() => { setShow(!isShow) }}>
                                <Image source={require('../images/imgHome/camera.png')}
                                    style={{ height: '80%', width: 50 }}
                                    resizeMode='stretch'
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            }


        </View>
    )
}