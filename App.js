import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import * as SplashScreen from 'expo-splash-screen';

import IntroView from './components/views/IntroView';
import Test from './components/views/Test';

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
                    name='Test'
                    component={Test}
                    options={{
                        headerShown: true,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
