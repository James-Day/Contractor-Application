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
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

var PostAccount = function (
  firstName,
  lastName,
  userName,
  password,
  phoneNumber,
  email,
  linkedIn,
  ssn,
  education,
  gradYear,
  experience,
  relocation
) {
  fetch("https://contractorwebapi20220106135413.azurewebsites.net/api/users/", {
    method: "POST",
    body: JSON.stringify({
      userName: "Moto123",
      password: "ILoveMoto!",
      firstName: "Moto",
      lastName: "Heistand",
      phoneNumber: "4254358149",
      email: "asodome@outlook.com",
      linkedin: "someurl.com",
      ssnLastFour: 1234,
      highest_education: "Bachelors",
      graduationYear: 2021,
      totalExperience: "3 years",
      relocation: true,
    }),
  });
  console.log("hey");
};

const SignUpScreen = ({ navigation }) => {
  const [userName, setName] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [ssnlastfour, setssnlastfour] = useState("");
  const [highestEducation, setHighestEducation] = useState("");
  const [graduationYear, setGraduationYear] = useState("");
  const [totalExperience, setTotalExperience] = useState("");
  const [relocation, setRelocation] = useState("");

  return (
    <ImageBackground style={styles.background}>
      <Text style={styles.header}>Create account</Text>
      <TextInput
        style={styles.userNameInput}
        placeholder="First Name                    "
        placeholderTextColor="grey" //move some of these to the styles?
        color="black"
        maxLength={20}
        onChangeText={(val) => setFirstName(val)}
      />
      <TextInput
        style={styles.userNameInput}
        placeholder="Last Name                    "
        placeholderTextColor="grey" //move some of these to the styles?
        color="black"
        maxLength={20}
        onChangeText={(val) => setLastName(val)}
      />
      <TextInput
        style={styles.userNameInput}
        placeholder="Username                   "
        placeholderTextColor="grey" //move some of these to the styles?
        color="black"
        maxLength={20}
        onChangeText={(val) => setName(val)}
      />
      <TextInput
        style={styles.userNameInput}
        placeholder="Password                    "
        placeholderTextColor="grey" //move some of these to the styles?
        color="black"
        maxLength={20}
        onChangeText={(val) => setPassword(val)}
      />
      <TextInput
        style={styles.userNameInput}
        placeholder="Phone Number (optional)      "
        placeholderTextColor="grey" //move some of these to the styles?
        color="black"
        maxLength={20}
        onChangeText={(val) => setPhoneNumber(val)}
      />
      <TextInput
        style={styles.userNameInput}
        placeholder="Email                        "
        placeholderTextColor="grey" //move some of these to the styles?
        color="black"
        maxLength={20}
        onChangeText={(val) => setEmail(val)}
      />
      <TextInput
        style={styles.userNameInput}
        placeholder="LinkedIn                    "
        placeholderTextColor="grey" //move some of these to the styles?
        color="black"
        maxLength={20}
        onChangeText={(val) => setLinkedin(val)}
      />
      <TextInput
        style={styles.userNameInput}
        placeholder="Last 4 digits of SSN         "
        placeholderTextColor="grey" //move some of these to the styles?
        color="black"
        maxLength={20}
        onChangeText={(val) => setssnlastfour(val)}
      />
      <TextInput
        style={styles.userNameInput}
        placeholder="Highest education                    " //change highest education to a drop down menu?
        placeholderTextColor="grey" //move some of these to the styles?
        color="black"
        maxLength={20}
        onChangeText={(val) => setHighestEducation(val)}
      />
      <TextInput
        style={styles.userNameInput}
        placeholder="Graduation year                    "
        placeholderTextColor="grey" //move some of these to the styles?
        color="black"
        maxLength={20}
        onChangeText={(val) => setGraduationYear(val)}
      />
      <TextInput
        style={styles.userNameInput}
        placeholder="Total experience (years)                    "
        placeholderTextColor="grey" //move some of these to the styles?
        color="black"
        maxLength={20}
        onChangeText={(val) => setTotalExperience(val)}
      />
      <TextInput
        style={styles.userNameInput}
        placeholder="Is relocation necesary?                    " //remove this or change to some sort of yes no button
        placeholderTextColor="grey" //move some of these to the styles?
        color="black"
        maxLength={20}
        onChangeText={(val) => setRelocation(val)}
      />
      <Button
        title="Sign up"
        onPress={() => {
          PostAccount(
            firstName,
            lastName,
            userName,
            password,
            phoneNumber,
            email,
            linkedin,
            ssnlastfour,
            highestEducation,
            graduationYear,
            totalExperience,
            relocation
          );
        }}
      ></Button>
    </ImageBackground>
  );
};
export default SignUpScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  userNameInput: {
    height: 40,
    width: "95%",
    margin: 4,
    borderWidth: 1,
    padding: 10,
    borderColor: "black",
  },
  header: {
    fontSize: 25,
    fontWeight: "bold",
  },
});
