import { React, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Stylesheet,
  Button,
  Image,
  StatusBar,
  Alert,
} from "react-native";
import { FlatGrid } from "react-native-super-grid";

var getRecruiterInfo = async function (UserName) {
  return fetch(
    //return the promise
    `https://contractorwebapi.azurewebsites.net/api/users/profilePage/${UserName}`
  ).then(function (RecruiterInfo) {
    return RecruiterInfo.json(); //proccess and return this value
  });
};

const ContractorCommunicationScreen = ({ route, navigation }) => {
  //find number of "right to represent" messages for this contractor
  const [items, setItems] = useState([
    { name: "TURQUOISE", code: "#1abc9c" },
    { name: "EMERALD", code: "#2ecc71" },
    { name: "PETER RIVER", code: "#3498db" },
    { name: "AMETHYST", code: "#9b59b6" },
    { name: "WET ASPHALT", code: "#34495e" },
    { name: "GREEN SEA", code: "#16a085" },
    { name: "NEPHRITIS", code: "#27ae60" }, //Testing out different colors of text messages
    { name: "BELIZE HOLE", code: "#2980b9" },
    { name: "WISTERIA", code: "#8e44ad" },
    { name: "MIDNIGHT BLUE", code: "#2c3e50" },
    { name: "SUN FLOWER", code: "#f1c40f" },
    { name: "CARROT", code: "#e67e22" },
    { name: "ALIZARIN", code: "#e74c3c" },
    { name: "CLOUDS", code: "#ecf0f1" },
    { name: "CONCRETE", code: "#95a5a6" },
    { name: "ORANGE", code: "#f39c12" },
    { name: "PUMPKIN", code: "#d35400" },
    { name: "POMEGRANATE", code: "#c0392b" },
    { name: "SILVER", code: "#bdc3c7" },
    { name: "ASBESTOS", code: "#7f8c8d" },
  ]);

  const messages = route.params.messages;
  // console.log(messages);
  //messages.forEach((message) => {
  //  console.log(message);
  //});

  return (
    <View
      style={{
        flex: 1, //move to styles
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <FlatGrid
        itemDimension={300}
        data={messages}
        style={styles.gridView}
        spacing={10}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={[
              styles.itemContainer,
              { backgroundColor: items[index % items.length].code },
            ]}
            onPress={() => {
              //not sure if it'd be better to do a API call or if it'd be better just store the recruiters info in the request
              getRecruiterInfo(item.fromUserName).then(function (
                RecruiterInfo
              ) {
                if (RecruiterInfo.status == "404") {
                  Alert.alert(
                    "oops",
                    "it looks like this recruiter has deleted their account, please restart your app"
                  );
                } else {
                  console.log(RecruiterInfo);
                  return navigation.navigate("AnswerRequest", {
                    message: messages[index], //send the recruiter info to the textscreen page
                    Recruiter: RecruiterInfo,
                  });
                }
              });
            }}
          >
            <View style={styles.chatButton}>
              <Text style={styles.textBox}>{item.fromUserName}</Text>
              <Text style={styles.messageTime}>{item.time}</Text>
            </View>
            <Image
              style={styles.profilePicture}
              source={require("./assets/logoPlaceHolder.png")}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  chatButton: {
    flexDirection: "column",
    justifyContent: "center",
  },
  gridView: {
    marginTop: 0,
    flex: 1,
  },
  messageTime: {
    fontWeight: "600",
    fontSize: 12,
    color: "#fff",
  },
  itemContainer: {
    justifyContent: "space-between",
    borderRadius: 5,
    padding: 10,
    height: 90,
    flexDirection: "row",
  },
  itemName: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "600",
  },
  profilePicture: {
    height: 40,
    width: 40,
    alignSelf: "center",
  },
  textBox: {
    fontWeight: "600",
    fontSize: 20,
    color: "#fff",
  },
});
export default ContractorCommunicationScreen;
