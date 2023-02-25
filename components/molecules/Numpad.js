import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const Numpad = ({ handleNumPress, showDelete }) => {
    return (
        <View style={styles.container}>
            <View style={styles.flexRow}>
                <Pressable
                    style={styles.pressable}
                    onPress={() => handleNumPress('1')}
                >
                    <Text style={styles.num}>1</Text>
                </Pressable>
                <Pressable
                    style={styles.pressable}
                    onPress={() => handleNumPress('2')}
                >
                    <Text style={styles.num}>2</Text>
                </Pressable>
                <Pressable
                    style={styles.pressable}
                    onPress={() => handleNumPress('3')}
                >
                    <Text style={styles.num}>3</Text>
                </Pressable>
            </View>
            <View style={styles.flexRow}>
                <Pressable
                    style={styles.pressable}
                    onPress={() => handleNumPress('4')}
                >
                    <Text style={styles.num}>4</Text>
                </Pressable>
                <Pressable
                    style={styles.pressable}
                    onPress={() => handleNumPress('5')}
                >
                    <Text style={styles.num}>5</Text>
                </Pressable>
                <Pressable
                    style={styles.pressable}
                    onPress={() => handleNumPress('6')}
                >
                    <Text style={styles.num}>6</Text>
                </Pressable>
            </View>
            <View style={styles.flexRow}>
                <Pressable
                    style={styles.pressable}
                    onPress={() => handleNumPress('7')}
                >
                    <Text style={styles.num}>7</Text>
                </Pressable>
                <Pressable
                    style={styles.pressable}
                    onPress={() => handleNumPress('8')}
                >
                    <Text style={styles.num}>8</Text>
                </Pressable>
                <Pressable
                    style={styles.pressable}
                    onPress={() => handleNumPress('9')}
                >
                    <Text style={styles.num}>9</Text>
                </Pressable>
            </View>
            <View style={styles.flexRow}>
                <Pressable style={styles.pressable}></Pressable>
                <Pressable
                    style={styles.pressable}
                    onPress={() => handleNumPress('0')}
                >
                    <Text style={styles.num}>0</Text>
                </Pressable>
                {showDelete ? (
                    <Pressable
                        style={styles.pressable}
                        onPress={() => handleNumPress('delete')}
                    >
                        <Ionicons name='arrow-back' size={35} color='white' />
                    </Pressable>
                ) : (
                    <Pressable style={styles.pressable}></Pressable>
                )}
            </View>
        </View>
    );
};

export default Numpad;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    flexRow: {
        flexDirection: 'row',
    },
    pressable: {
        width: 80,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 15,
    },
    num: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
    },
});
