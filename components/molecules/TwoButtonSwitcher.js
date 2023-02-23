import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const TwoButtonSwitcher = () => {
    const [selectedOption, setSelectedOption] = useState(1);

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
                onPress={() => setSelectedOption(option)}
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
            {renderButton('Phone number', 1)}
            {renderButton('Email', 2)}
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
