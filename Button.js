import { StyleSheet, SafeAreaView, TouchableHighlight, View ,Text} from 'react-native';
import { borderColor, color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function Button() {

    return (
        <SafeAreaView style={styles.container}>
            <TouchableHighlight underlayColor="while" >
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Press Me</Text>
                </View>
            </TouchableHighlight>
        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },

    button: {
        marginBottom: 30,
        width: 260,
        alignItems: 'center',
        backgroundColor: '#2196F3',
        borderColor : 'black',
        borderRadius: 10,
        borderWidth: 1,
    },

    buttonText: {
        padding: 20,
        color: 'white'
    },
});