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
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const ContractorOrRecruiter = ({ navigation }) => {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.buttons}>
        <TouchableOpacity
          style={{
            height: "60%",
            width: "50%",
            backgroundColor: "lightblue", //change these to look nice
            padding: 10,
            margin: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            return navigation.navigate("SignUp", {
              firstTime: false, //when navigating to the profile screen from the sign up screen, well give a tutorial
            });
          }}
        >
          <Text style={styles.textFont}>I'm a contractor</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: "60%",
            width: "50%",
            backgroundColor: "#FF3D00", //change these to look nice
            padding: 10,
            margin: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            return navigation.navigate("SignUp", {
              firstTime: false, //when navigating to the profile screen from the sign up screen, well give a tutorial
            });
          }}
        >
          <Text style={styles.textFont}>I'm a recruiter</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttons: {
    flexDirection: "row",
  },
  btnSize: {
    width: "100%",
  },
  textFont: {
    fontWeight: "bold",
    fontSize: 30,
    color: "white",
  },
});
export default ContractorOrRecruiter;
