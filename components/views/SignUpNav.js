import React from 'react';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HeaderBackButton from '../atoms/HeaderBackButton';
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
import OccupationView from './OccupationView';
import ReasonView from './ReasonView';
import CreatePasscodeView from './CreatePasscodeView';
import ConfirmPasscodeView from './ConfirmPasscodeView';
import ProofIdentityView from './ProofIdentityView';
import TakeIdPhotoView from './TakeIdPhotoView';
import VerifyingIdView from './VerifyingIdView';
import PlanSelectionView from './PlanSelectionView';
import DeliverCardView from './DeliverCardView';
import AddMoneyView from './AddMoneyView';

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
                                    screen: 'EnterNameView',
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
                                    screen: 'EnterDobView',
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
                                    screen: 'EnterEmailView',
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
                                    screen: 'SelfieInfoView',
                                })
                            }
                        />
                    ),
                }}
            />
            <SignUpStack.Screen
                name='OccupationView'
                component={OccupationView}
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
                                    screen: 'SelfieInfoView',
                                })
                            }
                        />
                    ),
                }}
            />
            <SignUpStack.Screen
                name='ReasonView'
                component={ReasonView}
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
                                    screen: 'OccupationView',
                                })
                            }
                        />
                    ),
                }}
            />
            <SignUpStack.Screen
                name='CreatePasscodeView'
                component={CreatePasscodeView}
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
                                    screen: 'ReasonView',
                                })
                            }
                        />
                    ),
                }}
            />
            <SignUpStack.Screen
                name='ConfirmPasscodeView'
                component={ConfirmPasscodeView}
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
                                    screen: 'CreatePasscodeView',
                                })
                            }
                        />
                    ),
                }}
            />
            <SignUpStack.Screen
                name='ProofIdentityView'
                component={ProofIdentityView}
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
                                    screen: 'CreatePasscodeView',
                                })
                            }
                        />
                    ),
                }}
            />
            <SignUpStack.Screen
                name='TakeIdPhotoView'
                component={TakeIdPhotoView}
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
                                    screen: 'ProofIdentityView',
                                })
                            }
                        />
                    ),
                }}
            />
            <SignUpStack.Screen
                name='VerifyingIdView'
                component={VerifyingIdView}
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
                                    screen: 'ProofIdentityView',
                                })
                            }
                        />
                    ),
                }}
            />
            <SignUpStack.Screen
                name='PlanSelectionView'
                component={PlanSelectionView}
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
                                    screen: 'VerifyingIdView',
                                })
                            }
                        />
                    ),
                }}
            />
            <SignUpStack.Screen
                name='DeliverCardView'
                component={DeliverCardView}
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
                                    screen: 'PlanSelectionView',
                                })
                            }
                        />
                    ),
                }}
            />
            <SignUpStack.Screen
                name='AddMoneyView'
                component={AddMoneyView}
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
                                    screen: 'DeliverCardView',
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
