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
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import PhoneCodeInput from '../atoms/PhoneCodeInput';

const PhoneCodeView = ({ route, navigation }) => {
    const { callingCode, phoneNum } = route.params;

    const formatPhoneNum = (num) => {
        const formattedPhoneNum = num.split('');
        formattedPhoneNum.splice(3, 0, '-');
        formattedPhoneNum.splice(7, 0, '-');
        return formattedPhoneNum.join('');
    };

    const [code, setCode] = useState({
        0: '0',
        1: '1',
        2: '2',
        3: '',
        4: '4',
        5: '5',
        6: '6',
    });
    const [isValidCode, setIsValidCode] = useState(false);

    const handlePhoneNumChange = (text) => {
        if (text.length === 10) {
            setIsValidCode(true);
        } else {
            setIsValidCode(false);
        }
    };

    return (
        <GestureHandlerRootView style={styles.container}>
            <KeyboardAvoidingView style={styles.flexContainer}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.header}>6-digit code</Text>
                    <Text style={styles.subHeader}>
                        {`Code sent to +${callingCode} ${formatPhoneNum(
                            phoneNum
                        )} unless you already have an account`}
                    </Text>

                    <View
                        style={{
                            flex: 1,
                        }}
                    >
                        <View style={styles.inputWrapper}>
                            <PhoneCodeInput code={code} />
                        </View>

                        <Text style={styles.resend}>Resend code in 0:15</Text>

                        <Pressable
                            onPress={() => {
                                navigation.navigate('Login', {
                                    screen: 'LoginView',
                                });
                            }}
                        >
                            <Text style={styles.loginLink}>
                                Already have an account? Log in
                            </Text>
                        </Pressable>
                    </View>
                </View>

                {/* Continue Button */}
                <View>
                    <Pressable
                        style={[
                            styles.continueBtn,
                            {
                                backgroundColor: isValidCode
                                    ? '#0566E9'
                                    : '#010048',
                            },
                        ]}
                        onPress={() => {
                            navigation.navigate('PhoneCode');
                        }}
                        disabled={!isValidCode}
                    >
                        <Text
                            style={[
                                styles.continueBtnText,
                                {
                                    color: isValidCode ? '#fff' : '#777777',
                                },
                            ]}
                        >
                            Sign up
                        </Text>
                    </Pressable>
                </View>

                <StatusBar style='light' />
            </KeyboardAvoidingView>
        </GestureHandlerRootView>
    );
};

export default PhoneCodeView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        padding: 10,
        paddingBottom: 50,
    },
    flexContainer: {
        flex: 1,
    },
    header: {
        color: '#fff',
        fontSize: 35,
        fontWeight: 'bold',
    },
    subHeader: {
        marginTop: 10,
        marginBottom: 20,
        color: '#fff',
        fontSize: 14,
    },
    inputWrapper: {
        marginTop: 20,
        flexDirection: 'row',
    },
    country: {
        width: 100,
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
    resend: {
        marginTop: 20,
        color: '#fff',
    },
    loginLink: {
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
