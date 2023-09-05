import {
    StyleSheet,
    Text,
    View,
    Pressable,
    ImageBackground,
} from 'react-native';
import React from 'react';

const IntroContent = ({
    heading,
    subHeading,
    image,
    nextPageHandler,
    prevPageHandler,
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.headingsWrapper}>
                <Text style={styles.heading}>{heading}</Text>
                <Text style={styles.subHeading}>{subHeading}</Text>
            </View>

            <View style={styles.mediaWrapper}>
                {image ? (
                    <View style={styles.image}>
                        <ImageBackground
                            source={image}
                            resizeMode='stretch'
                            imageStyle={{
                                borderRadius: 10,
                                height: 280,
                            }}
                        ></ImageBackground>
                    </View>
                ) : (
                    <View style={styles.video}>
                        <Text style={{ color: '#000' }}>Video</Text>
                    </View>
                )}
            </View>

            {/* next/prev page handler */}
            <View style={styles.pressableView}>
                <Pressable
                    onPress={prevPageHandler}
                    style={{ width: '50%', height: '100%' }}
                ></Pressable>
                <Pressable
                    onPress={nextPageHandler}
                    style={{ width: '50%', height: '100%' }}
                ></Pressable>
            </View>
        </View>
    );
};

export default IntroContent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    },
    headingsWrapper: {
        flex: 1,
    },
    heading: {
        marginLeft: 20,
        marginRight: 40,
        fontSize: 35,
        fontWeight: 'bold',
        color: '#fff',
    },
    subHeading: {
        marginLeft: 20,
        marginTop: 20,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
    mediaWrapper: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    video: {
        width: 250,
        height: 280,
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    image: {
        width: 250,
        height: 280,
        borderRadius: 10,
    },
    pressableView: {
        position: 'absolute',
        flexDirection: 'row',
        width: '100%',
        height: '100%',
    },
});
