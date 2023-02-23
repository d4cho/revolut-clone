import React, { useState } from 'react';
import {
    KeyboardAvoidingView,
    Pressable,
    StyleSheet,
    Text,
    View,
    TextInput,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import TwoButtonSwitcher from '../molecules/TwoButtonSwitcher';

const LoginView = ({ navigation }) => {
    const [isValidPhoneNum, setIsValidPhoneNum] = useState(false);
    const [phoneNum, setPhoneNum] = useState('');

    const handlePhoneNumChange = (text) => {
        setPhoneNum(text);
        if (text.length === 10) {
            setIsValidPhoneNum(true);
        } else {
            setIsValidPhoneNum(false);
        }
    };

    return (
        <KeyboardAvoidingView style={styles.container}>
            <View>
                <Text style={styles.header}>Log in to Revolut</Text>
                <View style={styles.switcherWrapper}>
                    <TwoButtonSwitcher />
                </View>

                <View style={styles.inputWrapper}>
                    <Pressable
                        style={styles.country}
                        onPress={() => {
                            navigation.navigate('CountryPick');
                        }}
                    >
                        <Text style={styles.countryText}>+1</Text>
                    </Pressable>
                    <TextInput
                        style={styles.phoneNumInput}
                        onChangeText={handlePhoneNumChange}
                        value={phoneNum}
                        placeholder='Enter your phone'
                        placeholderTextColor='#fff'
                        keyboardType='numeric'
                        textContentType='telephoneNumber'
                    />
                </View>
                <Text style={styles.lostAccess}>
                    Lost access to my phone number
                </Text>
            </View>

            <View
                style={[
                    styles.continueBtn,
                    {
                        backgroundColor: isValidPhoneNum
                            ? '#0566E9'
                            : '#010048',
                    },
                ]}
            >
                <Pressable
                    onPress={() => {
                        alert('go to passcode view');
                    }}
                    disabled={!isValidPhoneNum}
                >
                    <Text
                        style={[
                            styles.continueBtnText,
                            {
                                color: isValidPhoneNum ? '#fff' : '#777777',
                            },
                        ]}
                    >
                        Continue
                    </Text>
                </Pressable>
            </View>

            <StatusBar style='light' />
        </KeyboardAvoidingView>
    );
};

export default LoginView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        padding: 10,
        paddingBottom: 50,
        justifyContent: 'space-between',
    },
    header: {
        color: '#fff',
        fontSize: 35,
        fontWeight: 'bold',
    },
    switcherWrapper: {
        marginTop: 20,
    },
    inputWrapper: {
        marginTop: 20,
        flexDirection: 'row',
    },
    country: {
        width: 80,
        marginRight: 10,
        backgroundColor: '#222222',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    countryText: {
        color: '#fff',
        fontSize: 16,
    },
    phoneNumInput: {
        flex: 1,
        backgroundColor: '#777777',
        color: '#fff',
        fontSize: 16,
        height: 50,
        padding: 10,
        borderRadius: 8,
    },
    lostAccess: {
        marginTop: 20,
        color: '#0566E9',
        fontSize: 14,
    },
    continueBtn: {
        width: '100%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor: '#010048',
    },
    continueBtnText: {
        fontSize: 16,
        color: '#777777',
        fontWeight: 'bold',
    },
});
