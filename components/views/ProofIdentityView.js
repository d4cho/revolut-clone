import React, { useState, useEffect } from 'react';
import {
    KeyboardAvoidingView,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import CountryPicker, { DARK_THEME } from 'react-native-country-picker-modal';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const DOCUMENTS = ['Driving license', 'Passport', 'Identity card'];

const ProofIdentityView = ({ navigation }) => {
    const [countryCode, setCountryCode] = useState('CA');
    const [country, setCountry] = useState(null);

    const onSelectCountry = (country) => {
        setCountryCode(country.cca2);
        setCountry(country);
    };

    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.flexContainer}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.header}>Proof of identity</Text>
                    <Text
                        style={styles.subHeader}
                    >{`We need a valid document to confirm you reside in ${
                        country?.name || 'Canada'
                    } and verify who you are. Data is processed securely.`}</Text>

                    <Text style={styles.title}>Nationality</Text>
                    <CountryPicker
                        containerButtonStyle={styles.country}
                        theme={DARK_THEME}
                        countryCode={countryCode}
                        withFilter={true}
                        onSelect={onSelectCountry}
                        withCountryNameButton={true}
                        withFlagButton={true}
                        visible={false}
                    />

                    <Text style={styles.title}>Select document</Text>
                    <View>
                        {DOCUMENTS.map((document, idx) => (
                            <Pressable
                                key={idx}
                                style={styles.documentBtn}
                                onPress={() => {
                                    navigation.navigate('TakeIdPhotoView', {
                                        document,
                                    });
                                }}
                            >
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                    }}
                                >
                                    <FontAwesome5
                                        name={
                                            document === 'Driving license'
                                                ? 'car'
                                                : document === 'Passport'
                                                ? 'passport'
                                                : 'id-card'
                                        }
                                        size={24}
                                        color='#fff'
                                        style={{
                                            marginRight:
                                                document === 'Passport'
                                                    ? 26
                                                    : 20,
                                        }}
                                    />
                                    <View>
                                        <Text style={styles.documentBtnText}>
                                            {document}
                                        </Text>
                                        <Text
                                            style={{
                                                color: '#888',
                                                marginTop: 5,
                                            }}
                                        >
                                            {`Issued in ${
                                                country?.name || 'Canada'
                                            }`}
                                        </Text>
                                    </View>
                                </View>
                                <Ionicons
                                    name='chevron-forward'
                                    size={24}
                                    color='#fff'
                                />
                            </Pressable>
                        ))}
                    </View>
                </View>

                <StatusBar style='light' />
            </View>
        </KeyboardAvoidingView>
    );
};

export default ProofIdentityView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        padding: 10,
        paddingBottom: 50,
    },
    flexContainer: {
        flex: 1,
        justifyContent: 'space-between',
    },
    header: {
        color: '#fff',
        fontSize: 35,
        fontWeight: 'bold',
    },
    subHeader: {
        marginTop: 10,
        marginBottom: 30,
        color: '#fff',
        fontSize: 14,
    },
    title: {
        color: '#777',
        marginBottom: 10,
    },
    country: {
        width: '100%',
        backgroundColor: '#333333',
        borderRadius: 8,
        paddingLeft: 10,
        paddingTop: 12,
        paddingBottom: 12,
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginBottom: 30,
    },
    documentBtn: {
        width: '100%',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: '#333333',
        marginBottom: 10,
    },
    documentBtnText: {
        fontSize: 16,
        color: '#fff',
    },
});
