import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HeaderBackButton = ({ onPress, size, color }) => {
    return (
        <Pressable onPress={onPress}>
            <Ionicons
                name='arrow-back'
                size={size || 24}
                color={color || 'white'}
            />
        </Pressable>
    );
};

export default HeaderBackButton;

const styles = StyleSheet.create({});
