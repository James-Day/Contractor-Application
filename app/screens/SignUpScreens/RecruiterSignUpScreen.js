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

function setCharAt(str, index) {
  if (index > str.length - 1) return str;
  return (
    str.substring(0, index) +
    String.fromCharCode(str.charCodeAt(index) + 1) +
    str.substring(index + 1)
  );
}

var postAccount = function (
  firstName,
  lastName,
  userName,
  password,
  phoneNumber,
  email,
  company
) {
  //change to async
  let newAccount = {
    userName: userName,
    password: password,
    firstName: firstName,
    lastName: lastName,
    phoneNumber: phoneNumber,
    email: email,
    company,
    isContractor: false,
  };

  for (var i = 0; i < newAccount.password.length; i++) {
    newAccount.password = setCharAt(newAccount.password, i); //very simple encryption will need to research later
    console.log("working");
  }
  return fetch(
    //return the promise
    `https://contractorwebapi.azurewebsites.net/api/users/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": JSON.stringify(newAccount).length,
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
  const [company, setCompany] = useState("");

  return (
    <ImageBackground style={styles.background}>
      <Text style={styles.header}>Create account</Text>
      <TextInput
        style={styles.userNameInput}
        placeholder="First Name"
        placeholderTextColor="grey"
        maxLength={50}
        onChangeText={(val) => setFirstName(val)}
      />

      <TextInput
        style={styles.userNameInput}
        placeholder="Last Name"
        placeholderTextColor="grey"
        maxLength={50}
        onChangeText={(val) => setLastName(val)}
      />
      <TextInput
        style={styles.userNameInput}
        placeholder="Username"
        placeholderTextColor="grey"
        maxLength={25}
        onChangeText={(val) => setName(val)}
      />
      <TextInput
        style={styles.userNameInput}
        placeholder="Password"
        placeholderTextColor="grey"
        maxLength={25}
        onChangeText={(val) => setPassword(val)}
      />

      <TextInput
        style={styles.userNameInput}
        placeholder="Email"
        placeholderTextColor="grey"
        maxLength={50}
        onChangeText={(val) => setEmail(val)}
      />
      <TextInput
        style={styles.userNameInput}
        placeholder="Phone Number"
        placeholderTextColor="grey"
        maxLength={10}
        onChangeText={(val) => setPhoneNumber(val)}
      />
      <TextInput
        style={styles.userNameInput}
        placeholder="Company"
        maxLength={50}
        onChangeText={(val) => setCompany(val)}
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
            email,
            company
          )
            .then(function (response) {
              if (response.status == 400) {
                Alert.alert(
                  "Signup not successful",
                  "please make sure that all required fields are filled out"
                );
              } else {
                Alert.alert("success account was created");
                return navigation.navigate("RecruiterProfile", {
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
