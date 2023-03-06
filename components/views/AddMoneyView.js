import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome5 } from '@expo/vector-icons';

const AddMoneyView = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.flexContainer}>
                <View>
                    <Text style={styles.header}>
                        Add money to your new account
                    </Text>
                    <Text style={styles.subHeader}>
                        Ready to get more form your money? Let's add money to
                        your new card.
                    </Text>
                </View>

                <FontAwesome5 name='coins' size={200} color='#fff' />

                <View style={{ width: '100%' }}>
                    <View>
                        <Pressable style={styles.orderBtn}>
                            <Text style={styles.orderBtnText}>
                                Add money securely
                            </Text>
                        </Pressable>
                    </View>

                    <View>
                        <Pressable
                            style={styles.continueBtn}
                            onPress={() => {
                                navigation.navigate('Intro');
                            }}
                        >
                            <Text style={styles.continueBtnText}>Not now</Text>
                        </Pressable>
                    </View>
                </View>
            </View>

            <StatusBar style='light' />
        </View>
    );
};

export default AddMoneyView;

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
        alignItems: 'center',
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
    orderBtn: {
        width: '100%',
        height: 40,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor: '#fff',
    },
    orderBtnText: {
        fontSize: 16,
        color: '#0566E9',
        fontWeight: 'bold',
    },
});
