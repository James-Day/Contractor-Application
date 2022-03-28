import { React, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";

var postAccount = async function (from, to, message) {
  let newRequest = {
    fromUserName: from,
    toUserName: to,
    message: message,
  };
  return fetch(
    //return the promise
    `https://contractorwebapi.azurewebsites.net/api/users/comm`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": JSON.stringify(newRequest).length,
      },
      body: JSON.stringify(newRequest),
    }
  ).then(function (response) {
    console.log(`HEY123: ${JSON.stringify(newRequest)}`);
    return response.json(); //proccess and return this value
  });
};

const DesignRepresentRequest = ({ route, navigation }) => {
  const communicateFrom = route.params.user.firstName;
  const communicateFromCompany = route.params.user.company;
  const [communicateToUser, setCommunicateTo] = useState("");
  const [companyRequest, setCompany] = useState("COMPANY");
  const [jobTitle, setJobTitle] = useState("POSITION");

  //const { communicateTo } = route.params; // could auto fill the text input of who you are communicating to if you find someones profile and click message.
  return (
    <View style={styles.background}>
      <Text>Who would you like to send a request to:</Text>
      <TextInput
        style={styles.textInputs}
        placeholder="Send to"
        placeholderTextColor="grey"
        maxLength={25}
        onChangeText={(val) => setCommunicateTo(val)}
      />
      <Text>What Company is this position for:</Text>
      <TextInput
        style={styles.textInputs}
        placeholder="Company"
        placeholderTextColor="grey"
        maxLength={25}
        onChangeText={(val) => setCompany(val)}
      />
      <Text>What position would you like to represent them for:</Text>
      <TextInput
        style={styles.textInputs}
        placeholder="jobTitle"
        placeholderTextColor="grey"
        maxLength={25}
        onChangeText={(val) => setJobTitle(val)}
      />

      <TouchableOpacity
        style={styles.templateButtons}
        onPress={() => {
          let representTemplate = ` Template 1: I "first name" "last name" give you ${communicateFrom} permission
          to represent me at ${companyRequest} for the position of ${jobTitle}`;
          postAccount(communicateFrom, communicateToUser, representTemplate);
          Alert.alert(
            //before sending will have to do some verification to make sure send to is a valid account.
            "Request Sent!",
            `request was sent to ${communicateToUser} `
          );
        }}
      >
        <Text style={{}}>
          Template 1: I "first name" "last name" give you {communicateFrom}{" "}
          permission to represent me at {companyRequest} for the position of{" "}
          {jobTitle}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.templateButtons}
        onPress={() => {
          let representTemplate = ` Template 2: I "first name" " last name", give ${communicateFrom} from
          ${communicateFromCompany} my permission to present my resume and
          credentials to ${companyRequest} for the ${jobTitle} something about  
          location and pay..`; //change this to take proper params
          postAccount(communicateFrom, communicateToUser, representTemplate);
          Alert.alert(
            //before sending will have to do some verification to make sure send to is a valid account.
            "Request Sent!",
            `request was sent to ${communicateToUser} `
          );
        }}
      >
        <Text style={{}}>
          Template 2: I "first name" " last name", give {communicateFrom} from{" "}
          {communicateFromCompany} my permission to present my resume and
          credentials to {companyRequest} for the {jobTitle} something about
          location and pay..
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.templateButtons}
        onPress={() => {
          let representTemplate = ` Template 3 I, (first name), do hereby give exclusive authorization to
          ${communicateFromCompany} to submit and represent me at for the position of
          ${jobTitle} at ${companyRequest}. I have not and will not give any entity, firm and/or
          agency the right to submit my qualifications or represent me in any way for this specific position.`;
          postAccount(communicateFrom, communicateToUser, representTemplate);
          Alert.alert(
            //before sending will have to do some verification to make sure send to is a valid account.
            "Request Sent!",
            `request was sent to ${communicateToUser} `
          );
        }}
      >
        <Text style={{}}>
          Template 3 I, (first name), do hereby give exclusive authorization to
          {communicateFromCompany} to submit and represent me at for the
          position of {jobTitle} at ${companyRequest}. I have not and will not
          give any entity, firm and/or agency the right to submit my
          qualifications or represent me in any way for this specific position.
        </Text>
      </TouchableOpacity>
    </View>
  ); //I probablly don't want this screen to be full screen
}; // if I can I want to find a way to make this a popup like the alert box
//maybe allow for the recruiter to send an extra message if they want
//I'll change this to have 3 seperate screens for represent requests where each one will take in the info that is needed.
//could make a scrollable for the templates and once the one is chosen, it sends your to that page.

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-start",
    flexDirection: "column",
    alignItems: "center",
    top: 10,
  },
  textInputs: {
    height: 40,
    width: "95%",
    margin: 4,
    borderWidth: 1,
    padding: 10,
    borderColor: "black",
    color: "black",
  },
  templateButtons: {
    width: "100%",
    padding: 20,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: "lightblue",
  },
});
export default DesignRepresentRequest;
