import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome } from '@expo/vector-icons';

const DeliverCardView = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.flexContainer}>
                <View>
                    <Text style={styles.header}>Get a card delivered</Text>
                    <Text style={styles.subHeader}>
                        Keep your wallet happy! Withdraw cash from ATMs and pay
                        with chip and PIN in-store.
                    </Text>
                </View>

                <FontAwesome name='credit-card-alt' size={200} color='#fff' />

                <View style={{ width: '100%' }}>
                    <View>
                        <Pressable style={styles.orderBtn}>
                            <Text style={styles.orderBtnText}>Order card</Text>
                        </Pressable>
                    </View>

                    <View>
                        <Pressable
                            style={styles.continueBtn}
                            onPress={() => {
                                navigation.navigate('AddMoneyView');
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

export default DeliverCardView;

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
