import React from 'react';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import EnterPasscodeView from './EnterPasscodeView';
import LoginView from './LoginView';
import HeaderBackButton from '../atoms/HeaderBackButton';
import { View } from 'react-native-web';

const LoginStack = createNativeStackNavigator();

const LoginNav = ({ navigation }) => {
    const headerStyle = {
        backgroundColor: '#000',
        borderBottomColor: 'transparent',
    };

    return (
        <LoginStack.Navigator>
            <LoginStack.Screen
                name='LoginView'
                component={LoginView}
                options={{
                    animation: 'slide_from_bottom',
                    headerShown: true,
                    headerTitle: '',
                    headerStyle: headerStyle,
                    headerLeft: () => (
                        <HeaderBackButton
                            onPress={() => navigation.navigate('Intro')}
                        />
                    ),
                }}
            />
            <LoginStack.Screen
                name='EnterPasscode'
                component={EnterPasscodeView}
                options={{
                    animation: 'fade',
                    headerShown: true,
                    headerTitle: '',
                    headerStyle: headerStyle,
                    headerLeft: () => (
                        <HeaderBackButton
                            onPress={() =>
                                navigation.navigate('Login', {
                                    screen: 'LoginView',
                                })
                            }
                        />
                    ),
                }}
            />
        </LoginStack.Navigator>
    );
};

export default LoginNav;

const styles = StyleSheet.create({});
