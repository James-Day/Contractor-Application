//import { StatusBar } from "expo-status-bar";
import { React, Component } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "./app/screens/SignUpScreens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//Screens
import ContractorHomeScreen from "./app/screens/HomeScreens/ContractorHomeScreen";
import SignUpScreen from "./app/screens/SignUpScreens/ContractorSignUpScreen";
import ContractorOrRecruiter from "./app/screens/SignUpScreens/ControactorOrRecruiter";
import RecruiterSignUpScreen from "./app/screens/SignUpScreens/RecruiterSignUpScreen";
import RecruiterHomeScreen from "./app/screens/HomeScreens/RecruiterHomeScreen";
import ContractorCommunicationScreen from "./app/screens/CommunicationScreens/CommunicationContractorScreen";
import RecruiterCommunicationScreen from "./app/screens/CommunicationScreens/CommunicationRecruiterScreen";
import TextScreen from "./app/screens/CommunicationScreens/TextScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ContractorOrRecruiter"
          component={ContractorOrRecruiter}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen
          name="RecruiterSignUp"
          component={RecruiterSignUpScreen}
        />
        <Stack.Screen name="Profile" component={ContractorHomeScreen} />
        <Stack.Screen
          name="RecruiterProfile"
          component={RecruiterHomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ContractorCommunication"
          component={ContractorCommunicationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RecruiterCommunication"
          component={RecruiterCommunicationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TextScreen"
          component={TextScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
