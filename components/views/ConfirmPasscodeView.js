import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Alert, Modal, Pressable } from 'react-native';
import Numpad from '../molecules/Numpad';
import { Ionicons } from '@expo/vector-icons';

const ConfirmPasscodeView = ({ navigation, route }) => {
    const { enteredPasscode } = route?.params;
    const [passcode, setPasscode] = useState(['', '', '', '']);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        let pc = passcode.join('');
        let enteredPc = enteredPasscode.join('');

        if (pc.length === enteredPasscode.length) {
            if (pc === enteredPc) {
                navigation.navigate('ProofIdentityView');
            } else {
                setPasscode(['', '', '', '']);
                setModalVisible(true);
            }
        }
    }, [passcode]);

    const handleNumPress = (num) => {
        let newPasscode = [...passcode];

        if (num === 'delete') {
            for (let i = newPasscode.length - 1; i >= 0; i--) {
                if (newPasscode[i]) {
                    newPasscode[i] = '';
                    break;
                }
            }
        } else {
            for (let i = 0; i < newPasscode.length; i++) {
                if (!newPasscode[i]) {
                    newPasscode[i] = num;
                    break;
                }
            }
        }

        setPasscode(newPasscode);
    };

    const handleModalClose = () => {
        setModalVisible(false);
        navigation.navigate('CreatePasscodeView');
    };

    return (
        <View style={styles.container}>
            <View style={styles.topWrapper}>
                <Text style={styles.header}>Confirm passcode</Text>

                <View style={{ flexDirection: 'row' }}>
                    {passcode.map((item, idx) => {
                        return (
                            <Text key={idx} style={styles.header}>
                                {item}
                            </Text>
                        );
                    })}
                </View>

                <View style={styles.dotsWrapper}>
                    {passcode.map((code, idx) => {
                        return (
                            <View
                                key={idx}
                                style={[
                                    styles.dot,
                                    {
                                        backgroundColor: code
                                            ? '#0566E9'
                                            : '#04017d',
                                    },
                                ]}
                            ></View>
                        );
                    })}
                </View>
            </View>

            <View style={styles.centeredView}>
                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={handleModalClose}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Ionicons
                                name='close-circle-outline'
                                size={100}
                                color='red'
                                style={{ marginBottom: 20 }}
                            />
                            <Text style={styles.modalText}>
                                Passcode don't match
                            </Text>
                            <Pressable
                                style={styles.button}
                                onPress={handleModalClose}
                            >
                                <Text style={styles.textStyle}>Try again</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
            </View>

            <View style={styles.bottomWrapper}>
                <View style={styles.numpadWrapper}>
                    <Numpad
                        handleNumPress={handleNumPress}
                        showDelete={passcode.join('')}
                    />
                </View>
            </View>
        </View>
    );
};

export default ConfirmPasscodeView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 50,
    },
    topWrapper: {
        width: '100%',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    bottomWrapper: {
        width: '100%',
        flex: 3,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    header: {
        color: '#fff',
        fontSize: 35,
        fontWeight: 'bold',
    },
    dotsWrapper: {
        flexDirection: 'row',
    },
    dot: {
        margin: 15,
        width: 15,
        height: 15,
        borderRadius: 50,
        backgroundColor: '#04017d',
    },
    forgot: {
        color: '#0566E9',
        fontSize: 16,
        fontWeight: 'bold',
    },
    numpadWrapper: {
        backgroundColor: '#000',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    centeredView: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end',
        paddingBottom: 70,
    },
    modalView: {
        width: '100%',
        backgroundColor: '#222222',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        // shadowColor: '#000',
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 4,
        // elevation: 5,
    },
    button: {
        width: '100%',
        borderRadius: 10,
        padding: 10,
        elevation: 2,
        backgroundColor: '#0566E9',
    },
    textStyle: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
    },
    modalText: {
        marginBottom: 20,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
    },
});
