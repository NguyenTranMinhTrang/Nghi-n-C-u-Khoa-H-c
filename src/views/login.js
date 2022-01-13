import {
    StyleSheet,
    Text,
    View,
    TextInput,
    SafeAreaView,
    Dimensions,
    Image,
    TouchableOpacity
} from 'react-native';
import React, { Component, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Button from '../components/button';

const windowHeight = Dimensions.get('window').height;

export default function Login({ navigation }) {
    const [visable, setVisable] = useState(true);
    return (
        <View style={{ width: '100%', height: '100%', backgroundColor: 'powderblue' }} >
            <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
                <View style={{ width: '40%', height: '20%', backgroundColor: 'powderblue', marginTop: 0.05 * windowHeight, alignItems: 'center', justifyContent: 'center' }} >
                    <Image source={require('../images/imgStart/appIcon.png')}
                        style={{ height: '100%', width: '100%', opacity: 1 }}
                        resizeMode='stretch'
                    />
                </View>

                <View style={{ height: '40%', width: '85%', marginTop: 20 }}>
                    {/* Username Input */}
                    <View style={[styles.input, styles.spacer10]}>
                        <TextInput style={styles.text} placeholder='UserName' />
                    </View>

                    {/* Password */}
                    <View style={[styles.input, styles.spacer20]}>
                        <TextInput style={[styles.text, styles.inputPassword]} placeholder='Password' secureTextEntry={visable && true} />
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
                    <Button onPress={() => navigation.navigate('Home')}>
                        <Text style={styles.buttonText}>Login</Text>
                    </Button>
                </View>

                {/* Button Register */}
                <Button style={styles.buttonRegister}>
                    <Text style={styles.buttonText}>Create an account</Text>
                </Button>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: 'white',
        borderWidth: 2,
        height: '25%',
        width: '100%',
        borderRadius: 25,
        alignItems: 'center',
        borderColor: 'darkcyan',
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

    buttonText: {
        fontSize: 25,
        color: 'black',
        fontWeight: 'bold',
    },

    buttonRegister: {
        height: '10%',
        width: '85%',
        marginTop: 0.15 * windowHeight,
    }
})