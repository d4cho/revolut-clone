import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Button from '../atoms/Button';
import ProgressBar from '../atoms/ProgressBar';
import IntroPage from '../molecules/IntroContent';

// images
import managingMoney from '../../assets/images/intro/managing-money.png';
import controlCard from '../../assets/images/intro/control-card.jpeg';
import sendCash from '../../assets/images/intro/send-cash.jpeg';
import exchangeRate from '../../assets/images/intro/exchange-rate.jpeg';
import safeHands from '../../assets/images/intro/safe-hands.jpeg';
import budgetingTools from '../../assets/images/intro/budgeting-tools.png';
import spendSmarter from '../../assets/images/intro/spend-smarter.jpeg';

const INTRO_PAGES = [
    {
        heading: 'Managing money is easy with Revolut',
        image: managingMoney,
        bgColor: '#7f5cf6',
    },
    {
        heading: 'Control your card security in app',
        image: controlCard,
        bgColor: '#7f5cf6',
    },
    {
        heading: 'Send cash abroad, hassle-free',
        image: sendCash,
        bgColor: '#027DFB',
    },
    {
        heading: 'Great foreign exchange rates',
        subHeading: 'In 40+ currencies',
        image: exchangeRate,
        bgColor: '#7f5cf6',
    },
    {
        heading: 'Your money is in safe hands',
        image: safeHands,
        bgColor: '#7f5cf6',
    },
    {
        heading: 'Take control with budgeting tools',
        image: budgetingTools,
        bgColor: '#027DFB',
    },
    {
        heading: `Spend smarter, daily. Let's go!`,
        image: spendSmarter,
        bgColor: '#7f5cf6',
    },
];

const animationDuration = 5000;

const IntroView = ({ navigation }) => {
    const [shownPage, setShownPage] = useState(0);

    let timer;

    useEffect(() => {
        timer = setTimeout(() => {
            let nextPage = (shownPage + 1) % INTRO_PAGES.length;
            setShownPage(nextPage);
        }, animationDuration);
    }, [shownPage]);

    const nextPageHandler = () => {
        if (timer) {
            clearTimeout(timer);
        }
        let nextPage = (shownPage + 1) % INTRO_PAGES.length;
        setShownPage(nextPage);
    };

    const prevPageHandler = () => {
        if (shownPage > 0) {
            if (timer) {
                clearTimeout(timer);
            }
            let prevPage = (shownPage - 1) % INTRO_PAGES.length;
            setShownPage(prevPage);
        }
    };

    // const getBgColor = () => {
    //     if ([0, 2, 3, 6].includes(shownPage)) {
    //         return '#027DFB'; // blue
    //     } else {
    //         return '#7f5cf6'; // purple
    //     }
    // };

    return (
        <View
            style={[
                styles.container,
                {
                    // backgroundColor: getBgColor(),
                    backgroundColor: INTRO_PAGES[shownPage].bgColor,
                },
            ]}
        >
            <View style={styles.progressWrapper}>
                {INTRO_PAGES.map((page, idx) => {
                    const start = idx === shownPage;
                    const animationDone = idx < shownPage;

                    return (
                        <React.Fragment key={idx}>
                            <ProgressBar
                                duration={animationDuration}
                                start={start}
                                animationDone={animationDone}
                            />
                        </React.Fragment>
                    );
                })}
            </View>

            <Text style={styles.welcome}>Welcome to Revolut</Text>

            <View style={styles.contentWrapper}>
                <IntroPage
                    heading={INTRO_PAGES[shownPage].heading}
                    subHeading={INTRO_PAGES[shownPage]?.subHeading}
                    image={INTRO_PAGES[shownPage].image}
                    nextPageHandler={nextPageHandler}
                    prevPageHandler={prevPageHandler}
                />
            </View>

            <View style={styles.buttonsWrapper}>
                <Button
                    text='Login'
                    handlePress={() => {
                        navigation.navigate('Login');
                    }}
                    theme='dark'
                />
                <Button
                    text='Sign up'
                    handlePress={() => {
                        navigation.navigate('SignUp');
                    }}
                />
            </View>

            <StatusBar style='light' />
        </View>
    );
};

export default IntroView;

const styles = StyleSheet.create({
    container: {
        paddingTop: 58,
        backgroundColor: '#0566E9', // blue
        flex: 1,
    },
    progressWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginLeft: 5,
        marginRight: 5,
    },
    welcome: {
        marginTop: 10,
        marginLeft: 10,
        marginBottom: 20,
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    contentWrapper: {
        flex: 4,
    },
    buttonsWrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
});
