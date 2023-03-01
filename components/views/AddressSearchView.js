import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const AddressSearchView = ({ navigation }) => {
    const handleAddressPress = (data) => {
        navigation.navigate('HomeAddressView', {
            addressInfo: data,
        });
    };

    return (
        <View style={styles.container}>
            <View style={styles.flexContainer}>
                <View style={{ height: '80%' }}>
                    <GooglePlacesAutocomplete
                        placeholder='Search an address'
                        onPress={(data, details = null) => {
                            handleAddressPress(data);
                        }}
                        query={{
                            key: 'AIzaSyCx510YXUouJdCWrrNqeYCoZOnP53jBtcA',
                            language: 'en',
                        }}
                    />
                </View>

                <Pressable
                    style={{
                        width: '100%',
                        height: 40,
                        marginTop: 20,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 15,
                        backgroundColor: 'blue',
                    }}
                    onPress={() =>
                        navigation.navigate('HomeAddressView', {
                            addressInfo: null,
                        })
                    }
                >
                    <Text style={{ color: '#fff' }}>only for dev</Text>
                </Pressable>

                <StatusBar style='light' />
            </View>
        </View>
    );
};

export default AddressSearchView;

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
});
