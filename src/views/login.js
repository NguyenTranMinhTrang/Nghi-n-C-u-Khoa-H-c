import {
    StyleSheet,
    Text,
    View,
    TextInput,
    SafeAreaView,
    Dimensions,
    Image,
    TouchableOpacity,
    ImageBackground
} from 'react-native';
import React, { Component, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Button from '../components/button';

const windowHeight = Dimensions.get('window').height;

export default function Login({navigation}) {
    const [visable, setVisable] = useState(true);
    return (
        <ImageBackground source={require('../images/imgLogin/background.jpg')} style={{ width: '100%', height: '100%', backgroundColor: 'white' }} >
            <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>

                <View style={{ height: '40%', width: '85%', marginTop: 0.4*windowHeight,  }}>
                    {/* Username Input */}
                    <Text style={styles.title}>Email</Text>
                    <View style={[styles.input, styles.spacer10]}>
                        <Image source={require('../images/imgLogin/user.png')} style={{marginRight : 10}} resizeMode='stretch'/>
                        <TextInput style={styles.text}  />
                    </View>

                    {/* Password */}
                    <Text style={styles.title}>Password</Text>
                    <View style={[styles.input, styles.spacer20]}>
                        <Image source={require('../images/imgLogin/key.png')} style={{marginRight : 10}} resizeMode='stretch'/>
                        <TextInput style={[styles.text, styles.inputPassword]}  secureTextEntry={visable && true} />
                        <TouchableOpacity
                            style={{ height: '100%', width: 50, position: 'absolute', right: 0 }}
                            onPress={() => {
                                setVisable(!visable);
                            }}
                        >
                            {visable === false ? <Image source={require('../images/imgLogin/eyeClose.png')}
                                style={{ height: '100%', width: '100%' }}
                                resizeMode='stretch'
                            /> :
                                <Image source={require('../images/imgLogin/eye.png')}
                                    style={{ height: '100%', width: '100%' }}
                                    resizeMode='stretch'
                                />}
                        </TouchableOpacity>
                    </View>

                    {/* Button Login */}
                    <Button style={styles.button} onPress={() => navigation.navigate('Home')}>
                        <Text style={styles.buttonText}>Login</Text>
                    </Button>
                </View>

                {/* Button Register */}
                
            </SafeAreaView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: 'white',
        borderBottomWidth : 2, 
        height: '20%',
        width: '100%',
        alignItems: 'center',
        borderEndColor : 'black',
        flexDirection : 'row'
    },

    title: {
        fontSize : 20,
    },

    text: {
        height: '100%',
        width: '80%',
        fontSize: 20
    },

    inputPassword: {
        paddingRight: 40,
    },

    spacer10: {
        marginBottom: 10,
    },

    spacer20: {
        marginBottom: 20,
    },

    button: {
        backgroundColor : '#FF82AC',
        marginTop: 30
    },

    buttonText: {
        fontSize: 25,
        color: 'black',
        fontWeight: 'bold',
    },

    
})