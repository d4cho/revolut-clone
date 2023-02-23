import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';

const Button = ({ text, handlePress, theme }) => {
    if (theme === 'dark') {
        return (
            <Pressable
                onPress={handlePress}
                style={[styles.button, styles.buttonDark]}
            >
                <Text style={styles.textDark}>{text}</Text>
            </Pressable>
        );
    }

    return (
        <Pressable
            onPress={handlePress}
            style={[styles.button, styles.buttonLight]}
        >
            <Text style={styles.textLight}>{text}</Text>
        </Pressable>
    );
};

export default Button;

const styles = StyleSheet.create({
    button: {
        width: 160,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
    },
    buttonDark: {
        backgroundColor: '#000',
    },
    textDark: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonLight: {
        backgroundColor: '#fff',
    },
    textLight: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
