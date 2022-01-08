import React, { useRef, useEffect, useState } from 'react';
import { Animated, Text, View, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

const Show = (props) => {
  const transition = useRef(new Animated.Value(200)).current;
  React.useEffect(() => {
    Animated.spring(transition, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: false
    }).start();
  }, [transition]);

  return (
    <Animated.View
      style={{
        ...props.style,
        transform: [{ translateY: transition }],
      }}>
      {props.children}
    </Animated.View>
  );
};

export default function ShowChose() {
  const [image, setImage] = useState(null);
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

      console.log(img.uri);

      if (!img.cancelled) {
        setImage(img.uri);
      }
    }
  }

  const pickImage = async () => {
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
    };
  
  return (
    <Show
      style={{
        width: '100%',
        height: 200,
        backgroundColor: 'white',
        justifyContent: 'flex-end',
        borderRadius: 15,
      }}>
      <TouchableOpacity
        style={{
          width: '100%',
          height: '40%',
          borderTopColor: '#ccc',
          borderTopWidth: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={takePhoto}  
      >
        <Text style={{ fontSize: 20 }}>Use Camera</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          width: '100%',
          height: '40%',
          borderTopColor: '#ccc',
          borderTopWidth: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={pickImage}
        >
        <Text style={{ fontSize: 20 }}>Upload Image From Librari</Text>
      </TouchableOpacity>
    </Show>
  );
}
