import { React } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

const ContractorOrRecruiter = ({ navigation }) => {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <TouchableOpacity
        style={{
          height: "35%",
          width: "65%",
          backgroundColor: "lightblue", //change these to look nice
          padding: 10,
          margin: 10,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 50,
        }}
        onPress={() => {
          return navigation.navigate("SignUp", {
            firstTime: false, //when navigating to the profile screen from the sign up screen, will give a tutorial
          });
        }}
      >
        <Text style={styles.textFont}>I'm a contractor</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: "35%",
          width: "65%",
          backgroundColor: "#FF3D00", //change these to look nice
          padding: 10,
          margin: 10,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 50,
        }}
        onPress={() => {
          return navigation.navigate("RecruiterSignUp", {
            firstTime: false, //when navigating to the profile screen from the sign up screen, well give a tutorial
          });
        }}
      >
        <Text style={styles.textFont}>I'm a recruiter </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttons: {
    flexDirection: "column",
  },
  btnSize: {
    width: "100%",
  },
  textFont: {
    fontWeight: "bold",
    fontSize: 30,
    color: "white",
  },
});
export default ContractorOrRecruiter;
