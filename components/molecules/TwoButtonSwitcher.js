import React, { useState, useEffect } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const TwoButtonSwitcher = ({ defaultOption, refreshFunction }) => {
    const [selectedOption, setSelectedOption] = useState(0);

    useEffect(() => {
        if (defaultOption || defaultOption === 0) {
            setSelectedOption(defaultOption);
        }
    }, [defaultOption]);

    const handlePress = (option) => {
        refreshFunction(option);
    };

    const renderButton = (text, option) => {
        return (
            <Pressable
                style={[
                    styles.btn,
                    {
                        backgroundColor:
                            selectedOption === option ? '#777777' : '#222222',
                    },
                ]}
                onPress={() => handlePress(option)}
            >
                <Text
                    style={[
                        styles.btnText,
                        {
                            color:
                                selectedOption === option ? '#fff' : '#777777',
                        },
                    ]}
                >
                    {text}
                </Text>
            </Pressable>
        );
    };

    return (
        <View style={styles.container}>
            {renderButton('Phone number', 0)}
            {renderButton('Email', 1)}
        </View>
    );
};

export default TwoButtonSwitcher;

const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        width: '100%',
        height: 35,
        backgroundColor: '#222222',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    btn: {
        borderRadius: 8,
        width: '49%',
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});
