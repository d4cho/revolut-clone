import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Animated, View, Text } from 'react-native';

const ProgressBar = ({ duration, start, animationDone }) => {
    // Initial value for width: 0
    const animation = useRef(new Animated.Value(0)).current;

    const inputRange = [0, 100];
    const outputRange = ['0%', '100%'];

    const progressToString = animation.interpolate({ inputRange, outputRange });

    useEffect(() => {
        animation.setValue(0);

        if (start) {
            Animated.timing(animation, {
                toValue: 100,
                duration: duration,
                useNativeDriver: false,
            }).start();
        }
    }, [animation, start]);

    return (
        <View style={[styles.container]}>
            <Animated.View
                style={[
                    styles.node,
                    {
                        width: animationDone ? '100%' : progressToString,
                    },
                ]}
            ></Animated.View>
        </View>
    );
};

export default ProgressBar;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'grey',
        flex: 1,
        height: 3,
        marginLeft: 2,
        marginRight: 2,
        borderRadius: 10,
    },
    node: {
        backgroundColor: '#fff',
        width: '100%',
        height: 3,
        borderRadius: 10,
    },
});
