import {
  Text,
  View,
  StyleSheet,
  Button,
  Platform,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const getFonts = () =>
  Font.loadAsync({
    //If I have time later I'd like to make the fonts a bit softer
    //"lato-black": require("./assets/fonts/FredokaOne-Regular.ttf"),
    // "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });

function RecruiterHomeScreen({ route, navigation }) {
  const { response, firstTime } = route.params;
  const [fontsLoaded, setFontsLoaded] = useState(false);
  // {JSON.stringify(response)} for displaying entire response //will have to decrypt elements in response

  if (fontsLoaded) {
    return (
      <View style={styles.background}>
        <View style={styles.nameBar}>
          <View style={styles.wallpaper}></View>

          <View style={styles.profilePic}>
            <Text style={{ color: "white" }}>profile pic</Text>
          </View>
          <Text style={styles.userName}>
            {response.firstName} {response.lastName}
          </Text>
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
    backgroundColor: "#1abc9c",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  experience: {
    flexDirection: "row",
    top: 10,
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
    fontFamily: "sans-serif",
  },
  nameBar: {
    backgroundColor: "red",
    width: "100%",
    height: "25%",
  },
  wallpaper: {
    backgroundColor: "black",
    width: "95%",
    height: "70%",
    borderRadius: 10,
    margin: 10,
  },
  profilePic: {
    bottom: "29%",
    left: 25,
    backgroundColor: "white",
    width: "28%",
    height: "60%",
    borderRadius: 90,
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
  },
});
