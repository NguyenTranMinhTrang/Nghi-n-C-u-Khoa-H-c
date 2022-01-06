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
    TouchableOpacity
} from 'react-native';
import React, { Component, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default function Login({navigation}) {
    const [visable, setVisable] = useState(true);
    return (
        <View style={{ width: '100%', height: '100%' , backgroundColor : 'powderblue'}} >
            <SafeAreaView style={{ flex: 1 , alignItems : 'center'}}>
                <View style={{width : '40%', height : '20%' , backgroundColor : 'powderblue' , marginTop : 0.1*windowHeight, alignItems : 'center', justifyContent: 'center'}} >
                    <Image source={require('../images/imgStart/appIcon.png') } 
                        style={{ height: '100%', width: '100%' , opacity :1}}
                        resizeMode='stretch'
                    />
                </View>

                <View style={{ width: '100%', height: '40%', marginTop: 10, alignItems: 'center' }}>
                    {/* Username */}
                    <View style={styles.input}>
                        <TextInput style={styles.text} placeholder='UserName' />
                    </View>
                    {/* Password */}
                    <View style={styles.inputPassword}>
                        <TextInput style={styles.password} placeholder='Password' secureTextEntry={visable && true} />
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

                    <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('Home')}}>
                        <Text style={{ fontSize: 25, color: 'black', fontWeight: 'bold' }}>Login</Text>
                    </TouchableOpacity>

                </View>

                {/* Button Register */}
                <View style={{ width: '100%', height: '10%', marginTop: 0.15 * windowHeight, alignItems: 'center' }}>
                    <TouchableOpacity style={styles.buttonRegister}>
                        <Text style={{ fontSize: 25, color: 'black', fontWeight: 'bold' }}>Create an account</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>
    )
}


const styles = StyleSheet.create({
    input: {
        backgroundColor: 'white',
        borderWidth: 2,
        height: '25%',
        width: '85%',
        borderRadius: 25,
        alignItems: 'center',
        borderColor: 'darkcyan',
    },

    inputPassword: {
        backgroundColor: 'white',
        borderWidth: 2,
        height: '25%',
        width: '85%',
        borderRadius: 25,
        alignItems: 'center',
        marginTop: 10,
        borderColor: 'darkcyan',

    },

    text: {
        height: '100%',
        width: '80%',
        fontSize: 20
    },

    password: {
        height: '100%',
        width: '80%',
        fontSize: 20,
        paddingRight: 40,

    },

    button: {
        borderWidth: 2,
        height: '25%',
        width: '85%',
        borderRadius: 25,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        borderColor: 'floralwhite',
    },

    buttonRegister: {
        borderWidth: 2,
        height: '100%',
        width: '85%',
        borderRadius: 25,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'floralwhite',
    }
});