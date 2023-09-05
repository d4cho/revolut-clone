import React, { useState, useRef } from 'react';
import {
    KeyboardAvoidingView,
    Pressable,
    StyleSheet,
    Text,
    View,
    TextInput,
    Dimensions,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import TwoButtonSwitcher from '../molecules/TwoButtonSwitcher';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Carousel from 'react-native-reanimated-carousel';
import CountryPicker, { DARK_THEME } from 'react-native-country-picker-modal';

const LOGIN_DATA = [
    {
        type: 'phone',
        placeholderText: 'Enter your phone',
        lostText: 'Lost access to my phone number',
    },
    {
        type: 'email',
        placeholderText: 'Enter your email',
        lostText: 'Lost access to my email',
    },
];

const LoginView = ({ navigation }) => {
    const carouselRef = useRef(null);
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;

    const [selectedOption, setSelectedOption] = useState(0);

    const [phoneNum, setPhoneNum] = useState('');
    const [isValidPhoneNum, setIsValidPhoneNum] = useState(false);
    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(false);

    const [countryCode, setCountryCode] = useState('CA');
    const [country, setCountry] = useState(null);

    const onSelectPhoneCountry = (country) => {
        setCountryCode(country.cca2);
        setCountry(country);
    };

    const refreshFunction = (option) => {
        setSelectedOption(option);
        carouselRef.current?.scrollTo({ index: option, animated: true });
    };

    const handlePhoneNumChange = (text) => {
        setPhoneNum(text);
        if (text.length === 10) {
            setIsValidPhoneNum(true);
        } else {
            setIsValidPhoneNum(false);
        }
    };

    const handleEmailChange = (text) => {
        setEmail(text);
        if (text) {
            setIsValidEmail(true);
        } else {
            setIsValidEmail(false);
        }
    };

    const renderItem = (info) => {
        const { item } = info;

        if (item.type === 'phone') {
            return (
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
                            placeholder={item.placeholderText}
                            placeholderTextColor='#fff'
                            keyboardType='numeric'
                            textContentType='telephoneNumber'
                            clearButtonMode='while-editing'
                            maxLength={10}
                        />
                    </View>
                    <Text style={styles.lostAccess}>{item.lostText}</Text>
                </View>
            );
        } else {
            return (
                <View
                    style={{
                        flex: 1,
                    }}
                >
                    <View style={styles.inputWrapper}>
                        <TextInput
                            style={styles.input}
                            onChangeText={handleEmailChange}
                            value={email}
                            placeholder={item.placeholderText}
                            placeholderTextColor='#fff'
                            keyboardType='email-address'
                            textContentType='emailAddress'
                            clearButtonMode='while-editing'
                        />
                    </View>
                    <Text style={styles.lostAccess}>{item.lostText}</Text>
                </View>
            );
        }
    };

    return (
        <GestureHandlerRootView style={styles.container}>
            <KeyboardAvoidingView style={styles.flexContainer}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.header}>Log in to Revolut</Text>
                    <View style={styles.switcherWrapper}>
                        <TwoButtonSwitcher
                            defaultOption={selectedOption}
                            refreshFunction={refreshFunction}
                        />
                    </View>

                    <Carousel
                        ref={carouselRef}
                        loop={false}
                        width={width - 20}
                        height={height}
                        data={LOGIN_DATA}
                        scrollAnimationDuration={200}
                        onSnapToItem={(index) => {
                            setSelectedOption(index);
                        }}
                        renderItem={(info) => renderItem(info)}
                    />
                </View>

                {/* Continue Button */}
                {selectedOption === 0 ? (
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
                                navigation.navigate('EnterPasscode');
                            }}
                            disabled={!isValidPhoneNum}
                        >
                            <Text
                                style={[
                                    styles.continueBtnText,
                                    {
                                        color: isValidPhoneNum
                                            ? '#fff'
                                            : '#777777',
                                    },
                                ]}
                            >
                                Continue
                            </Text>
                        </Pressable>
                    </View>
                ) : (
                    <View>
                        <Pressable
                            style={[
                                styles.continueBtn,
                                {
                                    backgroundColor: isValidEmail
                                        ? '#0566E9'
                                        : '#010048',
                                },
                            ]}
                            onPress={() => {
                                navigation.navigate('EnterPasscode');
                            }}
                            disabled={!isValidEmail}
                        >
                            <Text
                                style={[
                                    styles.continueBtnText,
                                    {
                                        color: isValidEmail
                                            ? '#fff'
                                            : '#777777',
                                    },
                                ]}
                            >
                                Continue
                            </Text>
                        </Pressable>
                    </View>
                )}

                <StatusBar style='light' />
            </KeyboardAvoidingView>
        </GestureHandlerRootView>
    );
};

export default LoginView;

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
    switcherWrapper: {
        marginTop: 20,
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
