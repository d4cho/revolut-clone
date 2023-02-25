import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const EnterPasscodeView = () => {
    const [passcode, setPasscode] = useState(['', '', '', '']);

    return (
        <View style={styles.container}>
            <View style={styles.topWrapper}>
                <Text style={styles.header}>Enter passcode</Text>

                <View style={styles.dotsWrapper}>
                    {passcode.map((code, idx) => {
                        return (
                            <View
                                key={idx}
                                style={[
                                    styles.dot,
                                    {
                                        backgroundColor: code
                                            ? '#0566E9'
                                            : '#04017d',
                                    },
                                ]}
                            ></View>
                        );
                    })}
                </View>
            </View>

            <View style={styles.bottomWrapper}>
                <Text style={{ color: '#fff' }}>Keypad</Text>

                <Text style={styles.forgot}>Forgot passcode?</Text>
            </View>
        </View>
    );
};

export default EnterPasscodeView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 50,
    },
    topWrapper: {
        width: '100%',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    bottomWrapper: {
        width: '100%',
        flex: 3,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'blue',
    },
    header: {
        color: '#fff',
        fontSize: 35,
        fontWeight: 'bold',
    },
    dotsWrapper: {
        flexDirection: 'row',
    },
    dot: {
        margin: 15,
        width: 15,
        height: 15,
        borderRadius: '50%',
        backgroundColor: '#04017d',
    },
    forgot: {
        color: '#0566E9',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
