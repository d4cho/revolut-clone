import React, { useState, useEffect, useRef } from 'react';
import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { Camera, CameraType } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const TakeSelfieView = ({ navigation }) => {
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

        // navigation.navigate('SelfieInfoView');
    };

    return (
        <View style={styles.container}>
            <Camera
                ref={cameraRef}
                style={styles.camera}
                type={CameraType.front}
            ></Camera>

            {isPaused ? (
                <>
                    <View
                        style={{
                            position: 'absolute',
                            top: -142,
                            bottom: -142,
                            left: -265,
                            right: -265,
                            backgroundColor: 'transparent',

                            borderWidth: 400,
                            borderRadius: 1000,
                            borderColor: '#000',
                            // opacity: 0.5,
                        }}
                    />

                    <View style={styles.overlay}>
                        <View>
                            <Text
                                style={styles.header}
                                onPress={() =>
                                    navigation.navigate('SelfieInfoView')
                                }
                            >
                                All clear?
                            </Text>
                            <Text style={styles.subHeader}>
                                Take another picture if your selfie is blurry or
                                unclear.
                            </Text>
                        </View>
                    </View>

                    <View style={styles.takePictureBtnWrapper}>
                        <Pressable
                            style={styles.clearBtn}
                            onPress={() => {
                                navigation.navigate('TakeSelfieView');
                            }}
                        >
                            <Ionicons
                                name='checkmark'
                                size={24}
                                color='#fff'
                                style={{ marginRight: 10 }}
                            />
                            <Text style={styles.clearBtnText}>
                                My selfie is clear
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
                                Retake photo
                            </Text>
                        </Pressable>
                    </View>
                </>
            ) : (
                <>
                    <View style={styles.overlay}>
                        <View>
                            <Text style={styles.header}>We can see you</Text>
                            <Text style={styles.subHeader}>
                                Take your selfie
                            </Text>
                        </View>
                    </View>

                    <View style={styles.faceOutlineWrapper}>
                        <View style={styles.faceOutline}></View>
                    </View>

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
                                navigation.navigate('OccupationView')
                            }
                        >
                            GO NEXT (dev only)
                        </Text>
                    </View>
                </>
            )}

            <StatusBar style='light' />
        </View>
    );
};

export default TakeSelfieView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    camera: {
        flex: 1,
    },
    overlay: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    header: {
        width: '100%',
        color: '#fff',
        fontSize: 35,
        fontWeight: 'bold',
    },
    subHeader: {
        width: '100%',
        marginTop: 10,
        marginBottom: 20,
        color: '#fff',
        fontSize: 14,
    },
    faceOutlineWrapper: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    faceOutline: {
        borderColor: '#32E08E',
        borderWidth: 5,
        width: 150,
        height: 250,
        borderRadius: 100,
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
