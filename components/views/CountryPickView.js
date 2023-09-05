import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import CountryPicker, { DARK_THEME } from 'react-native-country-picker-modal';
import TermsAndServices from '../atoms/TermsAndServices';

const CountryPickView = ({ navigation }) => {
    const [countryCode, setCountryCode] = useState(null);
    const [country, setCountry] = useState(null);

    const onSelectCountry = (country) => {
        setCountryCode(country.cca2);
        setCountry(country);
    };

    return (
        <View style={styles.container}>
            <ScrollView style={styles.flexContainer}>
                <View>
                    <Text style={styles.header}>Country of residence</Text>
                    <Text style={styles.subHeader}>
                        The terms and services which apply to you, will depend
                        on your country of residence
                    </Text>

                    <CountryPicker
                        containerButtonStyle={styles.country}
                        theme={DARK_THEME}
                        countryCode={countryCode}
                        withFilter={true}
                        onSelect={onSelectCountry}
                        withCountryNameButton={true}
                        withFlagButton={false}
                        visible={false}
                    />

                    {/* Terms and Conditions */}
                    {country && <TermsAndServices />}
                </View>

                {/* Continue Button */}
                <View>
                    <Pressable
                        style={[
                            styles.continueBtn,
                            {
                                backgroundColor: country
                                    ? '#0566E9'
                                    : '#010048',
                            },
                        ]}
                        onPress={() => {
                            navigation.navigate('HomeAddressView');
                        }}
                        disabled={!country}
                    >
                        <Text
                            style={[
                                styles.continueBtnText,
                                {
                                    color: country ? '#fff' : '#777777',
                                },
                            ]}
                        >
                            Accept and continue
                        </Text>
                    </Pressable>
                </View>

                <StatusBar style='light' />
            </ScrollView>
        </View>
    );
};

export default CountryPickView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        padding: 10,
        paddingBottom: 50,
    },
    flexContainer: {
        flex: 1,
        // justifyContent: 'space-between',
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
    country: {
        width: '100%',
        backgroundColor: '#222222',
        borderRadius: 8,
        paddingLeft: 15,
        paddingTop: 12,
        paddingBottom: 12,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    continueBtn: {
        width: '100%',
        height: 40,
        marginTop: 20,
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
