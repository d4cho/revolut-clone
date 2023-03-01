import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const AddressSearchView = ({ navigation }) => {
    // const [addressInfo, setAddressInfo] = useState(null);

    const handleAddressPress = (data) => {
        // setAddressInfo(data);
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
