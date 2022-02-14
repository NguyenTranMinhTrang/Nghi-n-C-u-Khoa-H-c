import {
    StyleSheet,
    Text,
    View,
    TextInput,
    SafeAreaView,
    TouchableOpacity,
    KeyboardAvoidingView,
    Image,
    Dimensions
} from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Button from '../components/button';

const windowHeight = Dimensions.get('window').height;

export default function Login({ navigation }) {
    const [visable, setVisable] = useState(true);
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
            <View style={{ height: '40%', width: '100%' }}>
                <Image
                    style={{ height: '100%', width: '100%' }}
                    source={require('../images/imgLogin/backgroundLogin.png')}
                    resizeMode='cover'
                />
            </View>

            <View style={styles.container}>
                <KeyboardAvoidingView enabled style={{ height: '60%', width: '85%', marginTop: 20 }}>
                    <View style={{ height: '100%', width: '100%' }}>
                        {/* Username Input */}
                        <Text style={styles.title}>Email</Text>
                        <View style={[styles.input, styles.spacer10]}>
                            <FontAwesome name="user" size={30} color="black" style={{ marginRight: 10 }} />
                            <TextInput style={styles.text} />
                        </View>

                        {/* Password */}
                        <Text style={styles.title}>Password</Text>
                        <View style={[styles.input, styles.spacer20]}>
                            <FontAwesome name="lock" size={33} color="black" style={{ marginRight: 10 }} />
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
                            <Button onPress={() => navigation.navigate('Drawer')}>
                                <Text style={styles.buttonText}>Login</Text>
                            </Button>
                        </View>

                    </View>
                </KeyboardAvoidingView>


                {/* Sign in */}
                <View style={{ marginTop: '20%', fontSize: 15, flexDirection: 'row' }}>
                    <Text style={{ fontWeight: '300' }}>DON'T HAVE ANY ACCOUNT ? </Text>
                    <TouchableOpacity>
                        <Text style={{ fontWeight: '500' }}> SIGN UP</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        height: '60%',
        width: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25
    },

    input: {
        backgroundColor: 'white',
        borderBottomWidth: 2,
        height: '18%',
        width: '100%',
        alignItems: 'center',
        borderEndColor: 'black',
        flexDirection: 'row'
    },

    title: {
        fontSize: 19,
        fontWeight: '400'
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
        height: '20%',
        backgroundColor: 'black',
        marginTop: 40
    },

    buttonText: {
        fontSize: 20,
        color: 'white',
        fontWeight: '300',
    },

    buttonRegister: {
        height: '10%',
        width: '85%',
        marginTop: 0.15 * windowHeight,
    }
})