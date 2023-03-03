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

const OccupationView = ({ navigation }) => {
    const [occupation, setOccupation] = useState('');

    const [isContinue, setIsContinue] = useState(false);

    const handleOccupationChange = (text) => {
        setOccupation(text);

        if (text.length > 0) {
            setIsContinue(true);
        } else {
            setIsContinue(false);
        }
    };

    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.flexContainer}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.header}>Occupation</Text>
                    <Text style={styles.subHeader}>
                        Be as accurate and descriptive as possible
                    </Text>

                    <TextInput
                        style={styles.input}
                        onChangeText={handleOccupationChange}
                        value={occupation}
                        placeholder='Occupation'
                        keyboardType='default'
                        placeholderTextColor='#777777'
                        clearButtonMode='while-editing'
                        autoFocus
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
                            navigation.navigate('ReasonView');
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
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
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
