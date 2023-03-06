import React, { useState, useEffect } from 'react';
import {
    KeyboardAvoidingView,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import PlanCarousel from '../molecules/PlanCarousel';

import plan1Img from '../../assets/images/plan1.jpg';
import plan2Img from '../../assets/images/plan2.jpg';
import plan3Img from '../../assets/images/plan3.jpg';
import plan4Img from '../../assets/images/plan4.jpg';

const PLAN_DATA = [
    {
        title: 'Metal',
        desc: 'Get the power of the ultimate plan',
        img: plan1Img,
        isPopular: false,
        price: '$13.99',
    },
    {
        title: 'Premium',
        desc: 'Upgrade to a global lifestyle',
        img: plan2Img,
        isPopular: true,
        price: '$7.99',
    },
    {
        title: 'Plus',
        desc: 'Boost your everyday finances',
        img: plan3Img,
        isPopular: false,
        price: '$2.99',
    },
    {
        title: 'Standard',
        desc: 'Your financial life, in one app',
        img: plan4Img,
        isPopular: false,
        price: 'free',
    },
];

const PlanSelectionView = ({ navigation }) => {
    const [selectedPlan, setSelectedPlan] = useState(0);

    return (
        <View style={styles.container}>
            <View style={styles.carouselWrapper}>
                <PlanCarousel
                    planData={PLAN_DATA}
                    setSelectedPlan={setSelectedPlan}
                />
            </View>
            <ScrollView style={styles.accordionWrapper}>
                <Text style={styles.header}>{'Accordion' + selectedPlan}</Text>
                <Text style={styles.header}>{'Accordion' + selectedPlan}</Text>
                <Text style={styles.header}>{'Accordion' + selectedPlan}</Text>
                <Text style={styles.header}>{'Accordion' + selectedPlan}</Text>
                <Text style={styles.header}>{'Accordion' + selectedPlan}</Text>
                <Text style={styles.header}>{'Accordion' + selectedPlan}</Text>
                <Text style={styles.header}>{'Accordion' + selectedPlan}</Text>
                <Text style={styles.header}>{'Accordion' + selectedPlan}</Text>
                <Text style={styles.header}>{'Accordion' + selectedPlan}</Text>
                <Text style={styles.header}>{'Accordion' + selectedPlan}</Text>
                <Text style={styles.header}>{'Accordion' + selectedPlan}</Text>
                <Text style={styles.header}>{'Accordion' + selectedPlan}</Text>
                <Text style={styles.header}>{'Accordion' + selectedPlan}</Text>
                <Text style={styles.header}>{'Accordion' + selectedPlan}</Text>
                <Text style={styles.header}>{'Accordion' + selectedPlan}</Text>
                <Text style={styles.header}>{'Accordion' + selectedPlan}</Text>
                <Text style={styles.header}>{'Accordion' + selectedPlan}</Text>
            </ScrollView>

            {/* Continue Button */}
            <View style={styles.continueBtnWrapper}>
                <Pressable
                    style={styles.continueBtn}
                    onPress={() => {
                        navigation.navigate('VerifyingIdView');
                    }}
                >
                    <Text style={styles.continueBtnText}>
                        {`Get ${PLAN_DATA[selectedPlan].title} for ${PLAN_DATA[selectedPlan].price}`}
                    </Text>
                </Pressable>
            </View>

            <StatusBar style='light' />
        </View>
    );
};

export default PlanSelectionView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
    },
    carouselWrapper: {
        marginBottom: 10,
        flex: 2 / 3,
    },
    accordionWrapper: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 10,
        backgroundColor: 'blue',
    },
    header: {
        color: '#fff',
        fontSize: 35,
        fontWeight: 'bold',
    },
    continueBtnWrapper: {
        position: 'absolute',
        width: '100%',
        bottom: 50,
    },
    continueBtn: {
        marginLeft: 10,
        marginRight: 10,
        height: 40,
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
});
