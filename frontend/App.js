/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Home from './screen/Home';
import {
  SafeAreaView,
} from 'react-native';
import WelcomeScreen from './screen/WelcomeScreen';
import CameraScreen from './screen/CameraScreen';
import CameraPreview from './screen/CameraPreview';
import DataProtection from './screen/DataProtection';
import ResultScreen from './screen/Result';
import CreateProfile from './screen/CreateProfile'; 
import Profile from './screen/Profile'; 
import ProfileCases from './screen/ProfileCases'; 
import AcneCaseInfo from './screen/AcneCaseInfo';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import WartzCaseInfo from './screen/WartzCaseInfo';
import EzcemaCaseInfo from './screen/EzcemaCaseInfo';
import BasalCaseInfo from './screen/BasalCaseInfo';
import NormalInfo from './screen/NormalInfo';

const Stack = createNativeStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator initialRouteName='WelcomeScreen'>
    <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{headerShown: false}}/>
    <Stack.Screen 
      name="DataPrivacyScreen" 
      component={DataProtection} 
      options={{headerShown: false}}/>
    <Stack.Screen 
      name="HomeScreen" 
      component={Home} 
      options={{
        title: "Home",
        headerShown: false
      }}/>
    <Stack.Screen 
      name="CameraScreen" 
      component={CameraScreen} 
      options={{
        title: "Camera",
        headerShown: false
      }}/>
    <Stack.Screen 
      name="CameraPreview" 
      component={CameraPreview} 
      options={{
        title: "Back",
        headerShown: true
      }}/>
    <Stack.Screen 
      name="Result" 
      component={ResultScreen} 
      options={{
        title:"Result",
        headerShown: false
      }}/>
    <Stack.Screen 
      name="CreateProfile" 
      component={CreateProfile} 
      options={{
        title:"CreateProfile",
        headerShown: false
      }}/>
    <Stack.Screen 
      name="Profile" 
      component={Profile} 
      options={{
        title:"Profile",
        headerShown: false
      }}/>
    <Stack.Screen 
      name="ProfileCases" 
      component={ProfileCases} 
      options={{
        title:"Profile Cases",
        headerShown: false
      }}/>
    <Stack.Screen 
      name="AcneCaseInfo" 
      component={AcneCaseInfo} 
      options={{
        title:"Acne Case Info",
        headerShown: false
      }}/>
    <Stack.Screen 
      name="BasalCaseInfo" 
      component={BasalCaseInfo} 
      options={{
        title:"Basal Case Info",
        headerShown: false
      }}/>
    <Stack.Screen 
      name="EzcemaCaseInfo" 
      component={EzcemaCaseInfo} 
      options={{
        title:"Ezcema Case Info",
        headerShown: false
      }}/>
    <Stack.Screen 
      name="WartzCaseInfo" 
      component={WartzCaseInfo} 
      options={{
        title:"Wartz Case Info",
        headerShown: false
      }}/>
    <Stack.Screen 
      name="NormalInfo" 
      component={NormalInfo} 
      options={{
        title:"Normal Case Info",
        headerShown: false
      }}/>
  </Stack.Navigator>
)

const App = () => {

  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
