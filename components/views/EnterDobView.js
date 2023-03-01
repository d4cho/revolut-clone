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
import { MaskedTextInput } from 'react-native-mask-text';

const EnterNameView = ({ navigation }) => {
    const [dob, setDob] = useState('');

    const [isContinue, setIsContinue] = useState(false);

    useEffect(() => {
        if (dob.length === 10) {
            setIsContinue(true);
        } else {
            setIsContinue(false);
        }
    }, [dob]);

    const handleDobChange = (text, rawText) => {
        setDob(text);
    };

    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.flexContainer}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.header}>Date of Birth</Text>
                    <Text style={styles.subHeader}>
                        As stated on your official ID. You must be 18 or older
                        to open a Revolut account.
                    </Text>

                    <View>
                        <MaskedTextInput
                            type='date'
                            options={{
                                dateFormat: 'MM/DD/YYYY',
                            }}
                            onChangeText={(text, rawText) => {
                                handleDobChange(text, rawText);
                            }}
                            style={styles.input}
                            placeholder='MM/DD/YYYY'
                            placeholderTextColor='#777777'
                            keyboardType='numeric'
                            clearButtonMode='while-editing'
                            autoFocus
                            maxLength={8}
                        />

                        <Text
                            style={{
                                color: '#fff',
                                fontSize: 16,
                                position: 'absolute',
                                top: 35,
                                left: 10,
                            }}
                        >
                            {dob}
                        </Text>
                    </View>

                    {/* <TextInput
                        style={styles.input}
                        onChangeText={handleDobChange}
                        value={dob}
                        placeholder='MM/DD/YYYY'
                        keyboardType='numeric'
                        placeholderTextColor='#777777'
                        clearButtonMode='while-editing'
                        autoFocus
                        maxLength={10}
                    /> */}
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
        color: '#333333',
        fontSize: 16,
        height: 50,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
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
