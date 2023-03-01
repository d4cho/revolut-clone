import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const PhoneCodeInput = ({ code, handleChangeCode }) => {
    const [focusedIndex, setFocusedIndex] = useState(0);

    const refs = {
        0: useRef(null),
        1: useRef(null),
        2: useRef(null),
        3: useRef(null),
        4: useRef(null),
        5: useRef(null),
    };

    useEffect(() => {
        refs[0]?.current.focus();
        setFocusedIndex(0);
    }, []);

    const handleChangeText = (text, idx) => {
        if (text.length > 1) {
            refs[idx + 1]?.current.focus();
            setFocusedIndex(idx + 1);
            handleChangeCode(text[1], idx);
            return;
        }

        if (!text) {
            refs[idx - 1]?.current.focus();
            setFocusedIndex(idx - 1);
        } else {
            refs[idx + 1]?.current.focus();
            setFocusedIndex(idx + 1);
        }

        handleChangeCode(text, idx);
    };

    return (
        <View style={styles.container}>
            {Object.keys(code).map((key, idx) => {
                const isFocused = idx == focusedIndex;

                return (
                    <View key={idx} style={styles.inputWrapper}>
                        <TextInput
                            ref={refs[idx]}
                            style={[
                                styles.input,
                                {
                                    backgroundColor: isFocused
                                        ? '#777777'
                                        : '#555555',
                                },
                            ]}
                            onChangeText={(text) => handleChangeText(text, idx)}
                            value={code[key]}
                            placeholderTextColor='#fff'
                            keyboardType='numeric'
                            textContentType='oneTimeCode'
                        />
                    </View>
                );
            })}
        </View>
    );
};

export default PhoneCodeInput;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 40,
        height: 50,
        marginRight: 10,
    },
    input: {
        backgroundColor: '#555555',
        color: '#fff',
        width: '100%',
        height: '100%',
        textAlign: 'center',
        fontSize: 16,
        borderRadius: 8,
    },
    dash: {
        width: 10,
        height: 2,
        marginRight: 10,
        backgroundColor: '#fff',
    },
});
