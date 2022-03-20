import { React, useState } from "react";
import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  Platform,
  StatusBar,
} from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import FontAwesome from "react-native-vector-icons/FontAwesome";

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
  email,
  highest_education,
  totalExperience
) {
  //change to async
  let newAccount = {
    userName: userName,
    password: password,
    firstName: firstName,
    lastName: lastName,
    email: email,
    highest_education: highest_education,
    totalExperience: totalExperience,
    isContractor: true,
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

const SignUpScreen = ({ navigation }) => {
  const [userName, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [highestEducation, sethighestEducation] = useState("");
  const [yearsOfExperience, setYearsOfExperience] = useState("");

  const EducationChoices = [
    "No highschool",
    "Highschool Deploma",
    "Associates",
    "Bachelor's",
    "Masters",
    "Doctorate",
    "Prefer not to Answer",
  ];
  const ExperienceChoices = [
    "< 1 year",
    "1-3 years",
    "4-7 years",
    "7-10 years",
    "> 10 years",
    "Prefer not to Answer",
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
        placeholder="Email"
        placeholderTextColor="grey"
        maxLength={50}
        onChangeText={(val) => setEmail(val)}
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

      <View style={styles.dropDownView}>
        <Text>Education</Text>
        <View style={styles.dropDownBox}>
          <SelectDropdown //Highest Education
            data={EducationChoices}
            onSelect={(selectedItem) => {
              sethighestEducation(selectedItem);
            }}
            defaultButtonText={"Select Education"}
            buttonStyle={styles.EducationHalfScreen}
            buttonTextStyle={styles.dropDownText}
            dropdownIconPosition={"right"}
            renderDropdownIcon={(isOpened) => {
              return (
                <FontAwesome
                  name={isOpened ? "chevron-up" : "chevron-down"}
                  color={"#444"}
                  size={25}
                />
              );
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
          ></SelectDropdown>
        </View>
      </View>

      <View style={styles.dropDownView}>
        <Text>Years of Experience</Text>
        <View style={styles.dropDownBox}>
          <SelectDropdown //Highest Education
            data={ExperienceChoices}
            onSelect={(selectedItem) => {
              setYearsOfExperience(selectedItem);
            }}
            defaultButtonText={"Select Experience"}
            buttonStyle={styles.ExperienceHalfScreen}
            buttonTextStyle={styles.dropDownText}
            dropdownIconPosition={"right"}
            renderDropdownIcon={(isOpened) => {
              return (
                <FontAwesome
                  name={isOpened ? "chevron-up" : "chevron-down"}
                  color={"#444"}
                  size={25}
                />
              );
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
          ></SelectDropdown>
        </View>
      </View>
      <Button
        title="Sign up"
        onPress={() => {
          postAccount(
            firstName,
            lastName,
            userName,
            password,
            email,
            highestEducation,
            yearsOfExperience
          )
            .then(function (response) {
              if (response.status == 400) {
                Alert.alert(
                  "Signup not successful",
                  "please make sure that all required fields are filled out"
                );
              } else {
                Alert.alert("success account was created");
                //Navigate to contractor homescreen
                return navigation.navigate("Profile", {
                  firstTime: false,
                  response,
                });
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
export default SignUpScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  dropDownText: {
    fontSize: 13,
    fontWeight: "bold",
  },
  dropDownBox: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  dropDownView: {
    flexDirection: "row",
    alignItems: "center",
    width: "95%",
  },
  EducationHalfScreen: {
    height: 50,
    width: "60%",
    borderWidth: 1,
    borderColor: "black",
    color: "black",
  },
  ExperienceHalfScreen: {
    height: 50,
    width: "76.5%",
    borderWidth: 1,
    borderColor: "black",
    color: "black",
  },
  header: {
    fontSize: 25,
    fontWeight: "bold",
  },
  radioButtons: {
    flexDirection: "row",
    alignItems: "center",
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
