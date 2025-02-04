import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../../screens/splash/splash';
import LoginScreen from '../../screens/auth/login';
import SignUpScreen from '../../screens/auth/signUp';
import DashboardScreen from '../../screens/dashboard/dashboard';
import OnBoardingScreen from '../../screens/onBoarding/onBoarding';

const Stack = createStackNavigator();
export default function StackRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="onBoarding" component={OnBoardingScreen} />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="splash" component={SplashScreen} />
        <Stack.Screen name="sign-up" component={SignUpScreen} />
        <Stack.Screen name="dashboard" component={DashboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
