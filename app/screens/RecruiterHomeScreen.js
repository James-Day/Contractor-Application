import { Text, View, StyleSheet } from "react-native";
import React, { useState } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const getFonts = () =>
  Font.loadAsync({
    "lato-black": require("../assets/fonts/Lato-Black.ttf"),
    "nunito-bold": require("../assets/fonts/Nunito-Bold.ttf"),
  });

function RecruiterHomeScreen({ route, navigation }) {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <View style={styles.background}>
        <View style={styles.nameBar}>
          <View style={styles.profilePic}>
            <Text style={{ color: "white" }}>profile pic</Text>
          </View>
          <Text style={styles.userName}>Name with email below it?</Text>
        </View>
        <View style={styles.experience}>
          <View style={styles.stats}>
            <Text style={styles.greyText}>Current Posts</Text>
            <Text style={styles.totalExperience}></Text>
          </View>
          <Text>|</Text>
          <View style={styles.stats}>
            <Text style={styles.greyText}>Email</Text>
          </View>
          <Text>|</Text>
          <View style={styles.stats}>
            <Text style={styles.greyText}>LinkedIn</Text>
          </View>
        </View>
      </View>
    );
  } else {
    // when fonts aren't loaded, load fonts..
    //loading fonts

    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)} //when fonts function is finished,
        onError={console.warn}
      />
    );
  }
}
export default RecruiterHomeScreen;
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "grey",
  },
  experience: {
    flexDirection: "row",
    top: 40,
    backgroundColor: "white",
    width: "100%",
    height: "20%",
  },
  greyText: {
    color: "grey",
    fontSize: 18,
  },
  linkedIn: {
    fontSize: 15,
    fontFamily: "lato-black",
  },
  nameBar: {
    flexDirection: "row",
    top: 30,
    backgroundColor: "white",
    width: "100%",
    height: "20%",
  },
  nameProfilePic: {
    top: 50,
    left: 20,
    fontFamily: "nunito-bold",
    fontSize: 24,
    color: "white",
  },
  profilePic: {
    top: "5%",
    left: 25,
    backgroundColor: "black",
    width: "27%",
    height: "75%",
  },
  stats: {
    alignItems: "center",
    backgroundColor: "green",
    width: "33%",
    height: "100%",
  },
  totalExperience: {
    fontSize: 22,
    fontFamily: "lato-black",
  },
  userName: {
    left: "25%",
    top: "12%",
    fontSize: 20,
    fontFamily: "lato-black",
  },
});
