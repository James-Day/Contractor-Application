//import { StatusBar } from "expo-status-bar";
import { React, Component } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "./app/screens/SignUpScreens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//Screens
import SignUpScreen from "./app/screens/SignUpScreens/ContractorSignUpScreen";
import ContractorOrRecruiter from "./app/screens/SignUpScreens/ControactorOrRecruiter";
import RecruiterSignUpScreen from "./app/screens/SignUpScreens/RecruiterSignUpScreen";
import RecruiterCommunicationScreen from "./app/screens/CommunicationScreens/CommunicationRecruiterScreen";
import TextScreen from "./app/screens/CommunicationScreens/TextScreen";

import ContractorTabs from "./app/screens/HomeScreens/ContractorTabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RecruiterTabs from "./app/screens/HomeScreens/RecruiterTabs";
import DesignRepresentRequest from "./app/screens/CommunicationScreens/DesignRepresentRequestScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const welcomeScreenName = "Home";
const settingsName = "settings";
const detailsName = "details";

//function App() {
// return <MainContainer />;
//}
//export default App;
/*export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={welcomeScreenName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;
            if (rn === welcomeScreenName) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === detailsName) {
              iconName = focused ? "list" : "list-outline";
            } else if (rn === settingsName) {
              iconName = focused ? "settings" : "settings-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen
          name={welcomeScreenName}
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen name={detailsName} component={DetailsScreen} />
        <Tab.Screen name={settingsName} component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}*/
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={welcomeScreenName}
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ContractorOrRecruiter"
          component={ContractorOrRecruiter}
        />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen
          name="RecruiterSignUp"
          component={RecruiterSignUpScreen}
        />

        <Stack.Screen
          name="Profile"
          component={ContractorTabs}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="RecruiterProfile"
          component={RecruiterTabs}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="TextScreen"
          component={TextScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen name="DesignRequest" component={DesignRepresentRequest} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
