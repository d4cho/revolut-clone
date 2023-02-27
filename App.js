import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import * as SplashScreen from 'expo-splash-screen';

import IntroView from './components/views/IntroView';
import LoginNav from './components/views/LoginNav';
import SignUpNav from './components/views/SignUpNav';

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
                    component={LoginNav}
                    options={{
                        animation: 'slide_from_bottom',
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name='SignUp'
                    component={SignUpNav}
                    options={{
                        animation: 'slide_from_bottom',
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
