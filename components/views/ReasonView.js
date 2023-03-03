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
import { Ionicons } from '@expo/vector-icons';

const REASONS = [
    'Spend or save daily',
    'Spend while traveling',
    'Send money',
    'Gain exposure to financial assets',
];

const OccupationView = ({ navigation }) => {
    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.flexContainer}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.header}>
                        Main reason for using Revolut
                    </Text>
                    <Text style={styles.subHeader}>
                        We need to know this for regulatory reasons. And also,
                        we're curious!
                    </Text>

                    {/* Reasons Buttons */}
                    <View>
                        {REASONS.map((reason, idx) => (
                            <Pressable
                                style={styles.reasonBtn}
                                onPress={() => {
                                    navigation.navigate('SelfieInfoView');
                                }}
                            >
                                <Text style={styles.reasonBtnText}>
                                    {reason}
                                </Text>
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

export default OccupationView;

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
    reasonBtn: {
        width: '100%',
        height: 50,
        marginTop: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: '#333333',
    },
    reasonBtnText: {
        fontSize: 16,
        color: '#fff',
    },
});
