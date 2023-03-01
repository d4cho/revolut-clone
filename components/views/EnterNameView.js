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

const EnterNameView = ({ navigation }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const [isContinue, setIsContinue] = useState(false);

    useEffect(() => {
        if (firstName && lastName) {
            setIsContinue(true);
        } else {
            setIsContinue(false);
        }
    }, [firstName, lastName]);

    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.flexContainer}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.header}>Name</Text>
                    <Text style={styles.subHeader}>
                        As stated on your official ID. We need your name to
                        verify your identity.
                    </Text>

                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => setFirstName(text)}
                        value={firstName}
                        placeholder='First name'
                        keyboardType='default'
                        placeholderTextColor='#777777'
                        clearButtonMode='while-editing'
                        autoFocus
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => setLastName(text)}
                        value={lastName}
                        placeholder='Last name'
                        keyboardType='default'
                        placeholderTextColor='#777777'
                        clearButtonMode='while-editing'
                    />
                </View>

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
                            navigation.navigate('EnterDobView');
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

                <StatusBar style='light' />
            </View>
        </KeyboardAvoidingView>
    );
};

export default EnterNameView;

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
