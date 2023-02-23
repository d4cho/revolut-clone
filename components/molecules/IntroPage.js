import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';

const IntroPage = ({
    heading,
    subHeading,
    nextPageHandler,
    prevPageHandler,
}) => {
    return (
        <View style={styles.container}>
            <Text>{heading}</Text>
            <Text>{subHeading}</Text>
            <Pressable
                onPress={nextPageHandler}
                style={{ width: '100%', height: '30%' }}
            >
                <Text style={{ fontSize: 100 }}>next</Text>
            </Pressable>
            <Pressable
                onPress={prevPageHandler}
                style={{ width: '100%', height: '30%' }}
            >
                <Text style={{ fontSize: 100 }}>prev</Text>
            </Pressable>
        </View>
    );
};

export default IntroPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
    },
});
