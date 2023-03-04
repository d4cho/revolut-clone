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

const VerifyingIdView = ({ navigation }) => {
    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.flexContainer}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.header}>
                        We're verifying your identity
                    </Text>
                    <Text style={styles.subHeader}>
                        While we're doing that, let's choose your plan and card!
                    </Text>
                </View>

                {/* Continue Button */}
                <View>
                    <Pressable
                        style={styles.continueBtn}
                        onPress={() => {
                            navigation.navigate('ProofIdentityView');
                        }}
                    >
                        <Text style={styles.continueBtnText}>Continue</Text>
                    </Pressable>
                </View>

                <StatusBar style='light' />
            </View>
        </KeyboardAvoidingView>
    );
};

export default VerifyingIdView;

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
    continueBtn: {
        width: '100%',
        height: 40,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor: '#0566E9',
    },
    continueBtnText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
    },
});
