import React, { useRef, useEffect, useState } from 'react';
import { Animated, Text, View, TouchableOpacity, Image } from 'react-native';
import takePhoto from '../components/camera';
import pickImage from '../components/useImageFromLibrary';
import imageAPI from '../api/imageAPI';

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
  //const [image, setImage] = useState(null);

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
        onPress={() => takePhoto(imageAPI.upLoad)}
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
        onPress={() => pickImage(imageAPI.upLoad)}
      >
        <Text style={{ fontSize: 20 }}>Upload Image From Library</Text>
      </TouchableOpacity>
    </Show>
  );
}
