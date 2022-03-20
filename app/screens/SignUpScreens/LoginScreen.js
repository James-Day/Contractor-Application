import { React, Component, useState } from "react";
import {
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
} from "react-native";

var apiRequest = function (UserName, Password) {
  //change to async

  return fetch(
    //return the promise
    `https://contractorwebapi.azurewebsites.net/api/users/${UserName}/${Password}`
  ).then(function (response) {
    return response.json(); //proccess and return this value
  });
};

const WelcomeScreen = ({ navigation }) => {
  const [userName, setName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <ImageBackground
      style={styles.background}
      source={require("./assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("./assets/logoPlaceHolder.png")}
        />
        <Text>Login Please</Text>
        <TextInput
          style={styles.userNameInput}
          placeholder="Username                    "
          placeholderTextColor="white" //move some of these to the styles?
          color="white"
          maxLength={25}
          onChangeText={(val) => setName(val)}
        />
        <TextInput
          name="password"
          style={styles.passwordInput}
          placeholder="Password                    "
          placeholderTextColor="white" //move some of these to the styles?
          color="white"
          maxLength={25}
          onChangeText={(val) => setPassword(val)}
        />
      </View>

      <View style={styles.registerButton}>
        <Button //button can't use styles if I want to make this look nice use Pressable
          title="Login"
          onPress={() => {
            if ((userName == "") | (password == "")) {
              Alert.alert(
                "400 Error",
                "Make sure you enter both a username and password"
              );
            } else {
              let x = apiRequest(userName, password)
                .then(function (response) {
                  //console.log(response);
                  console.log(typeof response);
                  if (response == undefined || response.status == 404) {
                    //if not found
                    Alert.alert(
                      "Account not found",
                      "make sure that your username and password are correct"
                    );
                  } else if (response.status == 400) {
                    Alert.alert(
                      "400 Error",
                      "Unknown error, make sure you enter both a username and password"
                    );
                  } else {
                    //account found, send to profile screen
                    if (response.isContractor == true) {
                      return navigation.navigate("Profile", {
                        response: response,
                        firstTime: false, //when navigating to the profile screen from the sign up screen, well give a tutorial
                      });
                    } else {
                      return navigation.navigate("RecruiterProfile", {
                        response: response,
                        firstTime: false, //when navigating to the profile screen from the sign up screen, well give a tutorial
                      });
                    }
                  }
                })
                .catch((response) => {
                  Alert.alert(
                    "We are having networking troubles",
                    "please try again later or try re launching your app"
                  );
                });
            }
          }}
        />
        <Button
          title="Sign up"
          onPress={() => {
            return navigation.navigate("ContractorOrRecruiter", {
              firstTime: false, //when navigating to the profile screen from the sign up screen, well give a tutorial
            });
          }}
        ></Button>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: "150",
    backgroundColor: "#fc5c65",
    padding: 10,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 50,
    alignItems: "center",
  },
  passwordInput: {
    height: 40,
    width: "100%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: "white",
    borderColor: "white",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
  userNameInput: {
    height: 40,
    width: "100%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "white",
  },
});
export default WelcomeScreen;
