import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';

const PhoneCodeInput = ({ code }) => {
    return (
        <View style={styles.container}>
            {Object.keys(code).map((key, idx) => {
                if (idx === 3) {
                    return <View style={styles.dash}></View>;
                }

                return (
                    <View style={styles.inputWrapper}>
                        <TextInput
                            style={styles.input}
                            onChangeText={() => {}}
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
        backgroundColor: 'blue',
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
        backgroundColor: '#777777',
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
