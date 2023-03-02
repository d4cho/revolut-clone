import React, { useState, useEffect, useRef } from 'react';
import {
    KeyboardAvoidingView,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { Camera, CameraType } from 'expo-camera';

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

            <View style={styles.overlay}>
                <View>
                    <Text
                        style={styles.header}
                        onPress={() => navigation.navigate('SelfieInfoView')}
                    >
                        We can see you
                    </Text>
                    <Text style={styles.subHeader}>Take your selfie</Text>
                </View>
            </View>

            <View style={styles.faceOutlineWrapper}>
                <View style={styles.faceOutline}></View>
            </View>

            <View style={styles.takePictureBtnWrapper}>
                {/* Continue Button */}
                <Pressable
                    style={styles.continueBtn}
                    onPress={() => handleButtonClick()}
                >
                    <View style={styles.circle}></View>
                </Pressable>
            </View>

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
    },
    continueBtn: {
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
});
