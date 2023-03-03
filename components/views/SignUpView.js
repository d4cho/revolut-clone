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
import CountryPicker, { DARK_THEME } from 'react-native-country-picker-modal';

const SignUpView = ({ navigation }) => {
    const [phoneNum, setPhoneNum] = useState('');
    const [isValidPhoneNum, setIsValidPhoneNum] = useState(false);

    const [countryCode, setCountryCode] = useState('CA');
    const [country, setCountry] = useState(null);

    const onSelectPhoneCountry = (country) => {
        setCountryCode(country.cca2);
        setCountry(country);
    };

    const handlePhoneNumChange = (text) => {
        setPhoneNum(text);
        if (text.length === 10) {
            setIsValidPhoneNum(true);
        } else {
            setIsValidPhoneNum(false);
        }
    };

    return (
        <GestureHandlerRootView style={styles.container}>
            <KeyboardAvoidingView style={styles.flexContainer}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.header}>Let's get started!</Text>
                    <Text style={styles.subHeader}>
                        Enter your phone number. We will send you a confirmation
                        code there
                    </Text>

                    <View
                        style={{
                            flex: 1,
                        }}
                    >
                        <View style={styles.inputWrapper}>
                            <Pressable style={styles.country}>
                                <CountryPicker
                                    theme={DARK_THEME}
                                    countryCode={countryCode}
                                    withFlag={true}
                                    withEmoji={true}
                                    withFilter={true}
                                    withCallingCode={true}
                                    onSelect={onSelectPhoneCountry}
                                    withCallingCodeButton={true}
                                    visible={false}
                                />
                            </Pressable>
                            <TextInput
                                style={styles.input}
                                onChangeText={handlePhoneNumChange}
                                value={phoneNum}
                                placeholder='Mobile number'
                                placeholderTextColor='#fff'
                                keyboardType='numeric'
                                textContentType='telephoneNumber'
                                clearButtonMode='while-editing'
                                autoFocus
                                maxLength={10}
                            />
                        </View>
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
                                backgroundColor: isValidPhoneNum
                                    ? '#0566E9'
                                    : '#010048',
                            },
                        ]}
                        onPress={() => {
                            navigation.navigate('PhoneCodeView', {
                                callingCode: country?.callingCode[0] || '1',
                                phoneNum,
                            });
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
                            Sign up
                        </Text>
                    </Pressable>
                </View>

                <StatusBar style='light' />
            </KeyboardAvoidingView>
        </GestureHandlerRootView>
    );
};

export default SignUpView;

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
    input: {
        flex: 1,
        backgroundColor: '#777777',
        color: '#fff',
        fontSize: 16,
        height: 50,
        padding: 10,
        borderRadius: 8,
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
