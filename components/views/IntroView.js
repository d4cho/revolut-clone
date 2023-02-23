import React, { useState, useEffect } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Button from '../atoms/Button';
import ProgressBar from '../atoms/ProgressBar';
import IntroPage from '../molecules/IntroPage';

const INTRO_PAGES = [
    {
        heading: 'Managing money is easy with Revolut',
    },
    {
        heading: 'Control your card security in app',
    },
    {
        heading: 'Send cash abroad, hassle-free',
    },
    {
        heading: 'Great foreign exchange rates',
        subHeading: 'In 40+ currencies',
    },
    {
        heading: 'Your money is in safe hands',
    },
    {
        heading: 'Take control with budgeting tools',
    },
    {
        heading: `Spend smarter, daily. Let's go!`,
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

    return (
        <View style={styles.container}>
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
                    nextPageHandler={nextPageHandler}
                    prevPageHandler={prevPageHandler}
                />
            </View>

            <View style={styles.buttonsWrapper}>
                <Button
                    text='Login'
                    handlePress={() => {
                        navigation.navigate('Test');
                    }}
                    theme='dark'
                />
                <Button
                    text='Sign up'
                    handlePress={() => {
                        navigation.navigate('Test');
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
        backgroundColor: '#0566ED', // blue
        // backgroundColor: '#815CFD', // purple
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
        backgroundColor: 'green',
    },
    buttonsWrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
});
