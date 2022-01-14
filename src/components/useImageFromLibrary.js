import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

const AskForPermission = async () => {
    const result = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (result.granted === false) {
        alert('no permissions to access media library! Please set the permission in your device.', [{ text: 'ok' }]);
        return false;
    }
    return true;
}


const pickImage = async (cb) => {
    const hasPermission = await AskForPermission();
    if (!hasPermission) {
        return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
    });


    if (!result.cancelled) {
        cb(result);
    }
};

export default pickImage;