import React from 'react';
import {
    KeyboardAvoidingView,
    Pressable,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { Ionicons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const SelfieInfoView = ({ navigation }) => {
    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.hero}>
                <Text style={styles.header}>Take a selfie</Text>
                <Text style={styles.subHeader}>
                    It's required by law to verify your identity
                </Text>
            </View>

            <View style={styles.flexContainer}>
                <View>
                    <Text
                        style={{
                            color: '#fff',
                            marginTop: 50,
                            marginBottom: 20,
                        }}
                    >
                        Before you start
                    </Text>
                    <View style={styles.infoWrapper}>
                        <View style={styles.infoItem}>
                            <View style={{ paddingRight: 15 }}>
                                <Ionicons
                                    name='person'
                                    size={24}
                                    color='#fff'
                                />
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={{ color: '#999999' }}>
                                    Make sure that you're the only one visible
                                    on-screen
                                </Text>
                            </View>
                        </View>
                        <View style={styles.infoItem}>
                            <View style={{ paddingRight: 15 }}>
                                <Foundation
                                    name='lightbulb'
                                    size={26}
                                    color='#fff'
                                />
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={{ color: '#999999' }}>
                                    Find a good lighting so your face is clearly
                                    visible
                                </Text>
                            </View>
                        </View>
                        <View style={styles.infoItem}>
                            <View style={{ paddingRight: 15 }}>
                                <MaterialCommunityIcons
                                    name='incognito'
                                    size={24}
                                    color='#fff'
                                />
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={{ color: '#999999' }}>
                                    Don't smile and remove anything obscuring
                                    your face (e.g. glasses, hats, scarves)
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                {/* Continue Button */}
                <View>
                    <Pressable
                        style={styles.continueBtn}
                        onPress={() => {
                            // navigation.navigate('TakeSelfieView');
                            navigation.navigate('OccupationView');
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

export default SelfieInfoView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        padding: 10,
        paddingBottom: 50,
    },
    hero: {
        flex: 3 / 4,
        padding: 15,
        justifyContent: 'flex-end',
        backgroundColor: '#0566E9',
    },
    header: {
        color: '#fff',
        fontSize: 35,
        fontWeight: 'bold',
    },
    subHeader: {
        marginTop: 10,
        color: '#fff',
        fontSize: 14,
    },
    flexContainer: {
        flex: 2,
        justifyContent: 'space-between',
    },
    infoWrapper: {
        backgroundColor: '#222222',
        borderRadius: 8,
        padding: 15,
    },
    infoItem: {
        flexDirection: 'row',
        paddingBottom: 20,
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
