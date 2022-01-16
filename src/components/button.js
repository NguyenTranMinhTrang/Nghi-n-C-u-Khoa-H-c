import React, { Component, useState } from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity
} from 'react-native';

export default function Button({ style, children, ...otherProps }) {
    return (
        <TouchableOpacity style={[styles.button , style]} {...otherProps}>
            {children}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: '25%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'floralwhite',
        borderWidth: 1,
    }
})