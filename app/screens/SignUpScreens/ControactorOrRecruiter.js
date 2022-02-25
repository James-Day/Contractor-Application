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
      source={require("./assets/background.jpg")}
    >
      <TouchableOpacity
        style={[styles.button, { backgroundColor: "lightblue" }]}
        onPress={() => {
          return navigation.navigate("SignUp", {
            firstTime: false,
          });
        }}
      >
        <Text style={styles.textFont}>I'm a contractor</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#FFD00" }]}
        onPress={() => {
          return navigation.navigate("RecruiterSignUp", {
            firstTime: false,
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
  btnSize: {
    width: "100%",
  },
  button: {
    height: "35%",
    width: "65%",
    padding: 10,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  textFont: {
    fontWeight: "bold",
    fontSize: 30,
    color: "white",
  },
});
export default ContractorOrRecruiter;
