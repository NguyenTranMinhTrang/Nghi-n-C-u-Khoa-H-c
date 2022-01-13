import React, { useRef, useEffect, useState } from 'react';
import { Animated, Text, View, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import takePhoto from '../components/camera';
import pickImage from '../components/useImageFromLibrary';
import axios from 'axios';
const SERVER_URL = 'http://192.168.1.104:3000/images';
const FormData = require('form-data');

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


export default function ShowChoose() {
  const [photo, setPhoto] = useState(null);

  const handlePickImage = () => pickImage(result => setPhoto(result));
  const handleTakePhoto = () => takePhoto(result => setPhoto(result));
  const handleUploadPhoto = () => {
    if (photo != null) {
      const datas = new FormData();

      datas.append('images', {
        name: photo.fileName,
        type: photo.type,
        uri:
          Platform.OS === 'android' ? photo.uri : photo.uri.replace('file://', ''),
      });

      axios({
        method: "POST",
        url: SERVER_URL,
        headers: {
          "Content-Type": "multipart/form-data",
        },
        datas,
      }).then(res => console.log(datas))
        .catch(res => console.log(res))
    } else {
      alert('Please select or take photo first');
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
        onPress={handleTakePhoto}
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
        onPress={handleUploadPhoto}
      >
        <Text style={{ fontSize: 20 }}>Upload Photo</Text>
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
        onPress={handlePickImage}
      >
        <Text style={{ fontSize: 20 }}>Upload Image From Library</Text>
      </TouchableOpacity>
    </Show>
  );
}
