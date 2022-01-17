import {
    StyleSheet,
    Text,
    View,
    TextInput,
    SafeAreaView,
    Dimensions,
    Image,
    TouchableOpacity,
    KeyboardAvoidingView
} from 'react-native';
import React, { Component, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
import Button from '../components/button';

const windowHeight = Dimensions.get('window').height;

export default function Login({ navigation }) {
    const [visable, setVisable] = useState(true);
    return (
        <View style={{ width: '100%', height: '100%', backgroundColor: '#FF82AC' }} >
            <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
                <Text style={styles.header}>Welcome to our app!</Text>
                <View style={styles.container}>
                    <KeyboardAvoidingView enabled style={{ height: '50%', width: '85%', marginTop: 60 }}>
                        <View style={{ height: '100%', width: '100%' }}>
                            {/* Username Input */}
                            <Text style={styles.title}>Email</Text>
                            <View style={[styles.input, styles.spacer10]}>
                                <FontAwesome name="user" size={30} color="black" style={{marginRight: 10}} />
                                <TextInput style={styles.text} />
                            </View>

                            {/* Password */}
                            <Text style={styles.title}>Password</Text>
                            <View style={[styles.input, styles.spacer20]}>
                                <FontAwesome name="lock" size={30} color="black" style={{marginRight: 10}}/>
                                <TextInput style={[styles.text, styles.inputPassword]} secureTextEntry={visable && true} />
                                <TouchableOpacity
                                    style={{ height: '100%', width: 50, position: 'absolute', right: 0, alignItems: 'center', justifyContent: 'center' }}
                                    onPress={() => {
                                        setVisable(!visable);
                                    }}
                                >
                                    {visable === false ? <Ionicons name="md-eye" size={40} color="black" />    
                                        : <Ionicons name="md-eye-off" size={40} color="black" />
                                    }
                                </TouchableOpacity>
                            </View>

                            {/* Button Login */}
                            <View style={styles.button}>
                                <Button onPress={() => navigation.navigate('Home')}>
                                    <Text style={styles.buttonText}>Login</Text>
                                </Button>
                            </View>

                        </View>
                    </KeyboardAvoidingView>


                    {/* Sign in */}
                    <View style={{ marginTop: '25%', fontSize: 15, flexDirection: 'row' }}>
                        <Text style={{ fontWeight: '300' }}>DON'T HAVE ANY ACCOUNT ? </Text>
                        <TouchableOpacity>
                            <Text style={{ fontWeight: '500' }}> SIGN UP</Text>
                        </TouchableOpacity>
                    </View>
                </View>



            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '80%',
        width: '100%',
        backgroundColor: 'white',
        marginTop: 0.2 * windowHeight,
        alignItems: 'center',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25
    },

    input: {
        backgroundColor: 'white',
        borderBottomWidth: 2,
        height: '20%',
        width: '100%',
        alignItems: 'center',
        borderEndColor: 'black',
        flexDirection: 'row'
    },

    title: {
        fontSize: 20,
        fontWeight: '300'
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
        width: '100%',
        height: '25%',
        backgroundColor: '#FF82AC',
        marginTop: 40
    },

    buttonText: {
        fontSize: 20,
        color: 'white',
        fontWeight: '300',
    },

    header: {
        position: 'absolute',
        top: 100,
        left: 30,
        fontSize: 27,
        color: 'white',
        fontWeight: '300'
    }

})