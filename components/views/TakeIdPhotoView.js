import React, { useState, useEffect, useRef } from 'react';
import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { Camera, CameraType } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const TakePhotoView = ({ navigation, route }) => {
    const { document } = route?.params;
    const cameraRef = useRef(null);
    const [permission, requestPermission] = Camera.useCameraPermissions();

    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        requestPermission();
    }, []);

    if (!permission) {
        return (
            <View>
                <Text>No permission</Text>
            </View>
        );
    }

    if (!permission.granted) {
        return (
            <View>
                <Text>No access to camera</Text>
            </View>
        );
    }

    const handleButtonClick = () => {
        setIsPaused(!isPaused);
        if (isPaused) {
            cameraRef.current.resumePreview();
        } else {
            cameraRef.current.pausePreview();
        }
    };

    return (
        <View style={styles.container}>
            <Camera
                ref={cameraRef}
                style={styles.camera}
                type={CameraType.back}
            ></Camera>

            <>
                <View
                    style={{
                        position: 'absolute',
                        top: -440,
                        bottom: -53,
                        left: -490,
                        right: -490,
                        backgroundColor: 'transparent',

                        borderWidth: 500,
                        borderRadius: 5,
                        borderColor: '#000',
                        opacity: 0.9,
                    }}
                />

                <View style={styles.photoOutlineWrapper}>
                    <View style={styles.photoOutline}></View>
                    <View style={styles.textWrapper}>
                        <Text style={styles.documentType}>
                            {document === 'Passport'
                                ? 'Passport page'
                                : 'Front of card'}
                        </Text>
                        <Text style={styles.instructionsText}>
                            {`Position all 4 corners of the ${
                                document === 'Passport' ? 'page' : 'card'
                            } clearly in the frame and remove any cover`}
                        </Text>
                    </View>
                </View>

                {isPaused ? (
                    <View style={styles.takePictureBtnWrapper}>
                        <Pressable
                            style={styles.clearBtn}
                            onPress={() => {
                                navigation.navigate('VerifyingIdView');
                            }}
                        >
                            <Ionicons
                                name='checkmark'
                                size={24}
                                color='#fff'
                                style={{ marginRight: 10 }}
                            />
                            <Text style={styles.clearBtnText}>
                                My photo is readable
                            </Text>
                        </Pressable>
                        <Pressable
                            style={styles.retakeBtn}
                            onPress={() => handleButtonClick()}
                        >
                            <FontAwesome5
                                name='redo'
                                size={20}
                                color='#0566E9'
                                style={{ marginRight: 10 }}
                            />
                            <Text style={styles.retakeBtnText}>
                                Take a new photo
                            </Text>
                        </Pressable>
                    </View>
                ) : (
                    <View style={styles.takePictureBtnWrapper}>
                        <Pressable
                            style={styles.takePictureBtn}
                            onPress={() => handleButtonClick()}
                        >
                            <View style={styles.circle}></View>
                        </Pressable>

                        <Text
                            style={{ color: '#fff', marginTop: 20 }}
                            onPress={() =>
                                navigation.navigate('VerifyingIdView')
                            }
                        >
                            GO NEXT (dev only)
                        </Text>
                    </View>
                )}
            </>

            <StatusBar style='light' />
        </View>
    );
};

export default TakePhotoView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    camera: {
        flex: 1,
    },
    photoOutlineWrapper: {
        paddingHorizontal: 10,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    photoOutline: {
        marginTop: 60,
        borderColor: '#fff',
        borderWidth: 1,
        width: '100%',
        height: 250,
        borderRadius: 5,
    },
    textWrapper: {
        marginTop: 50,
    },
    documentType: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 24,
        marginBottom: 20,
    },
    instructionsText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
    },
    takePictureBtnWrapper: {
        position: 'absolute',
        bottom: 50,
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    takePictureBtn: {
        width: 75,
        height: 75,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor: '#fff',
    },
    circle: {
        width: 71,
        height: 71,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor: '#fff',
        borderColor: '#000',
        borderWidth: 2,
    },
    clearBtn: {
        width: '100%',
        height: 40,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor: '#0566E9',
    },
    clearBtnText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
    },
    retakeBtn: {
        width: '100%',
        height: 40,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor: 'transparent',
    },
    retakeBtnText: {
        fontSize: 16,
        color: '#0566E9',
        fontWeight: 'bold',
    },
});
