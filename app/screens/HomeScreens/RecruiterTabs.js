import { React } from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import SettingsScreen from "../SettingsScreens/SettingsScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import RecruiterHomeScreen from "./RecruiterHomeScreen";
import RecruiterCommunicationScreen from "../CommunicationScreens/CommunicationRecruiterScreen";

const recruiterCommunicationName = "Communication";
const profileName = "profile";
const settingsName = "settings";

const Tab = createBottomTabNavigator();

const RecruiterTabs = ({ route, navigation }) => {
  const currentRecruiter = route.params.response;
  return (
    <Tab.Navigator
      initialRouteName={recruiterCommunicationName} //change to homescreen
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;
          if (rn === recruiterCommunicationName) {
            iconName = focused ? "chatbox" : "chatbox-outline";
          } else if (rn === profileName) {
            iconName = focused ? "home" : "home-outline";
          } else if (rn === settingsName) {
            iconName = focused ? "settings" : "settings-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name={recruiterCommunicationName}
        component={RecruiterCommunicationScreen}
        options={{ headerShown: false }}
        //initialParams={{response: currentRecruiter}}//change this to a second response that hold communication messages
      />
      <Tab.Screen
        name={profileName}
        component={RecruiterHomeScreen}
        options={{ headerShown: false }}
        initialParams={{ response: currentRecruiter }}
      />
      <Tab.Screen
        name={settingsName}
        component={SettingsScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-start",
    flexDirection: "column",
    alignItems: "center",
    top: 30,
  },
});
export default RecruiterTabs;
