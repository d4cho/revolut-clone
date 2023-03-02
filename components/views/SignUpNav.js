import React from 'react';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HeaderBackButton from '../atoms/HeaderBackButton';
import EnterPasscodeView from './EnterPasscodeView';
import SignUpView from './SignUpView';
import PhoneCodeView from './PhoneCodeView';
import CountryPickView from './CountryPickView';
import AddressSearchView from './AddressSearchView';
import HomeAddressView from './HomeAddressView';
import EnterNameView from './EnterNameView';
import EnterDobView from './EnterDobView';
import EnterEmailView from './EnterEmailView';
import SelfieInfoView from './SelfieInfoView';
import TakeSelfieView from './TakeSelfieView';

const SignUpStack = createNativeStackNavigator();

const LoginNav = ({ navigation }) => {
    return (
        <SignUpStack.Navigator>
            <SignUpStack.Screen
                name='SignUpView'
                component={SignUpView}
                options={{
                    animation: 'slide_from_bottom',
                    headerShown: true,
                    headerTitle: '',
                    headerStyle: {
                        backgroundColor: '#000',
                    },
                    headerLeft: () => (
                        <HeaderBackButton
                            onPress={() => navigation.navigate('Intro')}
                        />
                    ),
                }}
            />
            <SignUpStack.Screen
                name='PhoneCodeView'
                component={PhoneCodeView}
                options={{
                    animation: 'slide_from_right',
                    headerShown: true,
                    headerTitle: '',
                    headerStyle: {
                        backgroundColor: '#000',
                    },
                    headerLeft: () => (
                        <HeaderBackButton
                            onPress={() =>
                                navigation.navigate('SignUp', {
                                    screen: 'SignUpView',
                                })
                            }
                        />
                    ),
                }}
            />
            <SignUpStack.Screen
                name='CountryPickView'
                component={CountryPickView}
                options={{
                    animation: 'slide_from_right',
                    headerShown: true,
                    headerTitle: '',
                    headerStyle: {
                        backgroundColor: '#000',
                    },
                    headerLeft: () => (
                        <HeaderBackButton
                            onPress={() =>
                                navigation.navigate('SignUp', {
                                    screen: 'SignUpView',
                                })
                            }
                        />
                    ),
                }}
            />
            <SignUpStack.Screen
                name='AddressSearchView'
                component={AddressSearchView}
                options={{
                    animation: 'slide_from_right',
                    headerShown: true,
                    headerTitle: '',
                    headerStyle: {
                        backgroundColor: '#000',
                    },
                    headerLeft: () => (
                        <HeaderBackButton
                            onPress={() =>
                                navigation.navigate('SignUp', {
                                    screen: 'SignUpView',
                                })
                            }
                        />
                    ),
                }}
            />
            <SignUpStack.Screen
                name='HomeAddressView'
                component={HomeAddressView}
                options={{
                    animation: 'slide_from_right',
                    headerShown: true,
                    headerTitle: '',
                    headerStyle: {
                        backgroundColor: '#000',
                    },
                    headerLeft: () => (
                        <HeaderBackButton
                            onPress={() =>
                                navigation.navigate('SignUp', {
                                    screen: 'SignUpView',
                                })
                            }
                        />
                    ),
                }}
            />
            <SignUpStack.Screen
                name='EnterNameView'
                component={EnterNameView}
                options={{
                    animation: 'slide_from_right',
                    headerShown: true,
                    headerTitle: '',
                    headerStyle: {
                        backgroundColor: '#000',
                    },
                    headerLeft: () => (
                        <HeaderBackButton
                            onPress={() =>
                                navigation.navigate('SignUp', {
                                    screen: 'SignUpView',
                                })
                            }
                        />
                    ),
                }}
            />
            <SignUpStack.Screen
                name='EnterDobView'
                component={EnterDobView}
                options={{
                    animation: 'slide_from_right',
                    headerShown: true,
                    headerTitle: '',
                    headerStyle: {
                        backgroundColor: '#000',
                    },
                    headerLeft: () => (
                        <HeaderBackButton
                            onPress={() =>
                                navigation.navigate('SignUp', {
                                    screen: 'SignUpView',
                                })
                            }
                        />
                    ),
                }}
            />
            <SignUpStack.Screen
                name='EnterEmailView'
                component={EnterEmailView}
                options={{
                    animation: 'slide_from_right',
                    headerShown: true,
                    headerTitle: '',
                    headerStyle: {
                        backgroundColor: '#000',
                    },
                    headerLeft: () => (
                        <HeaderBackButton
                            onPress={() =>
                                navigation.navigate('SignUp', {
                                    screen: 'SignUpView',
                                })
                            }
                        />
                    ),
                }}
            />
            <SignUpStack.Screen
                name='SelfieInfoView'
                component={SelfieInfoView}
                options={{
                    animation: 'slide_from_right',
                    headerShown: true,
                    headerTitle: '',
                    headerStyle: {
                        backgroundColor: '#000',
                    },
                    headerLeft: () => (
                        <HeaderBackButton
                            onPress={() =>
                                navigation.navigate('SignUp', {
                                    screen: 'SignUpView',
                                })
                            }
                        />
                    ),
                }}
            />
            <SignUpStack.Screen
                name='TakeSelfieView'
                component={TakeSelfieView}
                options={{
                    animation: 'slide_from_right',
                    headerShown: true,
                    headerTitle: '',
                    headerStyle: {
                        backgroundColor: '#000',
                    },
                    headerLeft: () => (
                        <HeaderBackButton
                            onPress={() =>
                                navigation.navigate('SignUp', {
                                    screen: 'SignUpView',
                                })
                            }
                        />
                    ),
                }}
            />

            <SignUpStack.Screen
                name='EnterPasscode'
                component={EnterPasscodeView}
                options={{
                    animation: 'fade',
                    headerShown: true,
                    headerTitle: '',
                    headerStyle: {
                        backgroundColor: '#000',
                    },
                    headerLeft: () => (
                        <HeaderBackButton
                            onPress={() =>
                                navigation.navigate('SignUp', {
                                    screen: 'SignUpView',
                                })
                            }
                        />
                    ),
                }}
            />
        </SignUpStack.Navigator>
    );
};

export default LoginNav;

const styles = StyleSheet.create({});
