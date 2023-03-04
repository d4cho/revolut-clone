import React, { useState, useEffect } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const VerifyingIdView = ({ navigation }) => {
    const [fill, setFill] = useState(0);

    useEffect(() => {
        if (fill < 100) {
            setTimeout(() => {
                setFill(fill + 10);
            }, 1000);
        }
    }, [fill]);

    return (
        <View style={styles.container}>
            <View style={styles.flexContainer}>
                <View>
                    <Text style={styles.header}>
                        We're verifying your identity
                    </Text>
                    <Text style={styles.subHeader}>
                        While we're doing that, let's choose your plan and card!
                    </Text>
                </View>

                <View style={{ alignItems: 'center' }}>
                    <AnimatedCircularProgress
                        size={200}
                        width={12}
                        fill={fill}
                        tintColor='#0566E9'
                        backgroundColor='#333'
                        rotation={0}
                    >
                        {(fill) => (
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: '#fff', fontSize: 50 }}>
                                    {fill.toFixed(0)}
                                </Text>
                                <Text style={{ color: '#fff', fontSize: 20 }}>
                                    %
                                </Text>
                            </View>
                        )}
                    </AnimatedCircularProgress>
                </View>

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
            </View>

            <StatusBar style='light' />
        </View>
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
