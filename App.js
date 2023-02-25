import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import * as SplashScreen from 'expo-splash-screen';

import IntroView from './components/views/IntroView';
import LoginView from './components/views/LoginView';
import SignUpView from './components/views/SignUpView';
import EnterPasscodeView from './components/views/EnterPasscodeView';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 1000);

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='Intro'
                    component={IntroView}
                    options={{
                        // title: 'Welcome',
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name='Login'
                    component={LoginView}
                    options={{
                        animation: 'slide_from_bottom',
                        headerShown: true,
                        headerTitle: '',
                        headerBackTitleVisible: false,
                        headerStyle: {
                            backgroundColor: '#000',
                        },
                    }}
                />
                <Stack.Screen
                    name='SignUp'
                    component={SignUpView}
                    options={{
                        animation: 'slide_from_bottom',
                        headerShown: true,
                        headerTitle: '',
                        headerBackTitleVisible: false,
                        headerStyle: {
                            backgroundColor: '#000',
                        },
                    }}
                />
                <Stack.Screen
                    name='EnterPasscode'
                    component={EnterPasscodeView}
                    options={{
                        animation: 'fade',
                        headerShown: true,
                        headerTitle: '',
                        headerBackTitleVisible: false,
                        headerStyle: {
                            backgroundColor: '#000',
                        },
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
