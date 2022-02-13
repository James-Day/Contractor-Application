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
import SelectDropdown from "react-native-select-dropdown";
import { borderRightColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RadioButton } from "react-native-paper";

var postAccount = function (
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
) {
  //change to async
  let newAccount = {
    userName: userName,
    password: password,
    firstName: firstName,
    lastName: lastName,
    phoneNumber: phoneNumber,
    email: email,
    linkedin: linkedin,
    ssnLastFour: ssnlastfour,
    highest_education: highestEducation,
    graduationYear: graduationYear,
    totalExperience: totalExperience,
    relocation: relocation,
  };
  // for (var i = 0; i < 10; i++) {
  // newAccount.password[i] += 1;
  // }
  //console.log(newAccount);
  //console.log(typeof newAccount);

  return fetch(
    //return the promise
    // `https://contractorwebapi20220106135413.azurewebsites.net/api/users/`,
    //`https://localhost:7266/api/users/`,
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

const ContractorSignUpScreen = ({ navigation }) => {
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

  const [checked, setChecked] = useState("Contractor");

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
        placeholder="First Name                    "
        placeholderTextColor="grey" //move some of these to the styles?
        maxLength={20}
        onChangeText={(val) => setFirstName(val)}
      />

      <TextInput
        style={styles.userNameInput}
        placeholder="Last Name                    "
        placeholderTextColor="grey" //move some of these to the styles?
        maxLength={20}
        onChangeText={(val) => setLastName(val)}
      />
      <TextInput
        style={styles.userNameInput}
        placeholder="Username                   "
        placeholderTextColor="grey" //move some of these to the styles?
        maxLength={20}
        onChangeText={(val) => setName(val)}
      />
      <TextInput
        style={styles.userNameInput}
        placeholder="Password                    "
        placeholderTextColor="grey" //move some of these to the styles?
        maxLength={20}
        onChangeText={(val) => setPassword(val)}
      />
      <View //This was a text input but I think I'll have the user give their linked in and phonenumber on their profile screen if they'd like
      //style={styles.userNameInput}
      //placeholder="Phone Number (optional)      "
      //placeholderTextColor="grey"
      //maxLength={20}
      //onChangeText={(val) => setPhoneNumber(val)}
      />
      <TextInput
        style={styles.userNameInput}
        placeholder="Email                        "
        placeholderTextColor="grey"
        maxLength={20}
        onChangeText={(val) => setEmail(val)}
      />
      <View //This was a text input but I think I'll have the user give their linked in and phonenumber on their profile screen if they'd like
      //style={styles.userNameInput}
      //placeholder="LinkedIn                    "
      //placeholderTextColor="grey"
      //maxLength={20}
      //onChangeText={(val) => setLinkedin(val)}
      />
      <TextInput
        style={styles.userNameInput}
        placeholder="Last 4 digits of SSN         "
        placeholderTextColor="grey"
        maxLength={4}
        onChangeText={(val) => setssnlastfour(val)}
      />

      <View
        style={{
          //borderColor: "black",
          //borderBottomWidth: 1,
          // borderLeftWidth: 1,
          // borderRightWidth: 1,
          //borderTopWidth: 1,
          flexDirection: "row",
          alignItems: "center",
          width: "95%",
        }}
      >
        <Text>Education</Text>
        <View style={styles.dropDownView}>
          <SelectDropdown //Highest education
            data={Education}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            defaultButtonText={"Select Education"}
            buttonStyle={styles.halfScreen}
            buttonTextStyle={styles.dropDownText} //Move all of this to styles
            dropdownIconPosition={"right"}
            renderDropdownIcon={(isOpened) => {
              return (
                <FontAwesome
                  name={isOpened ? "chevron-up" : "chevron-down"}
                  color={"#444"}
                  size={18}
                />
              );
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item;
            }}
          ></SelectDropdown>
        </View>
      </View>

      <View
        style={{
          //borderColor: "black",
          //borderBottomWidth: 1,
          // borderLeftWidth: 1,
          // borderRightWidth: 1,
          //borderTopWidth: 1,
          flexDirection: "row",
          alignItems: "center",
          width: "95%",
        }}
      >
        <Text>Years of Experience</Text>
        <View style={styles.dropDownView}>
          <SelectDropdown //Highest education
            data={Experience}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            defaultButtonText={"Select Experience"}
            buttonStyle={styles.halfScreen2}
            buttonTextStyle={styles.dropDownText} //Move all of this to styles
            dropdownIconPosition={"right"}
            renderDropdownIcon={(isOpened) => {
              return (
                <FontAwesome
                  name={isOpened ? "chevron-up" : "chevron-down"}
                  color={"#444"}
                  size={18}
                />
              );
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item;
            }}
          ></SelectDropdown>
        </View>
      </View>
      <View style={styles.radioButtons}>
        <Text>Contractor</Text>
        <RadioButton
          value="first"
          status={checked === "Contractor" ? "checked" : "unchecked"}
          onPress={() => setChecked("Contractor")}
        />
        <RadioButton
          value="second"
          status={checked === "Recruiter" ? "checked" : "unchecked"}
          onPress={() => setChecked("Recruiter")}
        />
      </View>

      <Button
        title="Sign up"
        onPress={() => {
          let x = postAccount(
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
          )
            .then(function (response) {
              if (response.status == 400) {
                Alert.alert(
                  "Signup not successful",
                  "please make sure that all required fields are filled out"
                );
              } else {
                Alert.alert("success account was created");
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
export default ContractorSignUpScreen;

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
  halfScreen: {
    height: 50,
    width: "60%",
    // margin: 2,
    borderWidth: 1,
    //padding: 10,
    borderColor: "black",
    color: "black",
  },
  halfScreen2: {
    height: 50,
    width: "76.5%",
    // margin: 2,
    borderWidth: 1,
    //padding: 10,
    borderColor: "black",
    color: "black",
  },
  dropDownView: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  dropDownText: {
    fontSize: 13,
    fontWeight: "bold",
  },
  radioButtons: {
    flexDirection: "row",
    alignItems: "center",
  },
});
