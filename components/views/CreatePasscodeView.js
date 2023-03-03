import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Numpad from '../molecules/Numpad';

const CreatePasscodeView = ({ navigation }) => {
    const [passcode, setPasscode] = useState(['', '', '', '']);

    useEffect(() => {
        const isPasscode = () => {
            for (const code of passcode) {
                if (!code) return false;
            }
            return true;
        };

        if (isPasscode()) {
            navigation.navigate('ConfirmPasscodeView', {
                enteredPasscode: passcode,
            });
            setPasscode(['', '', '', '']);
        }
    }, [passcode]);

    const handleNumPress = (num) => {
        let newPasscode = [...passcode];

        if (num === 'delete') {
            for (let i = newPasscode.length - 1; i >= 0; i--) {
                if (newPasscode[i]) {
                    newPasscode[i] = '';
                    break;
                }
            }
        } else {
            for (let i = 0; i < newPasscode.length; i++) {
                if (!newPasscode[i]) {
                    newPasscode[i] = num;
                    break;
                }
            }
        }

        setPasscode(newPasscode);
    };

    return (
        <View style={styles.container}>
            <View style={styles.topWrapper}>
                <Text style={styles.header}>Create passcode</Text>

                <View style={{ flexDirection: 'row' }}>
                    {passcode.map((item, idx) => {
                        return (
                            <Text key={idx} style={styles.header}>
                                {item}
                            </Text>
                        );
                    })}
                </View>

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
                <View style={styles.numpadWrapper}>
                    <Numpad
                        handleNumPress={handleNumPress}
                        showDelete={passcode.join('')}
                    />
                </View>
            </View>
        </View>
    );
};

export default CreatePasscodeView;

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
    numpadWrapper: {
        backgroundColor: '#000',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
