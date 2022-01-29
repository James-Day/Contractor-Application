import React, { Component } from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ActivityIndicatior,
} from "react-native";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

import colors from "../config/colors";

var apiRequest = function () {
  return fetch(
    //return the promise
    "https://contractorwebapi20220106135413.azurewebsites.net/api/users"
  ).then(function (response) {
    return response.json(); //proccess and return this value
  });
};

function practiceFunction() {
  let obj1 = new Object();
  obj1["email"] = "jamesDay123@gmail.com";
  let obj2 = new Object();
  obj2["email"] = "Email2@la.com";

  const objs = new Array(obj1, obj2);
  return objs;
}

class User extends Component {
  maybe = "james";
  render() {
    return <Text> USER {this.maybe}</Text>;
  }
}
//export default User;

function ViewImageScreen(props) {
  apiRequest()
    .then(function (response) {
      console.log(response);
    })
    .catch((response) => {
      console.log("bad response: " + response);
    });

  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/icon.png")}
      />
      <Text style={styles.text}></Text>
    </View>
  );
}

export default ViewImageScreen;

const styles = StyleSheet.create({
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    position: "absolute",
    top: 40,
    left: 30,
  },
  container: {
    backgroundColor: colors.primary,
    flex: 1,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
    position: "absolute",
    top: 40,
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    backgroundColor: "yellow",
    position: "absolute",
    top: 370,
    left: 165,
  },
});
