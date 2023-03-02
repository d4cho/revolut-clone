import React, { useState, useEffect } from 'react';
import {
    KeyboardAvoidingView,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

const HomeAddressView = ({ navigation, route }) => {
    const { addressInfo } = route?.params;

    const [addressLine1, setAddressLine1] = useState('');
    const [addressLine2, setAddressLine2] = useState('');
    const [city, setCity] = useState('');
    const [province, setProvince] = useState('');

    const [isContinue, setIsContinue] = useState(false);

    useEffect(() => {
        if (addressInfo) {
            const al1 = addressInfo.structured_formatting.main_text;
            const cit = addressInfo.terms[2].value;
            const prov = addressInfo.terms[3].value;

            setAddressLine1(al1);
            setCity(cit);
            setProvince(prov);
        }
    }, []);

    useEffect(() => {
        if (addressLine1 && city && province) {
            setIsContinue(true);
        } else {
            setIsContinue(false);
        }
    }, [addressLine1, city, province]);

    return (
        <View style={styles.container}>
            <ScrollView style={styles.flexContainer}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.header}>Home address</Text>
                    <Text style={styles.subHeader}>
                        By law, we need your home address to open your account.
                    </Text>

                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => setAddressLine1(text)}
                        value={addressLine1}
                        placeholder='Address line 1'
                        keyboardType='default'
                        placeholderTextColor='#777777'
                        clearButtonMode='while-editing'
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => setAddressLine2(text)}
                        value={addressLine2}
                        placeholder='Address line 2'
                        keyboardType='default'
                        placeholderTextColor='#777777'
                        clearButtonMode='while-editing'
                    />
                    <Text style={styles.optional}>Optional</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => setCity(text)}
                        value={city}
                        placeholder='City'
                        keyboardType='default'
                        placeholderTextColor='#777777'
                        clearButtonMode='while-editing'
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => setProvince(text)}
                        value={province}
                        placeholder='Province / State'
                        keyboardType='default'
                        placeholderTextColor='#777777'
                        clearButtonMode='while-editing'
                    />
                    {/* Continue Button */}
                    <View>
                        <Pressable
                            style={[
                                styles.continueBtn,
                                {
                                    backgroundColor: isContinue
                                        ? '#0566E9'
                                        : '#010048',
                                },
                            ]}
                            onPress={() => {
                                navigation.navigate('EnterNameView');
                            }}
                            disabled={!isContinue}
                        >
                            <Text
                                style={[
                                    styles.continueBtnText,
                                    {
                                        color: isContinue ? '#fff' : '#777777',
                                    },
                                ]}
                            >
                                Continue
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>

            <StatusBar style='light' />
        </View>
    );
};

export default HomeAddressView;

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
    input: {
        marginTop: 20,
        backgroundColor: '#333333',
        color: '#fff',
        fontSize: 16,
        height: 50,
        padding: 10,
        borderRadius: 8,
    },
    optional: {
        marginTop: 5,
        marginLeft: 20,
        color: '#777777',
        fontSize: 12,
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
