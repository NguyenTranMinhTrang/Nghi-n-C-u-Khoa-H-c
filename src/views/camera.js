import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Image, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

export default function Camera() {
    const [image, setImage] = useState(null);
    

    /* const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    }; */

    const AskForPermission = async () => {
        const result = await Permissions.askAsync(Permissions.CAMERA);
        if (result.status !== 'granted') {
            alert('no permissions to access camera!', [{ text: 'ok' }]);
            return false;
        }

        return true;
    }

    takePhoto = async () => {
        const hasPermission = await AskForPermission();
        if (!hasPermission) {
            return;
        }
        else {
            let img = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
				allowsEditing: false,
				aspect: [3, 3],
				quality: 1,
				base64: true,
            })

            

            if (!img.cancelled) {
                setImage(img.uri);
            }
        }
    }

   
    return (
        <View style={{ height: '70%', width: 75, borderColor: 'black', borderRadius: 40, borderWidth: 2, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }} onPress={takePhoto} >
                <Image source={require('../images/imgHome/camera.png')}
                    style={{ height: '80%', width: 50 }}
                    resizeMode='stretch'
                />
            </TouchableOpacity>
            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
        </View>
    )
}