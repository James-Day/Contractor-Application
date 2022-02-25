import { React, useState } from "react";
import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
} from "react-native";

var postAccount = function (
  firstName,
  lastName,
  userName,
  password,
  phoneNumber,
  email,
  highestEducation,
  totalExperience
) {
  //change to async
  let newAccount = {
    userName: userName,
    password: password,
    firstName: firstName,
    lastName: lastName,
    phoneNumber: phoneNumber,
    email: email,
    highest_education: highestEducation,
    totalExperience: totalExperience,
  };

  //Perform some sort of encryption right here

  return fetch(
    //return the promise
    // `https://contractorwebapi20220106135413.azurewebsites.net/api/users/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": 288, //this will have to change to be variable based on the inputs
      },
      body: JSON.stringify(newAccount),
    }
  ).then(function (response) {
    console.log(`HEY123: ${JSON.stringify(newAccount)}`);
    return response.json(); //proccess and return this value
  });
};

const RecruiterSignUpScreen = ({ navigation }) => {
  const [userName, setName] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const Education = [
    "No highschool",
    "Highschool Deploma",
    "Associates",
    "Bachelor's",
    "Masters",
    "Doctorate",
  ];
  const Experience = [
    "< 1 year",
    "1-3 years",
    "4-7 years",
    "7-10 years",
    "> 10 years",
  ];

  return (
    <ImageBackground style={styles.background}>
      <Text style={styles.header}>Create account</Text>
      <TextInput
        style={styles.userNameInput}
        placeholder="First Name"
        placeholderTextColor="grey"
        maxLength={20}
        onChangeText={(val) => setFirstName(val)}
      />

      <TextInput
        style={styles.userNameInput}
        placeholder="Last Name"
        placeholderTextColor="grey"
        maxLength={20}
        onChangeText={(val) => setLastName(val)}
      />
      <TextInput
        style={styles.userNameInput}
        placeholder="Username"
        placeholderTextColor="grey"
        maxLength={20}
        onChangeText={(val) => setName(val)}
      />
      <TextInput
        style={styles.userNameInput}
        placeholder="Password"
        placeholderTextColor="grey"
        maxLength={20}
        onChangeText={(val) => setPassword(val)}
      />

      <TextInput
        style={styles.userNameInput}
        placeholder="Email"
        placeholderTextColor="grey"
        maxLength={20}
        onChangeText={(val) => setEmail(val)}
      />
      <TextInput
        style={styles.userNameInput}
        placeholder="Phone Number"
        placeholderTextColor="grey"
        maxLength={20}
        onChangeText={(val) => setPhoneNumber(val)}
      />
      <TextInput
        style={styles.userNameInput}
        placeholder="Company"
        maxLength={20}
        onChangeText={(val) => setPhoneNumber(val)}
      />

      <Button
        title="Sign up"
        onPress={() => {
          postAccount(
            firstName,
            lastName,
            userName,
            password,
            phoneNumber,
            email
          )
            .then(function (response) {
              if (response.status == 400) {
                Alert.alert(
                  "Signup not successful",
                  "please make sure that all required fields are filled out"
                );
              } else {
                Alert.alert("success account was created");
                return navigation.navigate("Profile", {
                  firstTime: false,
                });
                //Navigate to recruiter / contractor homescreen
              }
            })
            .catch((response) => {
              Alert.alert(
                "We are having networking troubles",
                "please try again later or try re launching your app"
              );
            });
        }}
      />
    </ImageBackground>
  );
};
export default RecruiterSignUpScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  header: {
    fontSize: 25,
    fontWeight: "bold",
  },
  userNameInput: {
    height: 40,
    width: "95%",
    margin: 4,
    borderWidth: 1,
    padding: 10,
    borderColor: "black",
    color: "black",
  },
});
