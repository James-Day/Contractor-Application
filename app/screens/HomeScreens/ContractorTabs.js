import { React } from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import SettingsScreen from "../SettingsScreens/SettingsScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import ContractorCommunicationScreen from "../CommunicationScreens/CommunicationContractorScreen";
import ContractorHomeScreen from "./ContractorHomeScreen";

const contractorCommunicationName = "Communication";
const profileName = "profile";
const settingsName = "settings";

const Tab = createBottomTabNavigator();

const ContractorTabs = ({ route, navigation }) => {
  return (
    <Tab.Navigator
      initialRouteName={contractorCommunicationName} //change to homescreen
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;
          if (rn === contractorCommunicationName) {
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
        name={contractorCommunicationName}
        component={ContractorCommunicationScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={profileName}
        component={ContractorHomeScreen}
        options={{ headerShown: false }}
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
export default ContractorTabs;