import React, { useRef } from 'react';
import {
    Dimensions,
    StyleSheet,
    Text,
    View,
    ImageBackground,
} from 'react-native';

import Carousel from 'react-native-reanimated-carousel';
import { MaterialIcons } from '@expo/vector-icons';

const PlanCarousel = ({ planData, setSelectedPlan }) => {
    const carouselRef = useRef(null);
    const width = Dimensions.get('window').width;

    const renderItem = (info) => {
        const { item } = info;
        const { title, desc, img, isPopular } = item;

        return (
            <View style={styles.itemWrapper}>
                <ImageBackground
                    source={img}
                    resizeMode='cover'
                    style={styles.image}
                    imageStyle={{
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        opacity: 0.7,
                    }}
                >
                    <Text style={styles.desc}>{desc}</Text>
                </ImageBackground>
                <View style={styles.titleWrapper}>
                    <Text style={styles.title}>{title}</Text>
                    {isPopular && (
                        <View style={styles.popularWrapper}>
                            <MaterialIcons
                                name='bolt'
                                size={30}
                                color='#E34EA1'
                            />
                            <Text style={styles.popular}>Popular</Text>
                        </View>
                    )}
                </View>
            </View>
        );
    };

    return (
        <Carousel
            ref={carouselRef}
            loop={true}
            width={width}
            data={planData}
            scrollAnimationDuration={200}
            onSnapToItem={(index) => {
                setSelectedPlan(index);
            }}
            renderItem={(info) => renderItem(info)}
            mode='parallax'
            modeConfig={{
                parallaxScrollingScale: 0.9,
                parallaxScrollingOffset: 50,
            }}
        />
    );
};

export default PlanCarousel;

const styles = StyleSheet.create({
    itemWrapper: {
        flex: 1,
        // borderColor: 'red',
        // borderWidth: 2,
        borderRadius: 10,
        overflow: 'hidden',
    },
    image: {
        flex: 3,
        justifyContent: 'flex-end',
    },
    desc: {
        color: '#fff',
        fontSize: 35,
        fontWeight: 'bold',
        paddingLeft: 20,
        paddingBottom: 20,
    },
    titleWrapper: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        backgroundColor: '#fff',
    },
    title: {
        color: '#000',
        fontSize: 30,
        fontWeight: 'bold',
    },
    popularWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    popular: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#E34EA1',
    },
});
