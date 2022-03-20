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
        <TouchableOpacity
          style={{
            backgroundColor: "black",
            height: 100,
            width: 100,
            top: 25,
            alignSelf: "center",
          }}
          title="Temporary button to send to 'chat' screen"
          onPress={() => {
            return navigation.navigate("RecruiterCommunication", {
              firstTime: false, //when navigating to the profile screen from the sign up screen, well give a tutorial
            });
          }}
        >
          <Text style={{ color: "white" }}>
            Place holder button for testing out communication page
          </Text>
        </TouchableOpacity>
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
    flexDirection: "row",
    backgroundColor: "white",
    width: "100%",
    height: "20%",
  },
  nameProfilePic: {
    top: 50,
    left: 20,
    fontFamily: "sans-serif",
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
  },
});
