import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import * as SplashScreen from 'expo-splash-screen';
import CountryPickView from './components/views/CountryPickView';

import IntroView from './components/views/IntroView';
import LoginView from './components/views/LoginView';
import SignUpView from './components/views/SignUpView';

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
                    name='CountryPick'
                    component={CountryPickView}
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
                        headerShown: true,
                        animation: 'slide_from_bottom',
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
