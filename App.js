//import { StatusBar } from "expo-status-bar";
import { React, Component } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import ViewImageScreen from "./app/screens/practice";
import WelcomeScreen from "./app/screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//Screens
import ContractorHomeScreen from "./app/screens/ContractorHomeScreen";
import SignUpScreen from "./app/screens/SignUpScreen";
import ContractorOrRecruiter from "./app/screens/ControactorOrRecruiter";
import RecruiterSignUpScreen from "./app/screens/RecruiterSignUpScreen";
import RecruiterHomeScreen from "./app/screens/RecruiterHomeScreen";

const Stack = createNativeStackNavigator();

class Home extends Component {
  maybe = "james";
  render() {
    return <Text> USER {this.maybe}</Text>;
  }
}
class ProfileScreen extends Component {
  maybe = "james";
  render() {
    return <Text> profile {this.maybe}</Text>;
  }
}

const HomeScreen = ({ navigation }) => {
  return (
    <Button
      title="Go to Jane's profile"
      onPress={() => navigation.navigate("Profile")}
    />
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Contractor"
          component={RecruiterHomeScreen}
          options={{ headerShown: false }} //can add a title here if I'd like
        />

        <Stack.Screen
          name="Home"
          component={WelcomeScreen}
          options={{ headerShown: false }} //can add a title here if I'd like
        />
        <Stack.Screen name="Profile" component={ContractorHomeScreen} />
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
/* notes

function sum(a,b){
  return a+b
}

this is the same as below 

// The arrow tells you that this is a function
let sum2 = (a,b) =>{
  return a+b
}

also the same as (less important)
let sum2 = (a,b) => a+b
//return statement is assumed.

if there is only one parameter 
let ispositiveVar = number =>{ // if there is only one parameter then you don't need parenthesis
return number>=0
}
if you are passing a function it would look like this
document.addEventListener('click', function(){
console.log('click');
})
The arrow version of this looks like
document.addEventListener('click', () =>{
console.log('click');
})

*/
