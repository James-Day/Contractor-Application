import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  Platform,
  Button,
} from "react-native";
import React, { useState } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const getFonts = () =>
  Font.loadAsync({
    //"lato-black": require("C:app/screens/HomeScreens/assets/fonts/Lato-Black.ttf"), //cant figure out how to load fonts, but in the future I'd like to change this page to have softer fonts
    // "nunito-bold": require("C:app/screens/HomeScreens/assets/fonts/Nunito-Bold.ttf"),
  });

function ContractorHomeScreen({ route, navigation }) {
  const { response, firstTime } = route.params;
  const [fontsLoaded, setFontsLoaded] = useState(false);
  //Should add some check to make sure response has users data.

  if (fontsLoaded) {
    return (
      <View style={styles.background}>
        <View style={styles.nameBar}>
          <View style={styles.profilePic}>
            <Text>pic</Text>
          </View>
          <Text style={styles.userName}>
            {response.firstName} {response.lastName}
          </Text>
        </View>
        <View style={styles.experience}>
          <View style={styles.stats}>
            <Text style={styles.greyText}>experience</Text>
            <Text style={styles.totalExperience}>
              {response.totalExperience}
            </Text>
          </View>
          <Text>|</Text>
          <View style={styles.stats}>
            <Text style={styles.greyText}>Email</Text>
            <Text style={styles.linkedIn}>{response.email}</Text>
          </View>
          <Text>|</Text>
          <View style={styles.stats}>
            <Text style={styles.greyText}>LinkedIn</Text>
            <Text style={styles.linkedIn}>{response.linkedin}</Text>
          </View>
        </View>

        <Text style={styles.nameProfilePic}>{response.firstName}</Text>
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
export default ContractorHomeScreen;
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "#1abc9c",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
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
    //I might want to combine linked in and email into one view so there is more room to display them
    fontSize: 15,
    fontFamily: "sans-serif",
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
    fontFamily: "sans-serif",
    fontWeight: "bold",
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
    fontFamily: "sans-serif",
  },
  userName: {
    left: "25%",
    top: "12%",
    fontSize: 20,
    fontFamily: "sans-serif",
    fontWeight: "bold",
  },
});
