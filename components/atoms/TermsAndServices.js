import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';

const TermsAndServices = () => {
    return (
        <View
            style={{
                backgroundColor: '#222222',
                marginTop: 10,
                marginBottom: 10,
                borderRadius: 8,
                padding: 10,
            }}
        >
            <View
                style={{
                    flexDirection: 'row',
                    paddingBottom: 20,
                }}
            >
                <View style={{ paddingRight: 10 }}>
                    <Ionicons name='document-text' size={24} color='white' />
                </View>
                <View style={{ flex: 1 }}>
                    <Text
                        style={{
                            color: '#fff',
                            paddingBottom: 10,
                            fontSize: 16,
                            fontWeight: 'bold',
                        }}
                    >
                        Our agreements
                    </Text>
                    <Text style={{ color: '#999999' }}>
                        Our Cardholder Agreement, T&Cs and Privacy Policy tell
                        you more about our services and how we use, collect,
                        store, and disclose your personal information.
                    </Text>
                </View>
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    paddingBottom: 20,
                }}
            >
                <View style={{ paddingRight: 10 }}>
                    <Foundation name='credit-card' size={30} color='white' />
                </View>
                <View style={{ flex: 1 }}>
                    <Text
                        style={{
                            color: '#fff',
                            paddingBottom: 10,
                            fontSize: 16,
                            fontWeight: 'bold',
                        }}
                    >
                        Card issuing
                    </Text>
                    <Text style={{ color: '#999999' }}>
                        The Revolut prepaid Visa and Prepaid Mastercard are
                        issued by Metropolitan Commercial Bank pursuant to a
                        license from Visa Inc. for Visa cards, and Mastercard
                        International for Master cards. A fee may apply for
                        loading funds on the Card, For a list and description of
                        fees, please see our Cardholder Agreement.
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default TermsAndServices;

const styles = StyleSheet.create({});
