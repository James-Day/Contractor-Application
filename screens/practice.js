import React from "react";
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

function apiRequest() {
  return fetch(
    "https://contractorwebapi20220106135413.azurewebsites.net/api/users"
  )
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
    });
}

function ViewImageScreen(props) {
  let x = apiRequest();
  console.log(x);
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>

      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/icon.png")}
      />
      <Text style={styles.text} source={x}></Text>
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
