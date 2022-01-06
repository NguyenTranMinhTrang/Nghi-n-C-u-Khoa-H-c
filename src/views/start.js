import React, { useRef, useEffect } from 'react';
import { Animated, Text, View, Easing, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



export default function Start ({navigation}) {
  const FadeInView = (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
  
    React.useEffect(() => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 2000,
        easing: Easing.bounce,
        useNativeDriver : false,
      }).start( (finished) => { if (finished.finished) navigation.navigate('Login')});
    }, [fadeAnim]);
  
    return (
      <Animated.View // Special animatable View
        style={{
          ...props.style,
          opacity: fadeAnim,
          height: fadeAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 150]
          }),
          width: fadeAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 150]
          }),
        }}>
        {props.children}
      </Animated.View>
    );
  };  

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'powderblue' }}>
      <FadeInView
        style={{ width: 250, height: 50, backgroundColor: 'white', borderRadius: 90, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={require('../images/imgStart/appIcon.png')}
          style={{ height: '80%', width: '80%' }}
          resizeMode='stretch'
        />
      </FadeInView>
    </View>
  );
};
